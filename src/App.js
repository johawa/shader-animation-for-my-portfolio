import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Selection } from "@react-three/postprocessing";
import { useControls } from "leva";
import { useRef } from "react";
import * as THREE from "three";
import Beams from "./Beams";
import Effects from "./Effects";
import Particles from "./Particles";
import Explosion from "./components/Explosion";
import Light from "./components/Light";
import TitleText from "./components/Text";

function Models() {
  const ref = useRef();
  const factor = useRef(5);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = THREE.MathUtils.lerp(
        ref.current.rotation.x,
        state.mouse.y / factor.current,
        0.1
      );
      ref.current.rotation.y = THREE.MathUtils.lerp(
        ref.current.rotation.y,
        -state.mouse.x / factor.current,
        0.1
      );
    }
  });

  return (
    <group ref={ref}>
      <TitleText />
    </group>
  );
}

function App() {
  const mouse = useRef([0, 0]);

  const config = useControls({
    ambientLightIntensity: { value: 1.5, min: 0, max: 15.0 },
  });

  return (
    <Canvas
      linear
      dpr={[1, 2]}
      camera={{
        fov: 100,
        position: [0, 0, 30],
      }}
      onCreated={({ gl }) => {
        gl.setClearColor(new THREE.Color("#020207"));
      }}
    >
      <fog attach="fog" args={["white", 50, 190]} />
      <ambientLight intensity={config.ambientLightIntensity} />
      <Light />
      <Beams />
      <Explosion scale={2.0} />
      <Particles count={250} mouse={mouse} />
      
      <Selection>
        <Models />
        <Effects />
      </Selection>

      <OrbitControls />
    </Canvas>
  );
}

export default App;
