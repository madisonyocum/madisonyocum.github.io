import Image from "next/image";

import type { ProjectImage } from "@/content/projects";
import { asset } from "@/lib/asset";
import styles from "./ProjectMedia.module.css";

type ProjectMediaProps = {
  image?: ProjectImage;
  /** width / height of the frame. Fixed up front so nothing shifts on load. */
  ratio: number;
  /** Shown in the placeholder so the file is obvious to drop in later. */
  placeholder: string;
  sizes: string;
  priority?: boolean;
};

/**
 * The preview surface for a project: an edge-to-edge image, or a labelled
 * placeholder until one exists. No client JavaScript - the hover behaviour is
 * CSS, driven by the card that wraps it.
 *
 * The screenshots carry their own padding and backdrop, so the frame adds
 * none of its own; `tint` only shows while an image is loading or missing.
 */
export function ProjectMedia({
  image,
  ratio,
  placeholder,
  sizes,
  priority,
}: ProjectMediaProps) {
  return (
    <div className={styles.media} style={{ aspectRatio: `${ratio}` }}>
      {image ? (
        <Image
          className={styles.image}
          src={asset(image.src)}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes={sizes}
          priority={priority}
        />
      ) : (
        <div className={styles.placeholder}>
          <span className={styles.placeholderMark} aria-hidden="true" />
          <span className={styles.placeholderText}>{placeholder}</span>
        </div>
      )}
    </div>
  );
}
