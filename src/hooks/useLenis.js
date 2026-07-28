import { useEffect } from "react";
import Lenis from "lenis";

// Initializes a single, site-wide Lenis smooth-scroll instance. `autoRaf` hands the
// requestAnimationFrame loop to Lenis itself, which is what keeps scroll-linked Framer
// Motion effects (whileInView, etc.) feeling smooth rather than fighting native scroll.
export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      lerp: 0.1,
      wheelMultiplier: 1,
      anchors: true,
    });

    return () => {
      lenis.destroy();
    };
  }, []);
}
