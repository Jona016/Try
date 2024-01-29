/*
File Name: education.jsx
Student Name: Jonalyn Llanes
Student ID: 301345658
Date: January 28, 2023
*/


/********************** IMPORTING EDUCATION IMAGE **********************************/
import Centennial_College from '../src/assets/Centennial_College.jpg';
import Tarlac_State_University from '../src/assets/Tarlac_State_University.jpg';

/********************** EDUCATION COMPONENT **********************************/
export default function Education() {
    return (
        <>
            {/* HTML STRUCTURE - EDUCATION PAGE */}
            <div className="education">
                <h1 className='header'>Bytes of Brilliance</h1>

                {/* HTML STRUCTURE - EDUCATION CARD 2 */}
                <div className='educ-card'>
                
                {/* HTML STRUCTURE - EDUCATION IMAGE */}
                <img className='educ-img' src = {Centennial_College} alt='Centennial College'/>
                    <br />

                    {/* HTML STRUCTURE - EDUCATION DESCRIPTION */}
                    <p className='educ-desc'>
                    Currently pursuing - Health Informatics Technology <br/>
                    Centennial College <br/>
                    Expected Graduation: April 2025
                    </p>
                </div>

                {/* HTML STRUCTURE - EDUCATION CARD 2 */}
                <div className='educ-card'>
                <img className= 'educ-img' src = {Tarlac_State_University} alt='Tarlac State University'/>
                    <br />
                    <p className='educ-desc'>
                    Bachelor of Science in Information Technology <br/>
                    Specialized in Web and Mobile Application <br />
                    Tarlac State University <br/>
                    Graduation Year: August 2019
                    </p>
                </div>
            </div>          
        </>
    );
}
    