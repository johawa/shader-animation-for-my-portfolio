import { useRef } from "react";
import { OrbitControls, PresentationControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Selection } from "@react-three/postprocessing";
import Effects from "./Effects";
import Sparks from "./components/Sparks";
import Particles from "./Particles";
import BackgroundPlane from "./components/BackgroundPlane";
import Explosion from "./components/Explosion";
import Light from "./components/Light";
import Beams from "./Beams";
import TitleText from "./components/Text";
import * as THREE from "three";

function degToRad(deg) {
  return deg * (Math.PI / 180);
}

function Models() {
  const ref = useRef();
  const factor = useRef(5);

  // useFrame((state) => {
  //   if (ref.current) {
  //     ref.current.rotation.x = THREE.MathUtils.lerp(
  //       ref.current.rotation.x,
  //       state.mouse.y / factor.current,
  //       0.01
  //     );
  //     ref.current.rotation.y = THREE.MathUtils.lerp(
  //       ref.current.rotation.y,
  //       -state.mouse.x / factor.current,
  //       0.01
  //     );
  //   }
  // });

  return (
    <group ref={ref}>
      <TitleText />
      <Explosion scale={2.0} />
    </group>
  );
}

function App() {
  const mouse = useRef([0, 0]);

  return (
    <Canvas
      linear
      dpr={[1, 2]}
      camera={{
        fov: 100,
        position: [0, 0, 30],
        // rotation: [degToRad(-40), degToRad(30), degToRad(20)],
      }}
      onCreated={({ gl }) => {
        gl.setClearColor(new THREE.Color("#393940"));
      }}
    >
      <fog attach="fog" args={["white", 50, 190]} />
      <ambientLight intensity={5.0} />
      <Light />
      <Beams />

      <Particles count={500} mouse={mouse} />
      <Selection>
        <Models />
        <Effects />
      </Selection>

      <OrbitControls />
    </Canvas>
  );
}

export default App;
