import React from 'react';
import { Link } from "react-router-dom"
import "./navbar.css"
import { FaUserAlt, FaBriefcase, FaHome, FaClipboard} from "react-icons/fa";
import {FiMail,FiMenu } from "react-icons/fi";
function Navbar({ menubar, toggle }) {

    return (
        <>
            {!menubar && <div className="nav-button">
                <FiMenu className="nav-button-text" onClick={() => { toggle() }} />
            </div>}
            {menubar &&
                <nav className="navbar">
                    <div className="navbar-container">
                        <Link onClick={() => { toggle() }} to={"/"}> <FaHome className="nav-icon" /><span className ="navbar-text-icon">Home</span></Link>
                        <Link onClick={() => { toggle() }} to="/about"><FaUserAlt className="nav-icon" /><span className ="navbar-text-icon">About</span></Link>
                        <Link onClick={() => { toggle() }} to="/experience"><FaClipboard className="nav-icon" /><span className ="navbar-text-icon">Experience</span></Link>
                        <Link onClick={() => { toggle() }} to="/portfolio"><FaBriefcase className="nav-icon" /><span className ="navbar-text-icon">Portfolio</span></Link>
                        <Link onClick={() => { toggle() }} to="/contact"><FiMail className="nav-icon" /><span className ="navbar-text-icon">Contact</span></Link>
                    </div>
                </nav>
            }

        </>
    );
}

export default Navbar;