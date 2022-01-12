import React, { Suspense } from "react";
import { Canvas, useLoader, useFrame} from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'


function Scene(props) {
    const myMesh = React.useRef();
    useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    myMesh.current.rotation.x = a/4;
    myMesh.current.rotation.y = a/4;
    myMesh.current.rotation.z = a/2;
  });

  
    const [colorMap, displacementMap, normalMap, roughnessMap, MetalMap] = useLoader(TextureLoader, [
        'assets/Chip005_1K_Color.jpg',
        'assets/Chip005_1K_Displacement.jpg',
        'assets/Chip005_1K_NormalGL.jpg',
        'assets/Chip005_1K_Roughness.jpg',
        'assets/Chip005_1K_Metalness.jpg',
      ])
  return (
    <>
      <ambientLight intensity={0.17} />
      <directionalLight />
      <mesh ref={myMesh}>
        <sphereGeometry args={[2.8, 100, 100]} />
        <meshStandardMaterial   displacementScale={0.2}
                                map={colorMap}
                                displacementMap={displacementMap}
                                normalMap={normalMap}
                                roughnessMap={roughnessMap}
                                aoMap={MetalMap}/>
      </mesh>
    </>
  )
}


export default function Model() {
  
  return (<><div className="digearthdiv" style={{ position: "relative", marginLeft:"40%" }}>
    <Canvas className="digearth" style={{width: 300, height: 300,position:"absolute",zIndex:-20}}>
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
    </div>
   
 </>
  )
}