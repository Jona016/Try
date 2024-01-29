/*
File Name: layout.jsx
Student Name: Jonalyn Llanes
Student ID: 301345658
Date: January 28, 2023
*/


/********************** IMPORTING REACT AND LINK COMPONENT FROM REACT-ROUTER-DOM **********************************/
import React from 'react';
import { Link } from 'react-router-dom';

/********************** IMPORTING LOGO IMAGE **********************************/
import Logo from '../src/assets/Logo.png';

/********************** LAYOUT COMPONENT **********************************/
export default function Layout() {
    return (
        <>
            {/* HTML STRUCTURE - NAVIGATION BAR */}
            <nav>
                <div className='container'>
                    
                    {/* HTML STRUCTURE - LOGO */}
                    <Link to ="/"><img src = {Logo} alt = "Company Logo" className = "logo" width = "60px" height= "60px"/>  </Link>


                {/* HTML STRUCTURE - NAVIGATION ELEMENTS */}
                <div className='nav-elements'>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>

                        <li>
                            <Link to="/about">About</Link>
                        </li>

                        <li>
                            <Link to="/education">Education</Link>
                        </li>

                        <li>
                            <Link to="/project">Project</Link>
                        </li>

                        <li>
                            <Link to="/services">Services</Link>
                        </li>

                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                        
                    </ul>
                    </div>
                </div>    
            </nav>


            {/* HTML STRUCTURE - FOOTER */}
            <footer>
                <div>
                    <p>&copy; 2024 Jonalyn. All Rights Reserved.</p>
                </div>
            </footer>
        </>  
    );
}


