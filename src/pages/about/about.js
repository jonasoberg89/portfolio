import React from 'react';
import './about.css';
import myPicture from '../../static/jonas.jpg'
import { motion } from "framer-motion";
import Frame from "../../utils/frame-motion"

function About() {

    return (
        <motion.div
            className="container-about"
            variants={Frame.variants()}
            initial="hidden"
            animate="visible">
            <div className="about">
                <div className="about-image">
                    <div className="about-image-row">
                        <img className="about-picture-jonas" src={myPicture} alt="Jonas" />
                    </div>
                </div>
                <div className="about-text">
                    <div className="about-text-header">
                        <h3 className="about-text-header-title">About me</h3>
                    </div>
               
                        <p className="about-text-body-info">
                            I am now a certified Front-End Developer after studying at EC-Utbildning Helsingborg,
                            where I gained the knowledge and experience required to create a modern application.
                            This education focused mainly on front-end development,
                            but I have a personal interest in back-end development, and a goal of mine is to become a Full Stack Developer.

                        </p>
                        <p className="about-text-body-info">
                            During my schooling I have been a part of projects, in group as well as on my own. During my internship I have also worked with agile methods, such as SCRUM.
                            Before entering my studies, I have seven years of experience within sales, where I have built up skills such as being patient and in facing customers.
                            I held the responsibility of managing a warehouse and hardware store for three years. A fun fact, and a great experience is that I have also spent three months in Manhattan selling Christmas trees.
                            </p>
                        <p className="about-text-body-info">
                            I aslo freelance on my own agency Webcraft, building sites to smaller companies.
                        </p>
                        <h3 className="about-text-body-info-header">
                            Framework and Platforms                
                        </h3>
                        <p className="about-text-body-info">
                            ReactJS, AgularJS, VueJS, NodeJS, MongoDB, Firebase, Socket.io, Twillo, Sendgrid, Wordpress, Cockpit 
                            and a lot of diffrent libarys.      
                        </p>
                   
                </div>
            </div>
        </motion.div>
    );
}

export default About;