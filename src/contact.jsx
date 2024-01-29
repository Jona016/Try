/*
File Name: contact.jsx
Student Name: Jonalyn Llanes
Student ID: 301345658
Date: January 28, 2023
*/

/********************** IMPORTING LINK COMPONENT FROM REACT-ROUTER-DOM **********************************/
import { Link } from "react-router-dom";


/********************** CONTACT COMPONENT **********************************/
export default function Contact() {
    return (
        <>
            {/* HTML STRUCTURE - CONTACT PAGE*/}
            <div className="contact">
                <h1 className="header">Let's Connect</h1>

                {/* HTML STRUCTURE - CONTACT FORM */}
                <form className="contact-form">
                    <label className="contact-label">
                        *First Name:
                        <input type="text" name="fName" required="required" autoFocus/>
                    </label>
                    <label className="contact-label">
                        *Last Name:
                        <input type="text" name="lName" required="required"/>
                    </label>
                    <label className="contact-label">
                        *Contact Number:
                        <input type="text" name="number" required="required" pattern="[+1 ]{10}"/>
                    </label>
                    <label className="contact-label">
                        *Email:
                        <input type="email" name="email" required="required"/>
                    </label>
                    <label className="contact-label">
                       *Message:
                        <textarea type="message" name="message" required="required"/>
                    </label>
                    

                    {/* HTML STRUCTURE - LINK TO HOME WITH SUBMIT BUTTON */}
                    <Link to="/"><input type="submit" className="btn-submit" value="Submit"/></Link>
                </form>
                    
                    {/* HTML STRUCTURE - CONTACT INFORMATION*/}
                    <div className="contact-info">
                        <h3>Contact Information</h3>
                        <p>Email: jllanes2@my.centennialcollege.ca</p>
                        <p>Phone: +1 437-663-9111</p>
                    </div>
            </div>
        </>
    );
}
    