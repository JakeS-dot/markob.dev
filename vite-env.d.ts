import type { HTMLAttributes } from "react";

declare namespace JSX {
  interface IntrinsicElements {
    marquee: React.DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
  }
}

