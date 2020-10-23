import React from 'react';
import { NavPanel } from '../../components/NavPanel/NavPanel';
import './AboutPage.css';
// import ReactDOM from 'react-dom';


export function AboutPage(){
    return(
            <div className="about-page-container">
                <NavPanel />
                <div className="about-page-body-container">
                    <p>About Page</p>
                </div>
            </div>
        
    );
}