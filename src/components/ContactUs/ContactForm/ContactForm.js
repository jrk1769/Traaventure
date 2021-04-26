import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import "./ContactForm.css"

/**
* @author
* @function ContactForm
**/

const ContactForm = () => {

    const [values, setValues] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleNameInputChange = (e) => {
        e.persist();
        setValues((values) => ({
            ...values,
            name: e.target.value,
        }));
    };

    const handleEmailInputChange = (e) => {
        e.persist();
        setValues((values) => ({
            ...values,
            email: e.target.value,
        }));
    };

    const handlePhoneInputChange = (e) => {
        e.persist();
        setValues((values) => ({
            ...values,
            phone: e.target.value,
        }));
    };

    const handleMessageInputChange = (e) => {
        e.persist();
        setValues((values) => ({
            ...values,
            message: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="registerForm">
            <h2 className="formHeading">We Will call you</h2>
            <form id="contact-form" onSubmit={handleSubmit} encType="multipart/form-data">
                <input
                    type="text"
                    name="name"
                    placeholder="Enter your Name"
                    value={values.name}
                    onChange={handleNameInputChange} 
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Enter your Email"
                    value={values.email}
                    onChange={handleEmailInputChange}
                    required
                />
                <input
                    type="tel"
                    name="phone"
                    placeholder="Enter your Number"
                    pattern="[0-9]{10}"
                    value={values.phone}
                    onChange={handlePhoneInputChange}
                    required
                />
                <textarea
                    name="message"
                    rows="4"
                    cols="50"
                    value={values.message}
                    onChange={handleMessageInputChange}
                />
                <Button type="submit">Submit</Button>
            </form>
            {submitted && <div class='success-message'>Success! Thank you for registering</div>}
        </div>
    )
}

export default ContactForm