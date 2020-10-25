import React from 'react';
import { NavPanel } from '../../components/NavPanel/NavPanel';
import './AboutPage.css';
// import ReactDOM from 'react-dom';
import aboutMe from './aboutMe.png'
import { ContactForm } from '../../components/ContactForm/ContactForm';


export function AboutPage(){
    return(
            <div className="about-page-container">
                <NavPanel />
                <div className="about-page-body-container">
                    <div className="about-title-container">
                        <h1 className="about-title">ABOUT <i>me</i></h1>
                    </div>
                    <div className="about-content-container">
                        <div className="about-foto-container">
                            <img src={aboutMe} className="about-me-foto" alt="about-me" ></img>
                        </div>
                        <div className="about-text-container">
                            <div className="about-first-description">
                                <div className="about-title-text">My name is Alexandra!</div>
                                <div className="about-description">Last year I discovered web programming. To be honest I always been passionate about technology but now I am really captivated by coding and building websites. I enjoy working individually, but also in teams. This is mainly beacause I can learn more from my colleagues. I am driven, enthusiastic and eager to further develop my skills in the IT industry. Highly focused an detailed oriented, I am now looking for opportunities in Front-End Development.
                                </div>
                            </div>
                            <div className="about-second-description">
                                <div className="about-outside-title"><i>me</i> outside the WORK</div>
                                <div className="about-outside-text">I am an outgoing person  who loves socialising and spending time with friends. I enjoy being active and I spend a lot of time outside. I believe is great to connect with nature, enjoy the landscape and get away from the city every now and then.    
                            </div>
                            </div>
                            
                            <div className="about-button-container" >
                                <form method="get" action="./Cv - PAUN ALEXANDRA.pdf" target="_blank">
                                    <button className="about-button">
                                        Download Resume
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
    );
}