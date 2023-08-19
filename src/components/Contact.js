import React from "react";
import { BiLogoGmail } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa6";
import { PiPhoneBold } from "react-icons/pi";
import "./Contact.css";

import CollapsibleExample from './Header.js';

const Contact =()=>{

    return(
        <>
        <CollapsibleExample/>
        <div className="Contact">
        <div className="contactme">
       <p><PiPhoneBold/> : 9871494432</p> 
       </div>
       <div className="contactme">
       <p><FaLinkedin/><a href="https://www.linkedin.com/in/rupashi-goel-35bb11203/" target="_blank" rel='noreferrer'> : Visit Profile</a></p> 
       </div>
       <div className="contactme">
       <p><BiLogoGmail/> : rupashigoel8.gmail.com</p> 
       </div>
       </div>
        
            
        </>
    )
}
export default Contact;