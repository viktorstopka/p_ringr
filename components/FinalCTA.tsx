import useSection from "../state/useSection";
import { motion } from "framer-motion";
import Settings from "../utils/Settings";

const FinalCTA: React.FC = () => {
  const { section } = useSection();
  return (
    <motion.a
      initial={{
        x: "-50%",
        y: "100%",
        scale: 0,
      }}
      whileHover={{
        x: "-50%",
        scale: 1.1,
      }}
      variants={{
        off: {
          scale: 0,
          y: "100%",
        },
        appear: {
          scale: 1,
          y: 0,
        },
      }}
      animate={
        section >
        Settings.ShowcaseSectionCount + Settings.ShowcaseSectionOffset - 1
          ? "appear"
          : "off"
      }
      className="cta"
    >
      $479
    </motion.a>
  );
};

export default FinalCTA;
