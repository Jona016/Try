/*
File Name: MainRouter.jsx
Student Name: Jonalyn Llanes
Student ID: 301345658
Date: January 28, 2023
*/


/********************** IMPORTING REACT AND NECESSARY COMPONENTS FROM REACT-ROUTER-DOM **********************************/

import React from 'react'
import { Route, Routes } from 'react-router-dom'


/********************** IMPORTING CUSTOM COMPONENTS **********************************/

import Home from './components/Home'
import About from './src/about'
import Contact from './src/contact'
import Education from './src/education'
import Project from './src/project'
import Layout from './components/layout'
import Services from './src/services'


/********************** MAIN ROUTER COMPONENT **********************************/

const MainRouter = () => {
    return (
    
    <div>
        {/*HTML STRUCTURE - LAYOUT (NAVBAR AND FOOTER*/}
        <Layout/>

        {/*REACT ROUTER ROUTES*/}
        <Routes>

            {/*ROUTE FOR HOME*/}
            <Route exact path="/" element={<Home />} />
            
            {/*ROUTE FOR ABOUT*/}
            <Route exact path="/about" element={<About />} />
            
            {/*ROUTE FOR EDUCATION*/}
            <Route exact path="/education" element={<Education />} />
            
            {/*ROUTE FOR PROJECT*/}
            <Route exact path="/project" element={<Project />} />
            
            {/*ROUTE FOR SERVICES*/}
            <Route exact path="/services" element={<Services/>}/>

            {/*ROUTE FOR CONTACT*/}
            <Route exact path="/contact" element={<Contact />} />
    
        </Routes>
    </div>
    )
}

/********************** EXPORTING THE MAINROUTER COMPONENT **********************************/

export default MainRouter



