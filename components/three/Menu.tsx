import Style from "../../styles/Style";
import { motion, useAnimationFrame } from "framer-motion";
import Math2 from "../../utils/Math2";
import { useState } from "react";
import useSection from "../../state/useSection";
import Settings from "../../utils/Settings";
import useBreakpoint, { Breakpoint } from "../../hooks/useBreakpoint";
const Menu: React.FC = () => {
  const b = useBreakpoint();
  return !!b && b > Breakpoint.Mobile ? <Menu_PC></Menu_PC> : <></>;
};

const Menu_PC: React.FC = () => {
  const { section: active } = useSection();

  return (
    <div className="menu">
      <MenuLink
        section={1}
        active={active}
        copy="Touch Screen"
        key={"touchscreen"}
      ></MenuLink>
      <MenuLink
        section={2}
        copy="Haptics"
        active={active}
        key={"haptics"}
      ></MenuLink>
      <MenuLink
        section={3}
        active={active}
        copy="Gestures"
        key={"gestures"}
      ></MenuLink>
      <MenuLink active={active} section={4} copy="NFC" key={"nfc"}></MenuLink>
    </div>
  );
};

type MenuLinkProps = {
  section: number;
  copy: string;
  active: number;
};

const MenuLink: React.FC<MenuLinkProps> = ({ copy, section, active }) => {
  const transition = {
    delay: 0.1 * (section - Settings.ShowcaseSectionOffset),
    duration: 0.5,
  };

  return (
    <motion.div
      className="menu__link"
      initial="off"
      variants={{
        off: {
          scale: 0,
          transition: {
            duration: 0.5,
            delay: 0.1 * (section - Settings.ShowcaseSectionOffset),
          },
        },
        default: {
          backgroundColor: Style.Middle,
          color: Style.Foreground,
          transition: {
            ...transition,
            delay: 0,
          },
          scale: 1,
        },
        active: {
          backgroundColor: Style.Foreground,
          color: Style.Background,
          transition,
          scale: 1,
        },
      }}
      whileHover={{
        scale: 1.1,
        transition: {
          delay: 0,
        },
      }}
      animate={
        active > Settings.ShowcaseSectionOffset - 1 &&
        active < Settings.ShowcaseSectionCount + Settings.ShowcaseSectionOffset
          ? section === active
            ? "active"
            : "default"
          : "off"
      }
    >
      {copy}
    </motion.div>
  );
};

export default Menu;
