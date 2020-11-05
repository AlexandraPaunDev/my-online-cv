import React from 'react';
import './HomePage.css';
import {NavPanel} from '../../components/NavPanel/NavPanel';
import MyPhoto from './img/MyPhoto.jpeg'
import facebook from './img/facebook.png';
import instagram from './img/instagram.png';
import github from './img/github.png';
import linkedin from './img/linkedin.png';  

export function HomePage(){
    return ( 
        <div className="home-page-container">
            <NavPanel />
            <div className="home-page-body-container">
                <div className="my-photo-container">
                    <img src={MyPhoto} className="my-photo" alt="me" ></img>
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