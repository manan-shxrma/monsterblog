import React from "react"
import Particles from "react-tsparticles";
import ParticleConfig from "../config/particle-config"

function particle(){
    return(<Particles params={ParticleConfig}></Particles>)
}

export default particle