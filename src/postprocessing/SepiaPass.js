import { Effect } from "postprocessing";

const fragmentShader = /* glsl */ `      
	void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) 
        {	
		
		vec3 nrm = normalize(vec3(1.0));
   		float delta = dot(normalize(inputColor.rgb), nrm);
   		delta = pow(delta, 10.0);

		vec3 sepia_color = vec3(
				dot(inputColor.rgb, vec3(0.393, 0.769, 0.189)),
				dot(inputColor.rgb, vec3(0.349, 0.686, 0.168)),
				dot(inputColor.rgb, vec3(0.272, 0.534, 0.131))
		);
		 
   		vec3 color = mix(inputColor.rgb, sepia_color, delta);
		
		outputColor =  vec4(color, inputColor.a);
		}    
`;

const vertexShader = /* glsl */ `
varying vec3 vNormal;
varying vec3 vPosition;
void mainSupport() {
  //vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.);
  //gl_Position = projectionMatrix * modelViewPosition;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  //vNormal = (modelMatrix * vec4(normal, 0.0)).xyz;
  //vPosition = (modelMatrix * vec4(position, 1.0)).xyz;
}
`;

export default class SepiaPass extends Effect {
  constructor({ blendFunction }) {
    super("CustomSepiaPass", fragmentShader, {
      blendFunction,
      vertexShader: vertexShader,
    });
  }
}
