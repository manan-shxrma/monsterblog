import React, {useState,useEffect} from "react";
import ParticleBack from "./particleback";
import Typewriter from 'typewriter-effect';
import Model2 from "./model2"
import Button from "./stylebutton"
import RingLoader from "react-spinners/RingLoader";
import "../css/index.css"

function Body(){
  const [loading,setLoading]=useState(true);
            useEffect(()=>{
       setLoading(true)
       setTimeout(()=>{
          setLoading(false) 
       },400000)
  },[])
       return(<>
         <h1 className="typewriter" style={{textAlign: "center","marginTop": "5rem"}}>
              <Typewriter
                options={{
                  strings: ['नमस्ते, इस खूबसूरत ब्रह्मांड में आपका स्वागत है','Hello, Welcome to this beautiful universe' ,'This universe is full of questions','यह ब्रह्मांड सवालों से भरा है','आइए, जानते हैं कुछ सवालों के जवाब' ,'Let us ponder over a few of them'],
                  autoStart: true,
                  loop: true,
                  delay:30
                }}
              /></h1>
           <ParticleBack></ParticleBack>
           { loading?
                <div className="preloaderhome">
                <RingLoader color="#fff" loading={loading}  size={100} />
                 </div>
                :
                  <Model2 />}
           <Button />
       </>
       )}

export default Body