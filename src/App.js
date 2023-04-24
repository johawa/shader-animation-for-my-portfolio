import { Canvas } from "@react-three/fiber";
import Explosion from "./components/Explosion";
import { OrbitControls } from "@react-three/drei";

function App() {
  return (
    <Canvas>
      <ambientLight intensity={0.1} />
      <directionalLight color="red" position={[0, 0, 5]} />
      <Explosion />
      <OrbitControls />
    </Canvas>
  );
}

export default App;
