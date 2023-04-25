import { Effect } from "postprocessing";
import { Uniform } from "three";

const fragmentShader = /* glsl */ `  
  uniform float time;

	void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {			
       float factor = 1.5; 
       vec2 uv1 = uv;
       float frequency = 6.0;
       float amplitude = 0.015 * factor;
       float x = uv1.y * frequency + time * .7; 
       float y = uv1.x * frequency + time * .3;
       uv1.x += cos(x+y) * amplitude * cos(y);
       uv1.y += sin(x-y) * amplitude * cos(y);
       vec4 rgba = texture2D(inputBuffer, uv1);
       outputColor = vec4(rgba);
}    
`;

const vertexShader = /* glsl */ `
  void mainSupport() {
       gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

export default class WaterPass extends Effect {
  constructor({ blendFunction }) {
    super("WaterPass", fragmentShader, {
      blendFunction,
      uniforms: new Map([["time", new Uniform(0)]]),
      vertexShader: vertexShader,
    });
  }

  update(renderer, inputBuffer, deltaTime) {
    this.uniforms.get("time").value += deltaTime;
  }
}
