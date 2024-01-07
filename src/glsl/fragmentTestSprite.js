const fsTestSprite = `
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

uniform float u_Data[9] ;

void main(){
    vec2 position=gl_FragCoord.xy/u_resolution.xy;
    vec3 color=vec3(0.0,0.0,0.0);
    vec2 uv=position;
    uv.y=1.0-position.y;

// Resolution of one frame
    vec2 res = u_imgResolution/vec2(float(10.0),float(10.0));

    // Normalize value of the frame resolution
    vec2 normalizedRes = u_imgResolution/res;

    // Scale the coordinates to a single frame
    uv = uv/normalizedRes;

// Calculate the offset in cols and rows
    float timeX = u_time*5.0;
    float timeY = floor(timeX/float(10.0));
    vec2 offset = vec2( floor(timeX)/normalizedRes.x,
                        1.0-(floor(timeY)/normalizedRes.y) );
    uv = fract(uv+offset);


    vec4 texColor = texture2D(u_image, uv);
  
    gl_FragColor=texColor; 
    
}`;
export default fsTestSprite;
