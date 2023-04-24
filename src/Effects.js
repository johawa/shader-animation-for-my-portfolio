import { extend } from "@react-three/fiber";
import {
  DepthOfField,
  DotScreen,
  EffectComposer,
  Noise,
  SelectiveBloom,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import React from "react";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";
import { WaterPass } from "./postprocessing/Waterpass";
import  CustomSepia  from "./postprocessing/CustomSepia";

extend({ WaterPass });

export default function Effects() {
  return (
    <EffectComposer>
      <SelectiveBloom
        mipmapBlur
        radius={0.85}
        luminanceThreshold={0.2}
        intensity={3}
      />

      <DepthOfField
        focusDistance={0}
        focalLength={0.02}
        bokehScale={2}
        height={480}
      />
      {/* <DotScreen blendFunction={BlendFunction.SUBTRACT} scale={0.8} /> */}
      <Noise opacity={0.02} />
      <CustomSepia blendFunction={BlendFunction.NORMAL} />
      {/* <waterPass attachArray="passes" factor={1.5} /> */}
    </EffectComposer>
  );
}
