import React from "react"
import  { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import Grid from '@mui/material/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone,faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import 'animate.css';
import '../css/index.css'

function Box1(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef()
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.x += 0.03))
  useFrame((state, delta) => (ref.current.rotation.y += 0.01))
  useFrame((state, delta) => (ref.current.rotation.z += 0.01))
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}



function About(){
   return( <> <section style={{paddingTop:"2rem"}}>
      <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Box1 position={[-1.2, 0, 0]} />
      <Box1 position={[1.2, 0, 0]} />
    </Canvas>

{/* lower grid */}

<section style={{"marginLeft":"10%","marginRight":"10%"}}>
    <Grid container spacing={0}>
      <Grid className="left-block" item xs={4}>
                      <img className="animate__animated animate__bounceInRight" alt={"manan"} style={{"width":"80%",border:"solid","-webkit-border-radius":"90%"}} src={"assets/manpic.jpg"}></img>
                      <br /><br /><div  style={{marginLeft:"24%"}}>
                      <FontAwesomeIcon className="fontawe" icon={faPhone} /> 
                      <FontAwesomeIcon className="fontawe" icon={faInstagram} /> 
                      <FontAwesomeIcon className="fontawe" icon={faGithub} />
                      <FontAwesomeIcon className="fontawe" icon={faLinkedin} />
                      <FontAwesomeIcon className="fontawe" icon={faEnvelope} />
                      </div>
       </Grid> 
       <Grid item xs={8}> 
                      <h6 style={{color:"aliceBlue"}}>Heyy there! I am a sophomore at National Institute of Technology, Hamirpur.
                      Currently I'm pursuing my B Tech in Electrical engineering. <br /><br /> I have keen interest in web development and currently
                      I 'm exploring machine learning to deep dive into technology and create applications that help mankind in a larger 
                      perspective.
                      <br /><br />
                      If you are curious about this web app, then it has majorly been built on React. Apart from this, three.js, React-Bootstrap
                      and particle.js have also been used to build this application.
                      This application does not do much other than displaying content, which does look bland :) 
                      So, I have decided to dive into the world of Ai/Ml to create more sophisticated web apps, which can be robust enough to cope up 
                      with demands of 21st century.
                      
                      <br /><br />
                      Apart from this, I even write blogs at quora, some of which I will be deloying here. The blogs cover Indian and world 
                      geopolity and diplomacy. I have keen interest in such matters and never miss out a chance to put forth my views on these.
                      I also play football, basketball and badminton but I love playing football the most. I love Tiki-Taka style of playing 
                      and admire Lionel Messi, Andreas Iniesta and Xavi Hernandes for making me fall in love with this beautiful game.
                      I play at the position of defensive midfielder. My favourite club is FC Barcelona. 
                      <br /><br />
                      That's it for now but if you have any queries or want to reach out to me, feel free to contact me.</h6>
       </Grid>
     </Grid>   
</section>
</section>
    </>)
}
export default About