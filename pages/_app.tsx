import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import { Canvas } from "@react-three/fiber";
import Ring from "../components/three/models/Ring";
import { Suspense } from "react";
import Skybox from "../components/three/Skybox";
import {
  Bloom,
  EffectComposer,
  HueSaturation,
} from "@react-three/postprocessing";
import LayoutPosition from "../components/three/LayoutPosition";
import { sRGBEncoding, LinearEncoding, TextureEncoding } from "three";
import { Loader } from "@react-three/drei";
import dynamic from "next/dynamic";

function MyApp({ Component, pageProps }: AppProps) {
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
            {/* <ambientLight intensity={1} color="#ff0303"></ambientLight> */}
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
