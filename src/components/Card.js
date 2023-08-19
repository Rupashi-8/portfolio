import React from 'react';
import Button from 'react-bootstrap/Button';
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "./Contact.css";
import Resumepdf from './Neweesume (1).pdf';

import CollapsibleExample from './Header.js';

const TextExample = ()=> {
    return (
        <>
        <CollapsibleExample />
    <div className="container my-5">
    <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center ">
      <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
        <h1 className="display-4 fw-bold lh-4 ">Hi! I'm Rupashi Goel</h1>
        <p className="lead">
A passionate frontend software developer with a proven track record of crafting visually appealing and user-centric web interfaces. Proficient in HTML, CSS, and JavaScript, and adept at leveraging modern frontend frameworks like React to create seamless digital experiences. Additionally, equipped with solid knowledge of backend technologies including PostgreSQL and PHP, enhancing my ability to design holistic web solutions. Eager to contribute my technical expertise and cross-disciplinary skills to a collaborative team focused on building innovative and high-quality web applications.

</p>
        
        <div className='icons  gap-2 d-md-flex justify-content-md-start mb-5 mb-lg-4'>
          <a href="https://github.com/Rupashi-8" target='_blank' id="github" rel='noreferrer'><FaGithub/></a>
          <a href="https://www.linkedin.com/in/rupashi-goel-35bb11203/" target='_blank' id="linkedin" rel='noreferrer'><FaLinkedin/></a>
          <a href="https://www.facebook.com/profile.php?id=100008290822958" target='_blank' id="fb" rel='noreferrer'><FaFacebook/></a>
        </div>
        <div className=" buttons gap-4 d-md-flex justify-content-md-start mb-4 mb-lg-3">
        <Link to="/contact"><Button variant="info" size="lg" >Contact Me</Button></Link>
        <a href= {Resumepdf}
        download="resume-rupashi"
        target='_blank'
        rel='noreferrer'>
        <Button variant="info" size="lg">Resume</Button>
        </a>
        </div>
      </div>
      <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden ">
          <img className="rounded" src={`../images/rupashi.jpeg`} alt="" height={400} width={300} />
      </div>
    </div>
  </div>

      </>
    );
  }
  
  export default TextExample;