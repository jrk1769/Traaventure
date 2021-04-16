import React from 'react'
import ContactForm from './ContactForm/ContactForm'
import './ContactUs.css'

/**
* @author
* @function ContactUs
**/

const ContactUs = (props) => {
    return (
        <>
            <div className="contactUsImg">
                <h1 className="contactTag">Have a place of your own in mind?</h1>
            </div>
            <div className="row">
                <div className="column"><img src="images/contact1.jpg" alt="Telephone" style={{width: "100%"}} /></div>
                <div className="column">
                    <ContactForm /> 
                    <p>Miheer: +91-9022266503</p>
                    <p>Rushab: +91-9022252766</p>
                </div>
            </div>
        </>
    )

}

export default ContactUs