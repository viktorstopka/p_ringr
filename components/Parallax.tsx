import { useTransform, useViewportScroll } from "framer-motion";
import { motion } from "framer-motion";
import Math2 from "../utils/Math2";

const Parallax: React.FC<{
  intensity: number;
  offset?: number;
  children?: any;
}> = ({ offset = 0, intensity, children }) => {
  const { scrollYProgress } = useViewportScroll();
  const y = useTransform(
    scrollYProgress,
    (a) => Math2.Map(a, 0, 1, 0, intensity) + offset
  );

  return (
    <motion.div
      className="parallax"
      style={{ y }}
      initial={{ y: -intensity }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default Parallax;
