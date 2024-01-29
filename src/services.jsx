/*
File Name: services.jsx
Student Name: Jonalyn Llanes
Student ID: 301345658
Date: January 28, 2023
*/


/********************** IMPORTING IMAGES **********************************/

import Skill1 from '../src/assets/Skill1.jpg';
import Skill2 from '../src/assets/Skill2.jpg';
import Skill3 from '../src/assets/Skill3.jpg';


/********************** REACT COMPONENT FOR SERVICES **********************************/

export default function Services() {
    return (
        <>
            {/*HTML STRUCTURE - SERVICES PAGE*/}
            <div className="services">

                {/*HTML STRUCTURE - HEADER*/}
                <h1 className='header'>Tech Toolkit</h1>

                {/*HTML STRUCTURE - SKILL LIST*/}
                <div className="skill-list">
                    
                    
                    {/*HTML STRUCTURE - SKILL CARD 1*/}
                    <div className="skill-card">
                        <h2 className='skill-header'>UI/UX Design</h2>
                        <img className = "skill-img"src = {Skill1} alt='Web Development'/>
                        <h3 className='skill-desc'>Transforming ideas into visually stunning and user-friendly interfaces</h3>
                    </div>


                    {/*HTML STRUCTURE - SKILL CARD 2*/}
                    <div className="skill-card">
                        <h2 className='skill-header'>Web Development</h2>
                        <img className = "skill-img"src = {Skill2} alt='UI/UX Design'/>
                        <h3 className='skill-desc'>Bringing websites to life with creativity and functionality.</h3>
                    </div>

                    {/*HTML STRUCTURE - SKILL CARD 3*/}
                    <div className="skill-card">
                        <h2 className='skill-header'>QA Testing/Debugging</h2>
                        <img className = "skill-img"src = {Skill3} alt='QA Testing/Debugging'/>
                        <h3 className='skill-desc'>Meticulously ensuring flawless performance and user experience.</h3>
                    </div>
                </div>
            </div>
        </>
    );
}
