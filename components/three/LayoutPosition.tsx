import { useFrame } from "@react-three/fiber";
import { useSpring } from "framer-motion";
import { useRef } from "react";
import { Group, Vector3 } from "three";
import * as THREE from "three";

type LayoutPositionProps = {
  verticalPercentage?: number;
  children: React.ReactNode;
  sections: number;
  stopLimit?: [number, number];
  stopPercentage?: number;
  stop?: boolean;
  z?: number;
};

const LayoutPosition: React.FC<LayoutPositionProps> = ({
  children,
  verticalPercentage = 0,
  sections = 2,
  stopLimit = [0, 0],
  stopPercentage = 0.5,
  stop = false,
  z = 0,
}) => {
  const ref = useRef<Group>(null);
  const y = useSpring(-100, { stiffness: 100, damping: 30 });
  useFrame(({ viewport }) => {
    if (!ref.current) return null;

    const _100vh = viewport.height;

    const scrollPercentage = window.scrollY / (innerHeight * sections);

    if (!(scrollPercentage > stopLimit[0] && scrollPercentage < stopLimit[1])) {
      y.set(
        _100vh * sections * -verticalPercentage +
          scrollPercentage * _100vh * sections
      );
    } else {
      if (stop) {
        y.set(_100vh * -stopPercentage);
      } else {
        y.set(
          _100vh * sections * -verticalPercentage +
            scrollPercentage * _100vh * sections
        );
      }
    }

    ref.current.position.set(
      0,

      y.get(),
      0
    );
  });

  return (
    <group ref={ref} position={[0, -100, 0]}>
      {children}
    </group>
  );
};

export default LayoutPosition;
