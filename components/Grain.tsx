/**Grain by Renārs Vilnis */

import { useEffect, useRef } from "react";

type GrainProps = {
  patternSize?: number;
  patternScaleX?: number;
  patternScaleY?: number;
  patternRefreshInterval?: number;
  patternAlpha?: number;
};

const Grain: React.FC<GrainProps> = ({
  patternAlpha = 15,
  patternRefreshInterval = 3,
  patternScaleX = 1,
  patternScaleY = 1,
  patternSize = 150,
}) => {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (ref) {
      const canvas = ref.current as HTMLCanvasElement;
      const ctx = canvas.getContext("2d");

      ctx?.scale(patternScaleX, patternScaleY);

      const patternCanvas = document.createElement("canvas");
      patternCanvas.width = patternSize;
      patternCanvas.height = patternSize;
      const patternCtx = patternCanvas.getContext("2d");
      const patternData = patternCtx?.createImageData(patternSize, patternSize);
      const patternPixelDataLength = patternSize * patternSize * 4;

      let frame = 0;
      window.addEventListener("resize", resize);
      resize();

      const update = () => {
        if (patternData && patternPixelDataLength) {
          // put a random shade of gray into every pixel of the pattern
          for (let i = 0; i < patternPixelDataLength; i += 4) {
            // const value = (Math.random() * 255) | 0;
            const value = Math.random() * 255;

            patternData.data[i] = value;
            patternData.data[i + 1] = value;
            patternData.data[i + 2] = value;
            patternData.data[i + 3] = patternAlpha;
          }

          if (patternCtx) {
            patternCtx.putImageData(patternData, 0, 0);
          }
        }
      };

      const draw = () => {
        const { width, height } = canvas;

        if (ctx) {
          ctx.clearRect(0, 0, width, height);

          //@ts-ignore
          ctx.fillStyle = ctx.createPattern(patternCanvas, "repeat");
          ctx.fillRect(0, 0, width, height);
        }
      };

      const loop = () => {
        const shouldDraw = ++frame % patternRefreshInterval === 0;
        if (shouldDraw) {
          update();
          draw();
        }

        window.requestAnimationFrame(loop);
      };

      window.requestAnimationFrame(loop);
    }
  }, [ref]);

  const resize = () => {
    if (ref.current) {
      ref.current.width = window.innerWidth * devicePixelRatio;
      ref.current.height = window.innerHeight * devicePixelRatio;
    }
  };

  return (
    <canvas
      style={{
        zIndex: 10000,
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
      }}
      ref={ref}
    />
  );
};

export default Grain;
