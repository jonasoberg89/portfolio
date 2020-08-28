import React, { useState, useEffect } from 'react';
import TextLoop from "react-text-loop";
import "./experience.css"
import Me from "../../utils/work"
import { FiBriefcase, FaSchool } from "react-icons/fi";
import {MdSchool } from "react-icons/md";
function Experience() {


    let myExperience = Me.experience.map(exp => {
        return (
            <div class="exp-rows">
                <span className="exp-date"> {exp.date}</span>
                <span className="exp-title"> {exp.title}</span>
                <span className="exp-employer"> {exp.employer}</span>
                <p className="exp-info">{exp.info}</p>
            </div>
        )
    })

    let myOtherExperience = Me.otherexperience.map(exp => {
        return (
            <div class="exp-rows">
                <div className="exp-other-rows">
                    <span className="exp-date">{exp.date}</span>
                    <span className="exp-title exp-title-other title-other-experience">{exp.title}</span>
                    <span className="exp-employer">, {exp.employer} </span>
                </div>
            </div>
        )
    })

    let myEduction = Me.education.map(exp => {
        return (
            <div class="exp-rows">
                <div className="exp-other-rows">
                    <span className="exp-date">{exp.date}</span>
                    <span className="exp-title exp-title-other">{exp.title}</span>
                    <span className="exp-employer">, {exp.employer} </span>
                </div>


            </div>
        )
    })
    return (
        <div className="experience-container">
            <div className="experience-row">
                <div class="experience-section">
                    <div className="experience-header">
                        <FiBriefcase className="experience-icon" /> <span className="experience-header-text">EXPERIENCE</span>
                    </div>
                    {myExperience}
                    <div className="experience-header">
                        <span className="experience-header-smaltext">OTHER EXPERIENCE</span>
                    </div>
                    {myOtherExperience}
                    <div className="experience-header">
                        <MdSchool className="experience-icon" /> <span className="experience-header-text">EDUCATION</span>
                    </div>
                    {myEduction}
                </div>

            </div>
        </div>
    );
}

export default Experience;