import './Home.css'
import { Helmet } from 'react-helmet';

import AnimatedText from '../../components/Anim'
import StacksConstant from '../../components/StacksConstant'
import Skills from '../../components/Skills'

import { FaWhatsapp } from "react-icons/fa"; 
import { AiFillGithub } from "react-icons/ai"; 
import { MdEmail } from "react-icons/md"; 
import { AiFillLinkedin } from "react-icons/ai"; 

const index = () => {
  return (
    <div id='Home'>
      
      <Helmet>
        <meta name="description" content="Página sobre Arthur Sant, um desenvolvedor Full Stack com foco em design, usabilidade e performance." />
        <meta name="keywords" content="Arthur Sant, desenvolvedor, Full Stack, React, JavaScript, Python, R, Java, programação, tecnologia" />
        <meta name="author" content="Arthur Sant" />
      </Helmet>

      <div id="Home-container">
        <div className="profile-section">
          <div className='profile'>

            <AnimatedText />

              <div class="social shadow">
                  <a href="https://www.linkedin.com/in/devarthursant" target="_blank" alt="Linkedin">
                    <AiFillLinkedin className='icon'/>
                  </a>
                  <a href="https://github.com/ArthurSantDev" target="_blank" alt="GitHub">
                    <AiFillGithub className='icon'/>
                  </a>
                  <a href="https://wa.me/5524988638508" target="_blank" alt="WhatsApp">
                    <FaWhatsapp className='icon'/>
                  </a>
                  <a href="mailto:DevArthurSant@gmail.com" target="_blank" alt="E-mail">
                    <MdEmail className='icon'/>
                  </a>
              </div>

            <StacksConstant />

          </div>
        </div>

        <Skills />

      </div>
    </div>
  )
}

export default index