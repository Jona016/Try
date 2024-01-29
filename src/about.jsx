/*
File Name: about.jsx
Student Name: Jonalyn Llanes
Student ID: 301345658
Date: January 28, 2023
*/

/********************** EXPORTING THE PROFILE IMAGE **********************************/
import Profile from '../src/assets/Profile.jpg';


/********************** ABOUT COMPONENT **********************************/
export default function About() {
    return (
        <>
            {/* HTML STRUCTURE - ABOUT PAGE */}
            <div className="about">
                <h1 className='header'>Behind the Screen</h1>
 
                {/* HTML STRUCTURE - PROFILE IMAGE */}
                <img className='about-img' src = {Profile} alt = "Profile"/> 
                
                {/* HTML STRUCTURE - NAME */}
                <h2 className='name'> Jonalyn Llanes </h2> 

                {/* HTML STRUCTURE - ABOUT DESCRIPTION */}
                <h2 className='about-desc'> 
                I enjoy working on initiatives that are in line with my passions since it fuels my excitement. <br/>
                As a web developer, I possess the ability to learn new skills quickly <br/>
                demonstrating a talent for quick learning.
                Also, pay close attention to details <br/> and  
                guarantee accuracy in every thing that I do. <br/>
                Take a glimpse at my resume.
                </h2>

                {/* HTML STRUCTURE - LINK TO RESUME */}
                <a href="../src/assets/files/resume.pdf">
                    <button className="btn-about">Resume</button>   
                </a> 
            </div>
            
        </>
    );
}
