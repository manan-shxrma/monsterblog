import React from "react"
import {  useParams } from "react-router-dom";
import postcontent from "./postcontent"
import "../css/blog.css"

let meaning="";

function Eachpost(){
    let params = useParams();
    console.log(postcontent[0])
    console.log(params)
    console.log(postcontent[0].name)
    let arraylen= postcontent.length;
    for(let i = 0 ; i < arraylen; i++) {
       if(postcontent[i].name===params.id)
       { meaning=postcontent[i].meaning}
    
    else{
        console.log("mismatch")
    }
}
    
    return(<>
    <div className="blogpagemob" style={{padding:"5% 10% 0% 10%"}}>
     <h5>{meaning}
      <br /></h5>
    </div>
    </>)

}

export default Eachpost