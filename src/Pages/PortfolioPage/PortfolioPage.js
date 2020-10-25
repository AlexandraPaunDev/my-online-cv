import React from 'react';
import { NavPanel } from '../../components/NavPanel/NavPanel';
import ratedmovies from './portfolio/ratedmovies.png';
import moviedetails from './portfolio/moviedetails.png';
import allmovies from './portfolio/allmovies.png'
import './PortfolioPage.css';

export function PortfolioPage(){
    return(
        <div className="portfolio-page-container">
            <NavPanel />
            <div className="portfolio-page-body-container">
                <div className="portfolio-title">My Projects</div>
                <div className="portfolio-photos-container">
                    <div className="photo-1">
                        <img src={ratedmovies} className="first-p" alt="foto"></img> 
                        <a href="https://github.com/AlexandraPaunDev" target="_blank" rel="noopener noreferrer">
                            <button className="photo-button">Check my Project</button>
                        </a>
                          
                    </div>
                    <div className="photo-2">
                        <img src={moviedetails} className="second-p" alt="foto"></img>
                        <a href="https://github.com/AlexandraPaunDev" target="_blank" rel="noopener noreferrer">
                            <button className="photo-button">Check my Project</button>
                        </a>
                        

                    </div>
                    <div className="photo-3">
                        <img src={allmovies} className="third-p" alt="foto"></img>
                        <a href="https://github.com/AlexandraPaunDev" target="_blank" rel="noopener noreferrer">
                            <button className="photo-button">Check my Project</button>
                        </a>
                        
                        
                    </div>

                </div>
            </div>
        </div>
    )
}