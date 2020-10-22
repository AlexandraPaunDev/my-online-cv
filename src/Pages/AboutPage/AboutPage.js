import React from 'react';
import './AboutPage.css';
// import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';

export function AboutPage(){
    return(
        <Link to="/about">
            <div className="about-page-container">
                <p>About Page</p>
            </div>
        </Link>
    );
}