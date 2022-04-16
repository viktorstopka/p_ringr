import { useProgress } from "@react-three/drei";
import Icons from "./Icons";
import { motion } from "framer-motion";

const Loader: React.FC = () => {
  const { active, errors, item, loaded, progress, total } = useProgress();
  return (
    <motion.div
      variants={{
        on: {
          opacity: 1,
        },
        off: {
          opacity: 0,
        },
      }}
      initial="on"
      animate={active ? "on" : "off"}
      className="loader"
      suppressHydrationWarning
    >
      <motion.div
        suppressHydrationWarning
        initial={{
          width: "2rem",
          height: "2rem",
        }}
        animate={{
          rotateZ: 360,
          repeatCount: -1,
        }}
      >
        <Icons.Logo className="loader__icon"></Icons.Logo>
      </motion.div>
      <p suppressHydrationWarning className="loader__text">
        {progress.toFixed(0)}%
      </p>
    </motion.div>
  );
};

export default Loader;
