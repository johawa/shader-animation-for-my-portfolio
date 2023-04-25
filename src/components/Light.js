import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useHelper } from "@react-three/drei";
import { Vector3 } from "three";
import { PointLightHelper } from "three";

export default function Light({ vec = new Vector3() }) {
  const light = useRef();
  const viewport = useThree((state) => state.viewport);
  useFrame((state) => {
    light.current.position.lerp(
      vec.set(
        (state.mouse.x * viewport.width) / 2,
        (state.mouse.y * viewport.height) / 2,
        0
      ),
      0.1
    );
    light.current.updateMatrixWorld();
  });

  // useHelper(light, PointLightHelper, 1, "cyan");

  return (
    <pointLight
      castShadow
      position={[1.6, 7, 6]}
      intensity={10}
      color={"white"}
      distance={50}
      decay={0.6}
      ref={light}
    />
  );
}
