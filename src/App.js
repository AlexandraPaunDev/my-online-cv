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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
