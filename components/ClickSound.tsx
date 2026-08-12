"use client";

import { useEffect } from "react";

/**
 * A small tactile click: on hovering a project card, and on pressing any
 * link or button.
 *
 * The sound is synthesised with the Web Audio API rather than loaded as a
 * file - a filtered noise burst with a very fast decay, which is what a
 * mechanical click mostly is. That keeps it at zero bytes over the network
 * and lets the tone be tuned in code.
 *
 * Two delegated listeners handle the whole page. Browser autoplay policy
 * only lets audio start after a real gesture, so the context is created on
 * the first press; hover ticks join in from then on. Touch devices never
 * hover, and anyone who has asked for reduced motion gets silence.
 */
export function ClickSound() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let ctx: AudioContext | null = null;
    let noise: AudioBuffer | null = null;

    /** ~40ms of white noise, generated once and reused for every click. */
    const getNoise = (context: AudioContext) => {
      if (noise) return noise;
      const length = Math.floor(context.sampleRate * 0.04);
      noise = context.createBuffer(1, length, context.sampleRate);
      const channel = noise.getChannelData(0);
      for (let i = 0; i < length; i += 1) channel[i] = Math.random() * 2 - 1;
      return noise;
    };

    /** @param volume peak gain - hover is quieter than a deliberate press. */
    const tick = (volume: number) => {
      ctx ??= new AudioContext();
      if (ctx.state === "suspended") void ctx.resume();

      const now = ctx.currentTime;

      const source = ctx.createBufferSource();
      source.buffer = getNoise(ctx);

      // Band-pass keeps it a dry tick rather than a hiss.
      const filter = ctx.createBiquadFilter();
      filter.type = "bandpass";
      filter.frequency.value = 1900;
      filter.Q.value = 0.9;

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.exponentialRampToValueAtTime(volume, now + 0.002);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.035);

      source.connect(filter).connect(gain).connect(ctx.destination);
      source.start(now);
      source.stop(now + 0.04);
    };

    const onPress = (event: PointerEvent) => {
      const target = event.target as HTMLElement | null;
      if (target?.closest("a, button")) tick(0.06);
    };

    // Fires once per card: moving between children of the same card is
    // ignored, so a single hover makes a single sound.
    let lastHovered: Element | null = null;
    const onHover = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      const card =
        (event.target as HTMLElement | null)?.closest("[data-sound-hover]") ??
        null;
      if (card === lastHovered) return;
      lastHovered = card;
      if (card) tick(0.035);
    };

    document.addEventListener("pointerdown", onPress);
    document.addEventListener("pointerover", onHover);
    return () => {
      document.removeEventListener("pointerdown", onPress);
      document.removeEventListener("pointerover", onHover);
      void ctx?.close();
    };
  }, []);

  return null;
}
