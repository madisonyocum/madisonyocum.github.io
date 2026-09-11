/**
 * Featured work.
 *
 * Everything on the site is rendered from this file - titles, copy, links,
 * imagery and statuses. Editing content should never require touching a
 * component.
 *
 * How linking works
 *   Every card opens its own case study at /work/<slug>. The case study is
 *   where `liveUrl` and `github` surface as "Visit live project" / "View
 *   source" buttons.
 *
 * How to add an image
 *   1. Drop the file in /public/images/
 *   2. Set `image` (card, 3264 x 2048) and `caseImage` (case study,
 *      2592 x 1634) to { src, width, height, alt }
 *   Until then a labelled placeholder frame renders in its place.
 *   See public/images/README.md for the sizing rationale.
 */

export type ProjectStatus = "Shipped" | "Work in progress" | "Prototype";

export type ProjectImage = {
  src: string;
  /** Intrinsic dimensions - required so the layout never shifts on load. */
  width: number;
  height: number;
  alt: string;
};

export type Project = {
  slug: string;
  title: string;
  /** One short line under the title on the card. Keep it punchy. */
  tagline: string;
  /** Two sentences under the tagline on the card. What it is, and so what. */
  summary: string;
  /** Small pill on the card - the discipline. */
  tag: string;
  /** Sits beside the pill: client, or where the project lives. */
  context: string;
  /** Backdrop colour behind the floating screenshot on the card. */
  tint: string;
  year: string;
  status: ProjectStatus;
  role: string;
  /** Optional headline number, e.g. reach or usage. */
  metric?: string;
  technologies: string[];
  /** The real thing, linked from the case study. */
  liveUrl?: string;
  github?: string;
  /** Design file, linked from the case study. */
  figmaUrl?: string;
  /** Card image, 3264 x 2048. */
  image?: ProjectImage;
  /** Case-study image, 2592 x 1634. Falls back to `image` if absent. */
  caseImage?: ProjectImage;
  /** Aspect ratio of the case-study media, as width / height. */
  ratio: number;
  /** The case study itself. Short by design - a few paragraphs, no more. */
  detail: {
    premise: string;
    why: string;
    /** Omit when the "why" already covers the work; the section is then hidden. */
    what?: string;
    /** What came of it: reach, adoption, what it changed. Optional, as above. */
    impact?: string;
  };
};

export const projects: Project[] = [
  {
    slug: "virtual-vinyl",
    title: "Virtual Vinyl",
    tagline: "Digital listening, made tactile",
    summary:
      "A browser-based music experience I designed and built from scratch, where you handle a record instead of tapping a row in a list. It has been live since 2026 and reaches around a thousand people a month.",
    tag: "Design + Front-end",
    context: "virtualvinyl.app",
    tint: "#e6e2d8",
    year: "2026",
    status: "Shipped",
    role: "Design + Front-end",
    metric: "2k+ monthly users",
    // TODO(madison): confirm the real stack.
    technologies: ["React", "TypeScript", "Web Audio API", "CSS"],
    liveUrl: "https://www.virtualvinyl.app/",
    github: undefined, // TODO(madison): add repo URL to show "View source"
    image: {
      src: "/images/vinyl-tile.png",
      width: 3264,
      height: 2048,
      alt: "Virtual Vinyl: a record on a turntable beside a now-playing panel with playback controls",
    },
    caseImage: {
      src: "/images/vinyl-casestudy.jpg",
      width: 2592,
      height: 1634,
      alt: "Virtual Vinyl: the start screen overlapping the player, where a record spins beside track details and playback controls",
    },
    ratio: 16 / 10,
    // TODO(madison): draft copy - rewrite in your own words before the interview.
    detail: {
      premise:
        "A browser-based music experience that turns digital listening into something more tactile and playful.",
      why: "Streaming made music frictionless and, in the process, made it disposable. I wanted to find out whether a small amount of deliberate, physical-feeling friction - handling a record rather than tapping a row in a list - changes how it feels to listen.",
      what: "I designed and built it end to end, from the first sketch to the shipped site that around a thousand people use each month. The motion and audio behaviour respond to real interaction rather than playing back canned animation.",
      impact:
        "It shipped and it stayed up: roughly a thousand people a month keep coming back to it, with no marketing behind it. More usefully for me, it settled an argument I'd been having with myself - the tactile version of the idea only became convincing once it was running in a browser, not while it was a set of frames.",
    },
  },

  {
    slug: "rac-fm",
    title: "RAC.FM",
    tagline: "A radio station as an interface experiment",
    summary:
      "An experimental music experience where the interaction is the product, blending interface design, motion and front-end development. It found an audience of 80k+ and became a genuine stress test of instinctive decisions.",
    tag: "Design + Development",
    context: "rac.fm",
    tint: "#e4e4de",
    year: "2025",
    status: "Shipped",
    role: "Design + Development",
    metric: "80k+ page views",
    // TODO(madison): confirm the real stack.
    technologies: ["Next.js", "TypeScript", "CSS"],
    liveUrl: "https://rac.fm/",
    github: undefined,
    figmaUrl:
      "https://www.figma.com/design/VFDe17IEysr8gDKIsUDEVy/Ironbridge---Madison-Yocum---Portfolio-2026?node-id=7854-80075&t=KevKYAIfeBVdZUNG-1",
    image: {
      src: "/images/rac-tile.png",
      width: 3264,
      height: 2048,
      alt: "RAC.FM: a pink desktop-style interface with stacked windows for discography, artwork and a cult pass",
    },
    caseImage: {
      src: "/images/rac-casestudy.jpg",
      width: 2592,
      height: 1634,
      alt: "RAC.FM: a pink desktop-style interface with stacked windows for discography, artwork and a cult pass",
    },
    ratio: 16 / 10,
    detail: {
      premise:
        "An experimental digital music experience blending interface design, interaction and front-end development.",
      why: "RAC.FM is a brand-led platform for the community around Grammy-winning artist and producer André Anjos, combining exclusive content, new music and the $RAC token. I led product direction and design - setting the strategy, running a pod of junior designers and front-end engineers, and defining the component system the whole build ran on. I then coded the front end too. It launched to ~80,400 page views in week one and coverage in Billboard.",
    },
  },

  {
    slug: "forecast-ai",
    title: "Forecast AI",
    tagline: "AI as a collaborator, not a sidebar",
    summary:
      "A coded prototype exploring how AI could work inside a complex enterprise planning workflow rather than in a chat panel bolted to the side. Real state and real interaction, built to be argued with.",
    tag: "Product Design + Prototyping",
    context: "Enterprise client",
    tint: "#e7e4e2",
    year: "2026",
    status: "Prototype",
    role: "Product Design + Prototyping",
    technologies: ["React", "AI-assisted development"],
    liveUrl: "https://claude.ai/code/artifact/f9e35e53-0701-49cb-8883-4634131588b6",
    github: undefined,
    figmaUrl:
      "https://www.figma.com/design/VFDe17IEysr8gDKIsUDEVy/Ironbridge---Madison-Yocum---Portfolio-2026?node-id=7854-127962&t=KevKYAIfeBVdZUNG-1",
    image: {
      src: "/images/forecast-tile.png",
      width: 3264,
      height: 2048,
      alt: "Forecast AI: a Create Forecasts screen listing AI-generated forecast options beside a prompt box",
    },
    caseImage: {
      src: "/images/forecast-casestudy.jpg",
      width: 2592,
      height: 1634,
      alt: "Forecast AI: a Create Forecasts screen listing AI-generated forecast options beside a prompt box",
    },
    ratio: 16 / 10,
    detail: {
      premise:
        "A coded interaction prototype exploring how AI could become an active collaborator inside a complex enterprise planning workflow.",
      why: "Enterprise planning tools are dense, and most AI features bolt a chat panel onto the side of that density. I wanted to test the opposite: assistance that appears inside the work, at the moment a decision is being made.",
      what: "A working prototype rather than a flow of static screens - real state, real interaction, close enough to the product to put in front of people. Details stay high-level here because the underlying client work is confidential.",
      // TODO(madison): swap in the real outcome - what did stakeholders do
      // with it, what changed as a result?
      impact:
        "Because it ran, the conversation moved on quickly from whether AI belonged in the workflow to exactly where it should appear and how much it should be trusted to do unprompted. Points of disagreement that would have taken several rounds of review surfaced in a single session of people clicking through it.",
    },
  },

  {
    slug: "radius-planning",
    title: "Radius Planning",
    // TODO(madison): placeholder copy - the tagline below needs your words.
    tagline: "A planning tool, designed and built in code",
    // TODO(madison): draft - replace with what this actually does.
    summary:
      "A planning interface I designed and wrote the front-end for, shipped as a working tool rather than a spec. Building it meant the awkward parts - state, empty views, edge cases - got settled as design decisions.",
    tag: "Product Design + Front-end",
    context: "Client work",
    tint: "#e6e4de",
    year: "2026",
    status: "Prototype",
    role: "Product Design + Front-end",
    technologies: ["React", "TypeScript"],
    liveUrl: "https://madisonyocum.github.io/radius-planning/",
    github: undefined, // TODO(madison): likely github.com/madisonyocum/radius-planning
    figmaUrl:
      "https://www.figma.com/design/VFDe17IEysr8gDKIsUDEVy/Ironbridge---Madison-Yocum---Portfolio-2026?node-id=7854-127962&t=KevKYAIfeBVdZUNG-1",
    image: {
      src: "/images/radius-tile.png",
      width: 3264,
      height: 2048,
      alt: "Radius Planning: a campaign map of San Francisco with plotted locations and a radius control panel",
    },
    caseImage: {
      src: "/images/radius-casestudy.jpg",
      width: 2592,
      height: 1634,
      alt: "Radius Planning: a campaign map of San Francisco with plotted locations and a radius control panel",
    },
    ratio: 16 / 10,
    // TODO(madison): draft copy, written from the project name alone - check
    // it against what actually happened before the interview.
    detail: {
      premise:
        "A map interface for planning campaign radii - drawing catchments around real locations and reading the coverage they add up to.",
      why: "Radius planning usually happens in spreadsheets and static exports, so the thing that actually decides a campaign - how far each location reaches, and where those catchments overlap - gets argued about rather than seen. I wanted the map itself to be the planning surface, not a picture of the plan produced afterwards.",
      what: "I designed and built the map interface end to end: campaign segments plotted across a city, each carrying its own radius, with coverage redrawn live as the radius changes. Postcode and hex views read that same coverage at different grains, and day-part controls show how a campaign shifts across the day.",
      // TODO(madison): replace with the real outcome.
      impact:
        "It exists and it runs, which is the point: instead of a deck describing how planning could work, there is a tool people can open and use. Designing in code also collapsed the usual gap between what was specified and what got built - there was no hand-off to lose anything in.",
    },
  },

  {
    slug: "alma",
    title: "Alma Solo Travel",
    tagline: "A travel service, built like a product",
    summary:
      "My own venture: bespoke trip planning for women travelling solo, designed and built end to end - brand, site, tiers and the enquiry flow behind them. The design problem is trust, earned before anyone has spoken to a person.",
    tag: "Design + Front-end",
    context: "almasolotravel.com",
    tint: "#e9e2d9",
    year: "2026",
    status: "Work in progress",
    role: "Founder, Design + Front-end",
    technologies: ["Next.js", "TypeScript", "CSS"],
    liveUrl: "https://www.almasolotravel.com/",
    github: undefined,
    // TODO(madison): add the Figma node if there's a design file for this.
    image: {
      src: "/images/alma-tile.png",
      width: 3264,
      height: 2048,
      alt: "Alma Solo Travel: a Where she went destinations carousel, with photo cards for Andalucia, Lisbon and Puglia",
    },
    caseImage: {
      src: "/images/alma-casestudy.jpg",
      width: 2592,
      height: 1634,
      alt: "Alma Solo Travel: a Where she went destinations carousel, with photo cards for Andalucia, Lisbon and Puglia",
    },
    ratio: 16 / 10,
    detail: {
      premise:
        "A trip-planning service for women travelling solo, founded, designed and built end to end - the brand, the site, and the enquiry flow that starts every trip.",
      why: "It started with friends asking me to plan their trips. Solo travel is sold as liberating, and it is, but the planning is a second job - and the questions that matter most to a woman going alone, like whether a neighbourhood is right or a hotel is actually good to arrive at by yourself, are the ones no booking site answers. I wanted to find out whether the research could be taken off someone entirely without taking the trip away from them, and whether I could do it as a product rather than a spreadsheet and a few emails.",
      what: "Everything: the brand, the writing, the service design and the front-end. Three tiers - Edit, Journey and Concierge - so the amount of help is a choice rather than a package; twenty-eight destination pages; a journal; and a sample itinerary and delivery timeline on the how-it-works page, because a service you cannot see is hard to buy. The decision I care most about is the front door: a five-minute form, no call required to start, since asking a stranger to book a phone slot before they know what they want is where most of these services lose people.",
      impact:
        "Building it settled the parts of the service that a document would have left vague - what each tier actually contains, what the price buys, how long a plan takes and what lands in your inbox at the end. Writing those as real pages forced answers. It is not launched yet: the brand, imagery and legal pages are placeholders while I finish them, and there is no traffic or booking data to point at. What exists is the whole service, standing up and clickable, which is the version worth showing to anyone before it goes live.",
    },
  },

  {
    slug: "prism",
    title: "Prism Platform & Agentic Workflow",
    tagline: "A platform, and the agent workflow inside it",
    summary:
      "A platform and the agentic workflow that runs inside it, built by a team at Elsewhen. I helped define how the workflow behaved and coded the prototypes we tested it with; another lead set up the systems and the production front-end.",
    tag: "Agentic Workflow & Prototyping",
    context: "Elsewhen",
    tint: "#e3e5e6",
    year: "2026",
    status: "Shipped",
    role: "Product Design + Prototyping",
    technologies: ["React", "TypeScript"],
    liveUrl: "https://prism.elsewhen.app/",
    github: undefined,
    figmaUrl:
      "https://www.figma.com/design/VFDe17IEysr8gDKIsUDEVy/Ironbridge---Madison-Yocum---Portfolio-2026?node-id=7854-128337&t=KevKYAIfeBVdZUNG-1",
    image: {
      src: "/images/prism-tile.png",
      width: 3264,
      height: 2048,
      alt: "Prism: a dark prototype library listing named prototypes, with a preview panel open over it",
    },
    caseImage: {
      src: "/images/prism-casestudy.jpg",
      width: 2592,
      height: 1634,
      alt: "Prism: a dark prototype library listing named prototypes, with a preview panel open over it",
    },
    ratio: 16 / 10,
    detail: {
      premise:
        "A platform interface and the agentic workflow that runs inside it, built by a team at Elsewhen.",
      why: "Agentic features are easy to demo and hard to trust. People need to see what the system is doing, understand why, and step in when it gets something wrong - so the design problem was less about the model than about visibility and control.",
      what: "I helped define the agentic workflow - what the agent does unprompted, what it hands back, and where a person steps in - and coded the prototypes we tested those decisions against. Another lead set up the systems and the production front-end. Prototyping in code meant the moments that decide whether people trust it, like progress, interruption and review, were settled against real behaviour rather than static frames.",
      // TODO(madison): replace with the real outcome.
      impact:
        "The workflow shipped as part of the platform rather than staying a concept, and the patterns the prototypes settled - how a running agent reports itself, how a person interrupts it - carry across the rest of the product.",
    },
  },
];

export const getProject = (slug: string) =>
  projects.find((project) => project.slug === slug);

/** Cards always open the case study; the live product is linked from there. */
export const projectHref = (project: Project) => `/work/${project.slug}`;
