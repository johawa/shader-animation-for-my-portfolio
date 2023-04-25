import { extend } from "@react-three/fiber";
import {
  DepthOfField,
  DotScreen,
  EffectComposer,
  Noise,
  SelectiveBloom,
  ChromaticAberration,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import React from "react";

import WaterEffect from "./postprocessing/WaterEffect";

export default function Effects() {
  return (
    <EffectComposer>
      <SelectiveBloom
        mipmapBlur
        radius={0.85}
        luminanceThreshold={0.2}
        intensity={3}
      />
      <ChromaticAberration
        offset={[0.0035, 0.00035]}
        radialModulation={true}
        modulationOffset={0.4}
      />
      <Noise opacity={0.1} />
    </EffectComposer>
  );
}
