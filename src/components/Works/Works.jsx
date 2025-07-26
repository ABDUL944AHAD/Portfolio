import React from 'react'
import './Works.css'

import { themeContext } from '../../Context'
import { useContext } from 'react'
import { motion } from 'framer-motion'

const Works = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="works">
            <div className="awesome">
                <span style={{ color: darkMode ? 'white' : '' }}>Works for All these </span>
                <span>Brands & Clients</span>
                <span>
                    Lorem ispum is simply dummy text of printing of Lorem
                    <br />
                    ispum is simply dummy text of printing
                    <br />
                    ispum is simply dummy text of printing text of printing
                    <br />
                    ispum is simply dummy text of printing
                </span>
                <button className="button s-button">Hire me</button>
                <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
            </div>
            {/* right side   */}
            <div className="w-right">
                <motion.div
                    initial={{ rotate: 45 }}
                    whileInView={{ rotate: 0 }}
                    viewport={{ margin: "-40px" }}
                    transition={{ duration: 3.5, type: "spring" }}
                    className="w-mainCircle">
                    <div className="w-secCircle">
                        <img src="/img/upwork.png" alt="Upwork" />
                    </div>
                    <div className="w-secCircle">
                        <img src="/img/fiverr.png" alt="Fiverr" />
                    </div>
                    <div className="w-secCircle">
                        <img src="/img/amazon.png" alt="Amazon" />
                    </div>
                    <div className="w-secCircle">
                        <img src="/img/shopify.png" alt="Shopify" />
                    </div>
                    <div className="w-secCircle">
                        <img src="/img/facebook.png" alt="Facebook" />
                    </div>
                </motion.div>
                {/* background Circles  */}
                <div className="w-backCircle blueCircle"></div>
                <div className="w-backCircle yellowCircle"></div>
            </div>
        </div>
    )
}

export default Works