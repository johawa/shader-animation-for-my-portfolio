import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { Vector3 } from "three";

export default function Light({ vec = new Vector3() }) {
  const light = useRef();
  const viewport = useThree((state) => state.viewport);
  useFrame((state) => {
    light.current.position.lerp(
      vec.set(
        (state.mouse.x * viewport.width) / 2,
        (state.mouse.y * viewport.height) / 2,
        -10
      ),
      0.1
    );
    light.current.updateMatrixWorld();
  });

  return (
    <pointLight
      castShadow
      position={[0, 0, 0]}
      intensity={3}
      color={"white"}
      distance={50}
      decay={0.2}
      ref={light}
    />
  );
}
