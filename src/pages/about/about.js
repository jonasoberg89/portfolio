import React, { useState, useEffect } from 'react';
import TextLoop from 'react-text-loop';
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

                    <div className="about-info">
                        {/* <p className="about-info-text">
                            Qualified Front End Developer with a solid amount of internship hours on my back, and experience through different
                            projects within both front and back end development (some on my Github account).
                            I am driven by creating user friendly applocations with modern frameworks, i.e. Java Script or Rect.js.
                            I am constantly keen (eager, willing) to learn more and develop the skills I already have.
                            As an individual I am cool-headed, humorous and driven in what I do.
                        </p> */}
                    </div>
                </div>
                <div className="about-text">
                    <div className="about-text-header">
                        <h3 className="about-text-header-title">About me</h3>
                    </div>
                    <div className="about-text-body">
                        <p className="about-text-body-info">
                            As a person I see myself as kind, patient and hardworking, and have a good sense of humor.
                            I currently live in an apartment in Tågarborg, Helsingborg with my girlfriend.
                            In my spare time I spend time with family and friends, play computer games and coding.
                            I also play the guitar. When there’s time given,
                            I spend my time at our cabin in Småland, fishing and enjoying nature.
                        </p>
                        <p className="about-text-body-info">
                            I graduated in May 2020 and am now a certified Front-End Developer after studying at EC-Utbildning Helsingborg,
                            where I gained the knowledge and experience required to create a modern application.
                            This education focused mainly on front-end development,
                            but I have a personal interest in back-end development, and a goal of mine is to qualify as a Full Stack Developer.
                            During my schooling I have been a part of projects, in group as well as solo. During my internship I have also worked with agile methods, such as SCRUM.
                            Before entering my studies, I have seven years’ experience within sales, where I have built up skills such as being patient and in facing customers.
                            Over two years I held the responsibility of managing a warehouse and hardware store. A fun fact, and a great experience is that I have also spent three months in Manhattan selling Christmas trees.
                            </p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default About;