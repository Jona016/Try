/*
File Name: Home.jsx
Student Name: Jonalyn Llanes
Student ID: 301345658
Date: January 28, 2023
*/

/********************** IMPORTING LINK COMPONENT FROM REACT-ROUTER-DOM **********************************/

import { Link } from 'react-router-dom';


/********************** IMPORTING EXTERNAL STYLES **********************************/

import '../src/index.css'


/********************** HOME COMPONENT **********************************/

export default function Home() {
    return <>

        {/*HTML STRUCTURE - HOME PAGE CONTENT*/}
        <div className='home'>
            <div>
                
                {/*HTML STRUCTURE - INTRODUCTION*/}
                <h1 className='introduction'>Hello there! I am Jonalyn</h1>

                {/*HTML STRUCTURE - DESCRIPTION (WELCOME AND MISSION STATEMENT)*/}
                <h2 className='home-desc'> 
                    Welcome! Explore the world of development through my projects and experiences<br/>
                    Passionate about crafting digital solutions that make an impact 
                </h2>

                <h2 className='home-desc'> 
                    Empowering businesses and individuals through innovative web solutions<br/>
                    Driven by a commitment to quality, creativity, and continuous learning
                </h2>
                
                {/*HTML STRUCTURE - LINK TO PROJECT PAGE*/}
                <Link to = "/project"><button className="btn-home">See my work</button></Link>
            </div>
        </div>
    </>
}
    