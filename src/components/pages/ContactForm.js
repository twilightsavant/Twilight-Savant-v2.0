import React from 'react';
import { render } from "react-dom";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";


/* Import Styles */
import './ContactForm.Style.css';


const validationSchema = Yup.object().shape({
    name: Yup.string()
        .min(3, "Must be longer than 2 characters")
        .max(255, "Must be shorter than 255 characters")
        .required("Must enter name"),
    company: Yup.string()
        .min(3, "Must be longer than 2 characters")
        .max(255, "Must be shorter than 255 characters"),
    phone: Yup.string()
        .min(6, "Must be longer than 6 numbers")
        .max(15, "Must be shorter than 15 numbers")
        .required("Must enter a phone number"),
    email: Yup.string()
        .email("Must be a valid email address")
        .max(255, "Must be shorter than 255 characters")
        .required("Must enter an email"),
    message: Yup.string()
        .min(1, "Must be longer than 1 character")
        .required("Must enter a message")
});

const ContactForm = props => {

        //<span className={nameInputErrorStyle}>Invalid phone number format</span>
        return (
            <div id="contactMeForm">
                <Formik
                    initialValues={{name: "", company: "", phone: "", email: "", message: ""}}
                    validationSchema={validationSchema}
                >
                    {({values, errors, touched, handleChange, handleBlur}) => (
                    <form onSubmit={props.handleSubmit}>
                        {JSON.stringify(values)}
                        <div className="form-wrap">
                            <label className="contactFormLabel name" htmlFor="name">Name</label>
                            <input 
                                type="text"
                                name="name"
                                id="name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                                className={touched.name && errors.name ? "has-error" : null}
                            />
                            
                        </div>
                        <div className="form-wrap">
                            <label className="contactFormLabel company" htmlFor="company">Company</label>
                            <input 
                                type="text"
                                name="company"
                                id="company"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.company}
                            />
                        </div>
                        <div className="form-wrap">
                            <label className="contactFormLabel phone" htmlFor="phone">Phone</label>
                            <input 
                                type="text"
                                name="phone"
                                id="phone"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.phone}
                            />
                        </div>
                        <div className="form-wrap">
                            <label className="contactFormLabel phone" htmlFor="email">Email</label>
                            <input 
                                type="text"
                                name="email"
                                id="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                            />
                        </div>
                        <div className="form-wrap">
                            <label className="contactFormLabel Message" htmlFor="message">Message</label>
                            <textarea
                                name="message"
                                id="message"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.message}
                            />
                        </div>                        
                        <button  type="submit">submit</button>
                    </form>
                )}                
                </Formik>
            </div>
        );
}

export default ContactForm;