const fsTestPixel02 = `
#ifdef GL_ES
precision mediump float;
#endif

varying vec2 vTexCoord;
varying vec3 vPosition;

uniform vec2 u_resolution;
uniform float u_time;
uniform vec2 u_mouse;
uniform sampler2D u_image;

uniform vec2 u_imgResolution;
uniform float u_speed;




void main(){
    vec2 position=gl_FragCoord.xy/u_resolution.xy;
    vec3 color=vec3(0.0,0.0,0.0);
    vec2 uv=position;
    uv.y=1.0-position.y;

     // Calculate a time-dependent offset for continuous movement
    float offset = sin(u_time * u_speed);

    // // Generate a random offset based on the fragment's UV coordinates and a seed
    vec2 randomOffset = vec2(
        fract(sin(dot(uv, vec2(12.9898, 78.233)) * u_speed) * 43758.5453),
        fract(cos(dot(uv, vec2(93.726, 43.3651)) * u_speed) * 65432.1234)
    );


    // Apply the random offset to the texture coordinates
    vec2 shifteduv = uv + randomOffset;

    // Sample the texture at the shifted texture coordinates
    vec4 pixelColor = texture2D(u_image, shifteduv);

    
    gl_FragColor=pixelColor; 
    
}`;
export default fsTestPixel02;
