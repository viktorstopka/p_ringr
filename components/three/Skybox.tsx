import { useThree } from "@react-three/fiber";
import { Dispatch, useMemo } from "react";
import { CubeTexture, CubeTextureLoader } from "three";

const Skybox: React.FC<{ outTexture?: Dispatch<CubeTexture> }> = ({
  outTexture,
}) => {
  const { scene } = useThree();
  const loader = new CubeTextureLoader();
  const texture = useMemo(() => {
    const texture = loader.load([
      "/textures/sky/nx.png",
      "/textures/sky/ny.png",
      "/textures/sky/nz.png",
      "/textures/sky/px.png",
      "/textures/sky/py.png",
      "/textures/sky/pz.png",
    ]);
    outTexture && outTexture(texture);
    return texture;
  }, []);
  // The CubeTextureLoader load method takes an array of urls representing all 6 sides of the cube.
  // Set the scene background property to the resulting texture.
  scene.environment = texture;
  scene.background = null;
  return null;
};

export default Skybox;
