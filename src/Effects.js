import {
  ChromaticAberration,
  EffectComposer,
  Noise,
  SelectiveBloom
} from "@react-three/postprocessing";
import React from "react";


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
