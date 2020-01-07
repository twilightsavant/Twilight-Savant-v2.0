import React from 'react';

/* Import Styles */
//import './ContactForm.style.css';

const ContactForm = props => {


    return (
        <React.Fragment>
            <form onSubmit={props.handleSubmit}>
                <label className="contactFormLabel name">Name</label>
                <input 
                    type="text"
                    name="name"
                    onChange={props.change}
                />
                <label className="contactFormLabel company">Company</label>
                <input 
                    type="text"
                    name="company"
                    onChange={props.change}
                />
                <label className="contactFormLabel phone">Phone</label>
                <input 
                    type="text"
                    name="phone"
                    onChange={props.change}
                />
                <label className="contactFormLabel phone">Email</label>
                <input 
                    type="text"
                    name="phone"
                    onChange={props.change}
                />
                <label className="contactFormLabel Message">Message</label>
                <textarea
                    name="message"
                    onChange={props.change}
                />
                <button />
            </form>
        </React.Fragment>
    );
}

export default ContactForm;