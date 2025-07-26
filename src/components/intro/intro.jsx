import React from 'react'
import './intro.css'
import Github from '../../../public/img/github.png'
import LinkedIn from '../../../public/img/linkedin.png'
import Instagram from '../../../public/img/instagram.png'
import Vector1 from '../../../public/img/Vector1.png'
import Vector2 from '../../../public/img/Vector2.png'
import boy from '../../../public/img/boy.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import thumbup from '../../../public/img/thumbup.png'
import crown from '../../../public/img/crown.png'
import glassesimoji from '../../../public/img/glassesimoji.png'
import { themeContext } from '../../Context'
import { useContext } from 'react'
import { motion } from 'framer-motion'


const Intro = () => {
    const transition ={duration : 2 , type : 'spring'} 

    const theme = useContext(themeContext);
      const darkMode = theme.state.darkMode;
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span style={{color: darkMode ? 'white': ''}}>Hy! I Am</span>
                <span> Abdul Ahad </span>
                <span>Frontend Developer with high level of experience in web designing and development, producting the quality work</span>
            </div>
            <button className=" button i-button">Hire me</button>
            <div className="i-icons">
                <img src={Github} alt="Github" />
                <img src={LinkedIn} alt="LinkedIn" />
                <img src={Instagram} alt="Instagram" />
            </div>

        </div>
        <div className="i-right">
           <img src={Vector1} alt="" />
           <img src={Vector2} alt="" />
           <img src={boy} alt="" />
           <motion.img
           initial={{left:'-36%'}}
           whileInView={{left:"-24%"}}
           transition={transition}
            src={glassesimoji} alt="" />
              <motion.div
              initial= {{top: '-4%',left:'74%'}}
              whileInView={{left:'68%'}}
              transition={transition}
               style={{top:"-4%", left:"68%"}}>
                  <FloatingDiv image={crown} txt1='Web' txt2='Developer' />
              </motion.div>
              <motion.div
              initial={{left:'9rem',top:'18rem'}}
              whileInView={{left:'0rem'}}
              transition={transition}
               style={{top:"18rem", left:"0rem"}}>
                  <FloatingDiv image={thumbup} txt1='Best Design' txt2='Award' />
              </motion.div>

              {/* blur divs */}
              <div className='blur' style={{background: "rgb(238 210 255)"}}></div>
              <div className="blur" style={{background:'#C1F5FF', top:"17rem",width:"21rem" , height:"11rem", left:"-9rem"
              }}></div>
        </div>
        
    </div>
  )
}

export default Intro
