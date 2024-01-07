import "./App.css";
/*
 *CONSIDER THE PIXEL DENSITY OF THE DEVICE  . NEED TO FIX FOR DIFFERENT DEVICES
 */

import SpriteWithShaders from "./components/SpriteWithShaders"; //sprite animation with shaders
import ShadersPixels from "./components/ShadersPixels"; //sprite animation with shaders

function App() {
  return (
    <>
      {/* <SpriteWithShaders /> */}
      <ShadersPixels />
    </>
  );
}

export default App;
