import React from 'react';
import './NavPanel.css';

import home from './Panel-img/home.png';
import about from './Panel-img/about.png';
import skills from './Panel-img/skills.png';
import portfolio from './Panel-img/portfolio.png';
import contact from './Panel-img/contact.png';
import {Link} from 'react-router-dom';
// import ReactDOM from 'react-dom';

export function NavPanel (){ 
    return(
       
            <div className="nav-panel">
                <div className="nav-panel-title"></div>
                <div className="nav-panel-content">
                    <Link to="/" className="nav-links">
                        <div className="home-container">
                                <img src={home} alt="home" className="home-icon"></img>
                            <p className="home-text">Home</p>
                        </div>
                    </Link>  
                    <Link to="/about" className="nav-links">
                        <div className="about-container">
                            <img src={about} className="about-icon" alt="about"></img>
                            <p className="about-text">About</p>
                        </div>
                    </Link>
                    <Link to="/skills" className="nav-links">
                        <div className="skills-container">
                            <img src={skills} className="skills-icon" alt="skills"></img>
                            <p className="skills-text">Skills</p>
                     </div>
                    </Link>
                    <Link to="/portfolio" className="nav-links">
                    <div className="portfolio-container">
                        <img src={portfolio} className="portfolio-icon" alt="portfolio"></img>
                        <p className="portfolio-text">Portfolio</p>
                    </div>
                    </Link>
                    <Link to="/contact" className="nav-links">
                    <div className="contact-container">
                        <img src={contact} className="contact-icon" alt="contact"></img>
                        <p className="contact-text">Contact</p>
                    </div>
                    </Link>
                   
                </div>
                <div className="nav-panel-footer">&copy; Copyright 2020 Alexandra Paun</div>
            </div>
        
    );
}