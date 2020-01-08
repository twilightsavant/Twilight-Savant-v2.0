import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';


/* Import Styles */
import './ContactForm.Style.css';


let nameInputErrorStyle = "";




const ContactForm = props => {

    const initBlur = (e) => {
        console.log("Woke");
        console.log(e.target.name);
        if(e.target.name === "name") {
            if(e.target.value === '') {
                console.log('BLANK');
                nameInputErrorStyle = "has-error";
            } else {
                console.log('POPULATED');
                nameInputErrorStyle = "";
            }
        }
    }

        //<span className={`form-validation ${nameInputErrorStyle}`}>Invalid phone number format</span>
        return (
            <div id="contactMeForm">
                <form onSubmit={props.handleSubmit}>
                    <div className="form-wrap">
                        <label className="contactFormLabel name">Name</label>
                        <input 
                            type="text"
                            name="name"
                            onChange={props.change}
                            onBlur={initBlur}
                            className={nameInputErrorStyle}
                        />
                        <span className={nameInputErrorStyle}>Invalid phone number format</span>
                    </div>
                    <div className="form-wrap">
                        <label className="contactFormLabel company">Company</label>
                        <input 
                            type="text"
                            name="company"
                            onChange={props.change}
                            onBlur={initBlur}
                        />
                    </div>
                    <div className="form-wrap">
                        <label className="contactFormLabel phone">Phone</label>
                        <input 
                            type="text"
                            name="phone"
                            onChange={props.change}
                        />
                    </div>
                    <div className="form-wrap">
                        <label className="contactFormLabel phone">Email</label>
                        <input 
                            type="text"
                            name="email"
                            onChange={props.change}
                        />
                    </div>
                    <div className="form-wrap">
                        <label className="contactFormLabel Message">Message</label>
                        <textarea
                            name="message"
                            onChange={props.change}
                        />
                    </div>
                    <button />
                </form>
            </div>
        );
}

export default ContactForm;