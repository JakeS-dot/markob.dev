// src/react-extensions.ts
import type { HTMLAttributes } from "react";

interface MarqueeProps extends HTMLAttributes<HTMLDivElement> {
  scrollAmount?: string | number;
  scrollDelay?: string | number;
  behavior?: "scroll" | "slide" | "alternate";
  direction?: "left" | "right" | "up" | "down";
  loop?: number | "infinite";
}

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      marquee: MarqueeProps;
    }
  }
}

