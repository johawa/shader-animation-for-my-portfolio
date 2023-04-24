import { useRef } from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Selection } from "@react-three/postprocessing";
import Effects from "./Effects";
import Sparks from "./components/Sparks";
import BackgroundPlane from "./components/BackgroundPlane";
import Explosion from "./components/Explosion";
import Light from "./components/Light";
import TitleText from "./components/Text";
import * as THREE from "three";

function degToRad(deg) {
  return deg * (Math.PI / 180);
}

function App() {
  const mouse = useRef([0, 0]);

  return (
    <Canvas
      camera={{
        fov: 75,
        near: 0.1,
        far: 1000,
        position: [25, 28, 35],
        // rotation: [degToRad(-40), degToRad(30), degToRad(20)],
      }}
      onCreated={({ gl }) => {
        gl.setClearColor(new THREE.Color("#020207"));
      }}
    >
      <fog attach="fog" args={["white", 50, 190]} />
      {/* <Explosion /> */}
      <Selection>
        {/* <Light /> */}
        <ambientLight intensity={0.5} />
        {/* <BackgroundPlane /> */}
        <Effects />
        <TitleText />
      </Selection>
      <OrbitControls />
    </Canvas>
  );
}

export default App;
