import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import { themeContext } from '../../Context'
import { useContext } from 'react'

import "./Contact.css";
const Contact = () => {
    const theme = useContext(themeContext);
          const darkMode = theme.state.darkMode;

    const form = useRef();
    const [done , setDone] = useState(false)
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm('service_l3qri34', 'template_qx46wjq', form.current, {
                publicKey: 'q-dYnbS8PVczNUcEK',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    setDone(true);

                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <div className="contact-form" id="contact">
            {/* left side copy and paste from work section */}  
            <div className="w-left">
                <div className="awesome">
                    {/* darkMode */}
                    <span style={{ color: darkMode ? 'white' : '' }}>Get in Touch</span>
                    <span>Contact me</span>
                    <div
                        className="blur s-blur1"
                        style={{ background: "#ABF1FF94" }}
                    ></div>
                </div>
            </div>
            {/* right side form */}
            <div className="c-right">
                <form  ref={form} onSubmit={sendEmail}>
                    <input type="text" name="user_name" className="user" placeholder="Name" />
                    <input type="email" name="user_email" className="user" placeholder="Email" />
                    <textarea name="message" className="user" placeholder="Message" />
                    <input type="submit" value="Send" className="button" />
                    <span>{done && "Thanks for Contacting me!"}</span>
                    <div
                        className="blur c-blur1"
                        style={{ background: "var(--purple)" }}
                    ></div>
                </form>
            </div>
        </div>
    );
};

export default Contact;