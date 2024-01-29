/*
File Name: project.jsx
Student Name: Jonalyn Llanes
Student ID: 301345658
Date: January 28, 2023
*/

/********************** IMPORTING PROJECT IMAGE **********************************/
import AI_Website from '../src/assets/AI.png';

/********************** PROJECT COMPONENT **********************************/
export default function Project() {
    return (
        <>

            {/* HTML STRUCTURE - PROJECT PAGE */}
            <div className="project">
                <h1 className='header'>Concept to Code</h1>
                
                {/* HTML STRUCTURE - PROJECT LIST */}
                <div className="proj-list">

                    {/* HTML STRUCTURE - PROJECT CARD */}
                    <div className="proj-card">
                        <h3 className='proj-header'>AI Triage</h3>

                        {/* HTML STRUCTURE - PROJECT IMAGE */}
                        <img className="proj-img" src={AI_Website} alt="AI Website"/>
                        
                        {/* HTML STRUCTURE - PROJECT DESCRIPTION */}
                        <h3 className='proj-desc'> 
                            As the UI Designer for AI triage, an AI-powered triage system, my focus was on improving user experience and<br/>
                             accessibility. I played a crucial role in designing the user interface to enhance the overall interaction and visual appeal.
                        </h3>
                    </div>
                </div>
            </div>
        </>
    );
}
    