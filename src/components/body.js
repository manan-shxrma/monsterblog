import React from "react";
import ParticleBack from "./particleback";
import Typewriter from 'typewriter-effect';
import Model2 from "./model2"
import Button from "./stylebutton"



function body(){
   
       return(<>
         <h1 style={{"textAlign": "center","marginTop": "5rem"}}>
              <Typewriter
                options={{
                  strings: ['नमस्ते, इस खूबसूरत ब्रह्मांड में आपका स्वागत है','Hello, Welcome to this beautiful universe' ,'This universe is full of questions','यह ब्रह्मांड सवालों से भरा है','आइए, जानते हैं कुछ सवालों के जवाब' ,'Let us ponder over a few of them'],
                  autoStart: true,
                  loop: true,
                  delay:30
                }}
              /></h1>
           <ParticleBack></ParticleBack>
           <Model2 />
           <Button />
       </>
       )}

export default body