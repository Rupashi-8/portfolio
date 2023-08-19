import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TextExample from './components/Card';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Project from './components/Projects';
import Skills from './components/Skills';


const App = () => {

  return (
    <>
    <BrowserRouter> 
    <Routes>
    <Route path = "/" element={<TextExample/>} /> 
    <Route path = "/skills" element={<Skills/>} /> 
    <Route path = "/contact" element={<Contact/>} /> 
    <Route path = "/projects" element={<Project/>} /> 
    <Route path= "/experience" element={<Experience/>}/>  
       </Routes>
       </BrowserRouter>
    
    </>
  )




}

export default App
