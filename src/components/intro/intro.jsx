import React from 'react'
import './intro.css'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import { themeContext } from '../../Context'
import { useContext } from 'react'
import { motion } from 'framer-motion'

const Intro = () => {
    const transition = { duration: 2, type: 'spring' }
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span style={{ color: darkMode ? 'white' : '' }}>Hy! I Am</span>
                    <span> Abdul Ahad </span>
                    <span>Frontend Developer with high level of experience in web designing and development, producting the quality work</span>
                </div>
                <button className="button i-button">Hire me</button>
                <div className="i-icons">
                    <img src="/img/github.png" alt="Github" />
                    <img src="/img/linkedin.png" alt="LinkedIn" />
                    <img src="/img/instagram.png" alt="Instagram" />
                </div>
            </div>
            <div className="i-right">
                <img src="/img/Vector1.png" alt="" />
                <img src="/img/Vector2.png" alt="" />
                <img src="/img/boy.png" alt="" />
                <motion.img
                    initial={{ left: '-36%' }}
                    whileInView={{ left: "-24%" }}
                    transition={transition}
                    src="/img/glassesimoji.png" alt="" />
                <motion.div
                    initial={{ top: '-4%', left: '74%' }}
                    whileInView={{ left: '68%' }}
                    transition={transition}
                    style={{ top: "-4%", left: "68%" }}>
                    <FloatingDiv image="/img/crown.png" txt1='Web' txt2='Developer' />
                </motion.div>
                <motion.div
                    initial={{ left: '9rem', top: '18rem' }}
                    whileInView={{ left: '0rem' }}
                    transition={transition}
                    style={{ top: "18rem", left: "0rem" }}>
                    <FloatingDiv image="/img/thumbup.png" txt1='Best Design' txt2='Award' />
                </motion.div>
                {/* blur divs */}
                <div className='blur' style={{ background: "rgb(238 210 255)" }}></div>
                <div className="blur" style={{
                    background: '#C1F5FF', top: "17rem", width: "21rem", height: "11rem", left: "-9rem"
                }}></div>
            </div>
        </div>
    )
}

export default Intro