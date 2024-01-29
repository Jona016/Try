/*
File Name: main.jsx
Student Name: Jonalyn Llanes
Student ID: 301345658
Date: January 28, 2023
*/


/********************** IMPORTING REACT AND REACTDOM FROM 'REACT-DOM/CLIENT **********************************/
import React from 'react'
import ReactDOM from 'react-dom/client'

/********************** IMPORTING APP COMPONENT **********************************/
import App from './App.jsx'

/********************** IMPORTING EXTERNAL STYLES **********************************/
import './index.css'


/********************** RENDERING THE APP COMPONENT TO THE ROOT ELEMENT **********************************/
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
