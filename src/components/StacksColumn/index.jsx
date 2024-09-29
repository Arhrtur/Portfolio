import './index.css'

import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";

import { FaJava } from "react-icons/fa"; 
import { FaRProject } from "react-icons/fa";
import { SiScrollreveal } from "react-icons/si"; 
import { FaGithubAlt } from "react-icons/fa";
import { SiPowerbi } from "react-icons/si"; 
import { SiMicrosoftsqlserver } from "react-icons/si"; 
import { SiMysql } from "react-icons/si"; 
import { SiMongodb } from "react-icons/si"; 
import { SiPostgresql } from "react-icons/si"; 
import { SiPhp } from "react-icons/si"; 
import { SiDjango } from "react-icons/si"; 
import { SiPython } from "react-icons/si"; 
import { SiNodemon } from "react-icons/si"; 
import { SiExpress } from "react-icons/si"; 
import { FaNodeJs } from "react-icons/fa"; 
import { FaBootstrap } from "react-icons/fa"; 
import { SiRedux } from "react-icons/si"; 
import { FaSass } from "react-icons/fa"; 
import { SiReactrouter } from "react-icons/si"; 
import { SiMui } from "react-icons/si"; 
import { SiTailwindcss } from "react-icons/si"; 
import { SiStyledcomponents } from "react-icons/si"; 
import { FaVuejs } from "react-icons/fa"; 
import { SiNextdotjs } from "react-icons/si";
import { SiReact } from "react-icons/si";  
import { SiVite } from "react-icons/si"; 
import { SiTypescript } from "react-icons/si"; 
import { SiJavascript } from "react-icons/si"; 

const index = () => {
   
   useEffect(() => {
      ScrollReveal().reveal('.stack-box', {
        origin: 'bottom',
        distance: '100px',
        duration: 1000,
        reset: false,
        interval: 180 
      });
    }, []);

    return (
      <div className="center column">
        <div className="stacks-sections">
          <h2 className="frontend">
            Front End <i>Skills</i>
          </h2>
          <div className='stacks-section'>
            <div className='stack-box'>
              <h1> JavaScript </h1>
              <SiJavascript />
            </div>
            <div className='stack-box'>
              <h1> TypeScript </h1>
              <SiTypescript />
            </div>
            <div className='stack-box'>
              <h1> Vite.Js </h1>
              <SiVite />
            </div>
            <div className='stack-box'>
              <h1> React </h1>
              <SiReact />
            </div>
            <div className='stack-box'>
              <h1> Router-Dom </h1>
              <SiReactrouter />
            </div>
            <div className='stack-box'>
              <h1> Next.Js </h1>
              <SiNextdotjs />
            </div>
            <div className='stack-box'>
              <h1> Vue.Js </h1>
              <FaVuejs />
            </div>
            <div className='stack-box'>
              <h1> Scroll Reveal </h1>
              <SiScrollreveal />
            </div>
            <div className='stack-box'>
              <h1> Tailwind </h1>
              <SiTailwindcss />
            </div>
            <div className='stack-box'>
              <h1> Mui </h1>
              <SiMui />
            </div>
            <div className='stack-box'>
              <h1> Sass </h1>
              <FaSass />
            </div>
            <div className='stack-box small-stack'>
              <h1> Styled-Comp. </h1>
              <SiStyledcomponents />
            </div>
            <div className='stack-box'>
              <h1> Redux </h1>
              <SiRedux />
            </div>
            <div className='stack-box'>
              <h1> Bootstrap </h1>
              <FaBootstrap />
            </div>
          </div>
        </div>
  
        <div className="stacks-sections">
          <h2 className="backend">
            Back End <i>Skills</i>
          </h2>
          <div className='stacks-section'>
            <div className='stack-box'>
              <h1> Python </h1>
              <SiPython />
            </div>
            <div className='stack-box'>
              <h1> Django </h1>
              <SiDjango />
            </div>
            <div className='stack-box'>
              <h1> R </h1>
              <FaRProject />
            </div>
            <div className='stack-box'>
              <h1> Java </h1>
              <FaJava />
            </div>
            <div className='stack-box'>
              <h1> Node.js </h1>
              <FaNodeJs />
            </div>
            <div className='stack-box'>
              <h1> Nodemon </h1>
              <SiNodemon />
            </div>
            <div className='stack-box'>
              <h1> Express </h1>
              <SiExpress />
            </div>

            <div className='stack-box'>
              <h1> PHP </h1>
              <SiPhp />
            </div>
            <div className='stack-box'>
              <h1> PostgreSQL </h1>
              <SiPostgresql />
            </div>
            <div className='stack-box'>
              <h1> MongoDB </h1>
              <SiMongodb />
            </div>
            <div className='stack-box small-stack'>
              <h1> MySQL </h1>
              <SiMysql />
            </div>
            <div className='stack-box'>
              <h1> SQL Server </h1>
              <SiMicrosoftsqlserver />
            </div>
            <div className='stack-box'>
              <h1> PowerBi </h1>
              <SiPowerbi />
            </div>
            <div className='stack-box'>
              <h1> Git </h1>
              <FaGithubAlt />
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default index;