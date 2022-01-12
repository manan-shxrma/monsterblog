import React from "react";
import Body from "./components/body"
import About from "./components/about"
import Blog from "./components/blog"
import Navbar from "./components/navbar"
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./components/contact";
import Admin from "./components/admin";
import Eachpost from "./components/eachpost"


function App() {
  return (
   <>
    <BrowserRouter>
     <Navbar />
         <Routes>
              <Route  exact path="/" element={<Body />} />
              <Route exact path="/about" element={<About />} />
              <Route  path="/contact" element={<Contact />} />
              <Route  path="/blog" element={<Blog />} />
              <Route  path="/admin" element={<Admin />} />
              <Route  path="/post/:id" element={<Eachpost />} />
         </Routes>
         
    </BrowserRouter>
    
    
   </>
  );
}

export default App;
