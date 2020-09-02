import React from 'react';
import "./experience.css"
import Me from "../../utils/work"
import { FiBriefcase } from "react-icons/fi";
import { MdSchool } from "react-icons/md";
function Experience() {


    let myExperience = Me.experience.map((exp, index) => {
        return (
            <div key={index} className="exp-rows">
                <span className="exp-date"> {exp.date}</span>
                <p className="exp-title"> {exp.title}</p>
                <span className="exp-employer"> {exp.employer}</span>
                <p className="exp-info">{exp.info}</p>
            </div>
        )
    })

    let myOtherExperience = Me.otherexperience.map((exp, index) => {
        return (
            <div key={index} className="exp-rows-bottom">
                <div className="exp-other-rows">
                    <span className="exp-date">{exp.date}</span>

                    <span className="exp-employer"> {exp.employer} </span>
                </div>
            </div>
        ) 
    })

    let myEduction = Me.education.map((exp, index) => {
        return (
            <div key={index} className="exp-rows-bottom">
                <div className="exp-other-rows-education">
                    <span className="exp-date">{exp.date}</span>

                    <span className="exp-employer-education">{exp.title} {exp.employer}</span>
                </div>


            </div>
        )
    })
    return (
        <div className="experience-container">
            <div className="experience-row">
                <div className="experience-section">
                    <div className="experience-header">
                        <FiBriefcase className="experience-icon" /> <span className="experience-header-text">WORK EXPERIENCE</span>
                    </div>
                    {myExperience}
                    <div className="experience-bottom-row">
                        <div className="experience-bottom-box">
                            <div className="experience-header">
                                <span className="experience-header-smaltext">OTHER WORK EXPERIENCE</span>
                            </div>
                            {myOtherExperience}
                        </div>
                        <div className="experience-bottom-box">
                            <div className="experience-header">
                                <MdSchool className="experience-icon" /> <span className="experience-header-text">EDUCATION</span>
                            </div>
                            {myEduction}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;