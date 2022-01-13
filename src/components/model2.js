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
    'assets/Chip001_1K_Color-min.jpg',
    'assets/Chip001_1K_Displacement-min.jpg',
    'assets/Chip001_1K_NormalGL-min.jpg',
    'assets/Chip001_1K_Roughness-min.jpg',
    'assets/Chip001_1K_Metalness-min.jpg',
  ])
  return (
    <>
      <ambientLight intensity={0.10} />
      <directionalLight intensity={2.6}/>
      <pointLight intensity={0.5} position={[5,10, 15]} />
      <mesh ref={myMesh}>
        <sphereGeometry args={[2.8, 100, 100]} />
        <meshStandardMaterial   displacementScale={0.2}
                                map={colorMap}
                                displacementMap={displacementMap}
                                normalMap={normalMap}
                                roughnessMap={roughnessMap}
                                aoMap={MetalMap}  
                                />
      </mesh>
    </>
  )
}


export default function Model2() {
  
  return (<><div className="digearthdiv" style={{ position: "relative",  marginLeft:"40%" ,paddingTop:"5%"}}>
    <Canvas className="digearth1" style={{width: 300, height: 300,position:"absolute",zIndex:-20}}>
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
    </div>
   
 </>
  )
}