import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles.css'
import LandingPage from './components/pages/LandingPage';


ReactDOM.render(
  <Router>
    <LandingPage />
  </Router>,
  document.getElementById('root')
);
