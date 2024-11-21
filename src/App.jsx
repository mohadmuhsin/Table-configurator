import { Canvas } from "@react-three/fiber"
import Experience from "./Components/Experience"
import { Interface } from "./Components/Interface"
 
 

function App() {


  return (
    <>
      <Canvas  shadows camera={{ position: [4, 4, 12], fov: 35 }}>
        <Experience/>
        <fogExp2 attach="fog" color="#2b3a54"  density={0.01}  />
        <ambientLight  color={"white"} intensity={5} />

      </Canvas>
      <Interface/>
    </>
  )
}

export default App
