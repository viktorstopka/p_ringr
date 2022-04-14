import { useEffect, useState } from "react";

export type Dimensions = {
  x: number | undefined;
  y: number | undefined;
};

export enum Breakpoint {
  Mobile,
  Tablet,
  PC,
}

export default function useBreakpoint() {
  const [breakpoint, setBreakpoint] = useState<number | undefined>(undefined);

  useEffect(() => {
    const mouseMoveHandler = () => {
      if (window.innerWidth < 768) {
        setBreakpoint(Breakpoint.Mobile);
      } else if (window.innerWidth < 1024) {
        setBreakpoint(Breakpoint.Tablet);
      } else {
        setBreakpoint(Breakpoint.PC);
      }
    };
    mouseMoveHandler();
    window.addEventListener("resize", mouseMoveHandler);

    return () => {
      window.removeEventListener("resize", mouseMoveHandler);
    };
  }, []);

  return breakpoint;
}
