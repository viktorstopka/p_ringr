import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import { Canvas } from "@react-three/fiber";
import Ring from "../components/three/models/Ring";
import { Suspense, useEffect, useRef } from "react";
import Skybox from "../components/three/Skybox";
import { sRGBEncoding, LinearEncoding, TextureEncoding } from "three";
import dynamic from "next/dynamic";
import useSection from "../state/useSection";
import { useAnimationFrame } from "framer-motion";
import Settings from "../utils/Settings";

function MyApp({ Component, pageProps }: AppProps) {
  const { setSection } = useSection();
  useAnimationFrame(() => {
    const scroll = scrollY / (document.body.scrollHeight - window.innerHeight);
    const sections = Settings.Sections;
    const section = Math.min(
      Math.max(Math.floor(scroll * sections), 0),
      sections - 1
    );
    setSection(section);
  });

  return (
    <>
      <Header></Header>
      <div className="three">
        <Canvas
          camera={{
            fov: 25,
          }}
          gl={{
            antialias: true,
            outputEncoding: LinearEncoding,
          }}
        >
          <Suspense fallback={null}>
            <pointLight
              position={[0, 10, 20]}
              intensity={2}
              color={"#e1e1ff"}
            ></pointLight>
            <Ring></Ring>
            <Skybox></Skybox>
          </Suspense>
        </Canvas>
      </div>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
