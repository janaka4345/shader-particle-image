const vsTest = `
#ifdef GL_ES

precision mediump float;

#endif



attribute vec3 aPosition;

// I'm excluding our normal vertex position data operations from this example code.
// get our texture coordinates from WEBGL/p5
attribute vec2 aTexCoord;

// create a varying vec2 which will store our texture coordinates
varying vec2 vTexCoord;

void main() {
  // copy the texcoords
  vTexCoord = aTexCoord;
  // vec4 positionVec4 = vec4(aPosition, 1.0);
  vec4 positionVec4 = vec4(aPosition, 1.0);

  // scale the rect by two, and move it to the center of the screen
  positionVec4.xy = positionVec4.xy * 2.0 - 1.0;

  gl_Position = positionVec4;

}
`;

export default vsTest;
