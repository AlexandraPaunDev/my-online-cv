import React from 'react';
import './HomePage.css';
import myPhoto from './img/myPhoto.png';
import facebook from './img/facebook.png';
import instagram from './img/instagram.png';
import github from './img/github.png';
import linkedin from './img/linkedin.png';
import home from './img/home.png';
import about from './img/about.png';
import skills from './img/skills.png';
import portfolio from './img/portfolio.png';
import contact from './img/contact.png';
import {Link} from 'react-router-dom';
// import ReactDOM from 'react-dom';



export function HomePage(){
    return ( 
        <div className="home-page-container">
            <div className="nav-pannel">
                <div className="nav-pannel-title"></div>
                <div className="nav-pannel-content">
                    <Link to="/">
                        <div className="home-container">
                            
                                <img src={home} alt="home" className="home-icon"></img>
                            
                            <p className="home-text">Home</p>
                        </div>
                    </Link>  
                    <Link to="/about">
                        <div className="about-container">
                            <img src={about} className="about-icon" alt="about"></img>
                            <p className="about-text">About</p>
                        </div>
                    </Link>
                    <div className="skills-container">
                        <img src={skills} className="skills-icon" alt="skills"></img>
                        <p className="skills-text">Skills</p>
                    </div>
                    <div className="portfolio-container">
                        <img src={portfolio} className="portfolio-icon" alt="portfolio"></img>
                        <p className="portfolio-text">Portfolio</p>
                    </div>
                    <div className="contact-container">
                        <img src={contact} className="contact-icon" alt="contact"></img>
                        <p className="contact-text">Contact</p>
                    </div>
                   
                </div>
                <div className="nav-pannel-footer">&copy; 2020 Alexandra Paun</div>
            </div>
            <div className="home-page-body-container">
                <div className="my-photo-container">
                    <img src={myPhoto} alt="me" className="my-photo"></img>
                </div>
                <div className="home-page-text-container">
                    <div className="home-page-title">Hello, my name is </div>
                    <div className="home-page-my-name">Alexandra Paun </div>
                    <div className="home-page-description">I'm a Web Developer</div>
                </div>
                
                
                <div className="social-media-container">
                    <a href="https://www.facebook.com/liss.alehandra" target="_blank" rel="noopener noreferrer">           
                        <img src={facebook} alt="facebook" className="facebook-logo"></img>
                    </a>
                    <a href="https://www.instagram.com/alexandraa.paun" target="_blank" rel="noopener noreferrer">
                        <img src={instagram} alt="instagram" className="instagram-logo"></img>
                    </a>
                    <a href="https://www.github.com/AlexandraPaunDev" target="_blank" rel="noopener noreferrer">
                        <img src={github} alt="github" className="github-logo"></img>
                    </a>
                    <a href="https://linkedin.com/in/alexandra-paun-91964882" target="_blank" rel="noopener noreferrer">
                        <img src={linkedin} alt="linkedin" className="linkedin-logo"></img> 
                    </a>    
                </div>
            </div>
        </div>
   
   );
}