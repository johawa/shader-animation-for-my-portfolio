import Explosion from "./components/Explosion";
import TitleText from "./components/Text";
import Effects from "./Effects";
import Light from "./components/Light";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Plane } from "@react-three/drei";

function degToRad(deg) {
  return deg * (Math.PI / 180);
}

function App() {
  return (
    <Canvas
      camera={{
        fov: 75,
        near: 0.1,
        far: 1000,
        position: [25, 28, 35],
        // rotation: [degToRad(-40), degToRad(30), degToRad(20)],
      }}
    >
      {/* <Effects /> */}
      <ambientLight intensity={0.1} />
      <Light />

      <Plane args={[50, 50]} rotation={[degToRad(-90), 0, 0]}></Plane>
      <Explosion />
      <TitleText />
      <OrbitControls />
    </Canvas>
  );
}

export default App;
