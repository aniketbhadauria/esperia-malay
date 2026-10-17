export type LogoGradient = {
  from: string;
  to: string;
};

export type Logo = {
  src: string;
  alt: string;
  gradient: LogoGradient;
};

export const logos: Logo[] = [
  {
    alt: "Procure",
    src: "https://svgl.app/library/procure.svg",
    gradient: { from: "#2563EB", to: "#60A5FA" },
  },
  {
    alt: "Shopify",
    src: "https://svgl.app/library/shopify.svg",
    gradient: { from: "#FDE047", to: "#F59E0B" },
  },
  {
    alt: "Blender",
    src: "https://svgl.app/library/blender.svg",
    gradient: { from: "#1D4ED8", to: "#38BDF8" },
  },
  {
    alt: "Figma",
    src: "https://svgl.app/library/figma.svg",
    gradient: { from: "#A259FF", to: "#7C3AED" },
  },
  {
    alt: "Spotify",
    src: "https://svgl.app/library/spotify.svg",
    gradient: { from: "#FB7185", to: "#E11D48" },
  },
  {
    alt: "Lottielab",
    src: "https://svgl.app/library/lottielab.svg",
    gradient: { from: "#FACC15", to: "#22C55E" },
  },
  {
    alt: "Google Cloud",
    src: "https://svgl.app/library/google-cloud.svg",
    gradient: { from: "#BAE6FD", to: "#38BDF8" },
  },
  {
    alt: "Bing",
    src: "https://svgl.app/library/bing.svg",
    gradient: { from: "#22D3EE", to: "#14B8A6" },
  },
];
