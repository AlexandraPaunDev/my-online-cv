import React from 'react';
import './App.css';
import { HomePage } from './Pages/HomePage/HomePage';
import {AboutPage} from './Pages/AboutPage/AboutPage';


import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link, BrowserRouter
} from 'react-router-dom';
import { SkillsPage } from './Pages/SkillsPage/SkillsPage';
import { PortfolioPage } from './Pages/PortfolioPage/PortfolioPage';
import { ContactPage } from './Pages/ContactPage/ContactPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/skills">
            <SkillsPage />
          </Route>
          <Route path="/portfolio">
            <PortfolioPage />
          </Route>
          <Route path="/contact">
            <ContactPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
