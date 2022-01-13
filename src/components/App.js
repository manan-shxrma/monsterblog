import React, {useState,useEffect} from "react";
import Body from "./body"
import About from "./about"
import Blog from "./blog"
import Navbar from "./navbar"
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./contact";
import Admin from "./admin";
import Eachpost from "./eachpost"
import PacmanLoader from "react-spinners/PacmanLoader";
import "../css/index.css"

function App() {
     const [loading,setLoading]=useState(false);
     useEffect(()=>{
          setLoading(true)
          setTimeout(()=>{
             setLoading(false) 
          },5000)
     },[])
               
  return (
   <>
   {    
        loading?
        <div className="preloader">
        <PacmanLoader color="#fff" loading={loading}  size={30} />
        </div>
        :
   
    <BrowserRouter>
     <Navbar />
         <Routes>
              <Route  exact path="/" element={<Body />} />
              <Route  exact path="/about" element={<About />} />
              <Route  path="/contact" element={<Contact />} />
              <Route  path="/blog" element={<Blog />} />
              <Route  path="/admin" element={<Admin />} />
              <Route  path="/post/:id" element={<Eachpost />} />
         </Routes>
         
    </BrowserRouter>
    
    }
   </>
  );
}

export default App;
