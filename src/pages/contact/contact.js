import React from 'react';
import "./contact.css"
import Frame from "../../utils/frame-motion"
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaRegBuilding } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
function Contact() {

    return (
        <motion.div className="container-contact"
            variants={Frame.variants()}
            initial="hidden"
            animate="visible">
            <div className="contact">
                <div className="contact-header">
                    <div className="contact-header-section">
                        <h3 className="contact-header-title">
                            Contact
                    </h3>
                    </div>

                </div>
                <div className="contact-body">
                    <div className="contact-body-section">
                        <div className="contact-body-icons">
                            <FiMail className="contact-icon" />
                            <a className="contact-icon-tag a-tag" target="blank" href="mailto: jonasoberg202@gmail.com">
                                <span>jonasoberg202@gmail.com</span>
                            </a>
                        </div>
                        <div className="contact-body-icons">
                            <FaLinkedin className="contact-icon" />
                            <a className="contact-icon-tag a-tag" target="blank" href="https://www.linkedin.com/in/jonas-%C3%B6berg-57776bb0/">
                                <span>Connect with me on Linkedin</span>
                            </a>
                        </div>
                        <div className="contact-body-icons">
                            <FaGithub className="contact-icon" />
                            <a className="contact-icon-tag a-tag" target="blank" href="https://github.com/jonasoberg89">
                                <span>Check out my Github </span>
                            </a>
                        </div>
                        <div className="contact-body-icons">
                            <FaRegBuilding className="contact-icon" />
                            <a className="contact-icon-tag a-tag" target="blank" href="https://webcrafthelsingborg.se">
                                <span>Webcraft - My own web agency (Under construction)</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default Contact;