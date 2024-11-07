import { Canvas } from "@react-three/fiber"
import Experience from "./Components/Experience"
import { Interface } from "./Components/Interface"
 
 

function App() {


  return (
    <>
      <Canvas  shadows camera={{ position: [4, 5, -12], fov: 35 }}>
        <Experience/>

      </Canvas>
      <Interface/>
    </>
  )
}

export default App
