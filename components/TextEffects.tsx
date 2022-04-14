import SplitText from "./SplitText";
import {
  AnimatePresence,
  motion,
  useAnimation,
  useElementScroll,
  useViewportScroll,
} from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

type TextEffect = React.FC<{
  children: React.ReactNode;
  copy: string;
  delay?: number;
  duration?: number;
  stagger?: number;
}>;
type ScrollTextEffect = React.FC<{
  children: React.ReactNode;
  copy: string;
  delay?: number;
  duration?: number;
  stagger?: number;
  percentage?: number;
}>;
type ScrollTextEffectE<T> = React.FC<
  {
    children: React.ReactNode;
    copy: string;
    delay?: number;
    duration?: number;
    stagger?: number;
    percentage?: number;
  } & T
>;

const WordByWord: TextEffect = ({
  copy,
  delay = 0,
  stagger = 0.12,
  duration = 1.2,
}) => {
  const wordWrapper = useCallback(
    (s: { index: number; children: any }) => {
      return (
        <span
          style={{
            overflow: "hidden",
            height: "fit-content",
            display: "inline-block",
          }}
        >
          <motion.span
            key={`t${copy}${s.index}`}
            id={`t${copy}${s.index}`}
            initial={{
              display: "inline-block",
              y: "200%",
              rotateZ: 20,
            }}
            animate={{
              y: "0%",
              rotateZ: 0,
              transition: {
                duration,
                delay: s.index * stagger + delay,
              },
            }}
            exit={{
              y: "200%",
              display: "inline-block",

              rotateZ: 20,
              transition: {
                duration: 0.5,
              },
            }}
          >
            {s.children}
          </motion.span>
        </span>
      );
    },
    [copy]
  );
  return (
    <SplitText
      copy={copy}
      role="heading"
      WordWrapper={wordWrapper as any}
    ></SplitText>
  );
};
const WordBlur: TextEffect = ({ copy }) => {
  return (
    <SplitText
      copy={copy}
      role="heading"
      WordWrapper={(s) => {
        return (
          <motion.span
            initial={{
              display: "inline-block",
              filter: "blur(40px)",
            }}
            animate={{
              filter: "blur(0px)",
              transition: {
                duration: 1,
                delay: s.index * 0.1,
              },
            }}
          >
            {/* @ts-ignore */}
            {s.children}
          </motion.span>
        );
      }}
    ></SplitText>
  );
};

const Scroll_WordByWord: ScrollTextEffect = ({
  copy,
  delay = 0,
  stagger = 0.12,
  duration = 1.2,
  percentage = 0,
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const { scrollYProgress } = useViewportScroll();
  const c = useAnimation();
  const [visible, set] = useState(false);
  scrollYProgress.onChange((e) => {
    if (e > percentage) {
      if (visible) return;
      set(true);
    }
  });

  useEffect(() => {
    if (visible) {
      c.start("on");
    }
  }, [visible]);

  return (
    <span ref={ref}>
      <SplitText
        copy={copy}
        role="heading"
        WordWrapper={(s) => {
          return (
            <span
              style={{
                overflow: "hidden",
                height: "fit-content",
                display: "inline-block",
              }}
            >
              <motion.span
                key={`t${copy}${s.index}`}
                id={`t${copy}${s.index}`}
                initial={{
                  display: "inline-block",
                  y: "200%",
                  rotateZ: 20,
                }}
                animate={c}
                variants={{
                  on: {
                    y: "0%",
                    rotateZ: 0,
                    transition: {
                      duration,
                      delay: s.index * stagger + delay,
                    },
                  },
                  off: {
                    y: "200%",
                    rotateZ: 20,
                  },
                }}
                exit={{
                  y: "200%",
                  display: "inline-block",
                  rotateZ: 20,
                  transition: {
                    duration: 0.5,
                  },
                }}
              >
                {/* @ts-ignore */}
                {s.children}
              </motion.span>
            </span>
          );
        }}
      ></SplitText>
    </span>
  );
};

const TextEffects = {
  WordByWord,
  WordBlur,
  scroll: {
    WordByWord: Scroll_WordByWord,
  },
};

export default TextEffects;
