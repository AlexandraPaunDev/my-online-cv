import React from 'react';
// import { ProgressBar } from './ProgressBar/ProgressBar';
// import { ProgressBar } from 'react-toastify/dist/components';
// import { ProgressBar } from 'react-toastify/dist/components';
import { NavPanel } from '../../components/NavPanel/NavPanel';
import html from './img/html.png';
import css from './img/css.png';
import javascript from './img/javascript.png';
import react from './img/react.png';
import study from './img/study.png'

import './SkillsPage.css';

export function SkillsPage(){
    return(
        <div className="skills-page-container">
            <NavPanel />
            <div className="skills-page-body-container">
                <div className="study-container">
                    <h2 className="study-container-title">What I studied</h2>
                    <img src={study} className="study-icon" alt="study"></img>
                    <div className="study-content">
                        <p className="p1"><b>HTML and CSS:</b> how to build a responsive UI</p>
                        <p className="p2"><b>JavaScript:</b> how to use variables, primitive types, functions, <b>DOM & AJAX</b></p>
                        <p className="p3"><b>OOP in JavaScript:</b> prototypes, classes and inheritance in JavaScript</p>
                        <p className="p4"><b>GIT:</b> learned the principles and basic commands</p>
                        <p className="p5"><b>React JS:</b> how modern JS applications work, React components, props, state, <b>JSX</b></p>
                        <p className="p6"><b>ISTQB Foundation Level:</b>Fundamentals of Testing </p>
                    </div>
                    
                    
                </div>
                <div className="my-skills-container">
                    <div className="title-container">
                        <h2 className="my-skills-title">My Skills</h2>
                    </div>
                    <div className = "icon-skills">
                        <a href="https://www.w3schools.com/html/" target="_blank" rel="noopener noreferrer">
                            <img src={html} className="html-icon" alt="html"></img>
                        </a>
                        <a href="https://www.freecodecamp.org/news/tag/css/" target="_blank" rel="noopener noreferrer">
                            <img src={css} className="css-icon" alt="css"></img>    
                        </a>
                        <a href="https://eloquentjavascript.net/" target="_blank" rel="noopener noreferrer">
                            <img src={javascript} className="javascript-icon" alt="javascript"></img>
                        </a>
                           
                        <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
                            <img src={react} className="react-icon" alt="react"></img>
                        </a>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}