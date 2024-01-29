/*
File Name: App.jsx
Student Name: Jonalyn Llanes
Student ID: 301345658
Date: January 28, 2023
*/

/********************** IMPORTING REACT AND BROWSERROUTER FROM REACT-ROUTER-DOM **********************************/
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

/********************** IMPORTING MAINROUTER COMPONENT **********************************/
import MainRouter from '../MainRouter';

const App = () => {
    return (
        <Router>
            <MainRouter />
        </Router>
      );
};

/********************** EXPORTING THE APP COMPONENT **********************************/
export default App;

