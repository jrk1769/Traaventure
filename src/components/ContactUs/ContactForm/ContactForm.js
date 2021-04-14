import { Button, TextField } from '@material-ui/core'
import React from 'react'
import "./ContactForm.css"

/**
* @author
* @function ContactForm
**/

const ContactForm = () => {

    return (
        <div className="registerForm">
            <h2>We Will call you</h2>
            <form>
                <TextField fullWidth autoComplete="none" label="Full Name" />
                <TextField fullWidth autoComplete="none" label="Email" />
                <TextField fullWidth autoComplete="none" label="Phone" />
                <Button type="submit">Submit</Button>
            </form>
        </div>
    )
}

export default ContactForm