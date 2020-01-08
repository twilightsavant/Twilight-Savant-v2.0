import React from 'react';
import { Formik } from 'formik';
import * as Yup from "yup";
import Error from '../Error';
import axios from 'axios';


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

    let formVisible = true;

        //<span className={nameInputErrorStyle}>Invalid phone number format</span>
        return (
            <React.Fragment>
                <div id="contactMeForm">
                    <Formik
                        initialValues={{name: "", company: "", phone: "", email: "", message: ""}}
                        validationSchema={validationSchema}
                        onSubmit={(values, {setSubmitting, resetForm}) => {
                            setSubmitting(true);

                            axios.post('/api/form', {
                                name: values.name,
                                company: values.company,
                                phone: values.phone,
                                email: values.email,
                                message: values.message
                            });
                            
                            formVisible = false;

                            setSubmitting(false);
                            resetForm();
                        }}
                    >
                        {({values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting}) => (
                        <form onSubmit={handleSubmit}>
                            <div className="form-wrap">
                                <input 
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="NAME"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.name}
                                    className={touched.name && errors.name ? "has-error" : null}
                                />
                                <Error touched={touched.name} message={errors.name} />
                            </div>
                            <div className="form-wrap">
                                <input 
                                    type="text"
                                    name="company"
                                    id="company"
                                    placeholder="COMPANY"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.company}
                                    className={touched.company && errors.company ? "has-error" : null}
                                />
                                <Error touched={touched.company} message={errors.company} />
                            </div>
                            <div className="form-wrap">
                                <input 
                                    type="text"
                                    name="phone"
                                    id="phone"
                                    placeholder="PHONE"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.phone}
                                    className={touched.phone && errors.phone ? "has-error" : null}
                                />
                                <Error touched={touched.phone} message={errors.phone} />
                            </div>
                            <div className="form-wrap">
                                <input 
                                    type="text"
                                    name="email"
                                    id="email"
                                    placeholder="EMAIL"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                    className={touched.email && errors.email ? "has-error" : null}
                                />
                                <Error touched={touched.email} message={errors.email} />
                            </div>
                            <div className="form-wrap textarea">
                                <textarea
                                    name="message"
                                    id="message"
                                    placeholder="MESSAGE"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.message}
                                    className={touched.message && errors.message ? "has-error" : null}
                                />
                                <Error touched={touched.message} message={errors.message} />
                            </div>                        
                            <button id="contactSubmitButton" type="submit" disabled={isSubmitting}>Submit</button>
                            <span id="contactSentPar">
                                <span id="contactSent" className={formVisible ? "formVisible" : "formHidden"}>
                                    <span className="check" />Your Message Has Been Sent
                                </span>
                            </span>
                        </form>
                    )}                
                    </Formik>
                </div>
            </React.Fragment>
        );
}

export default ContactForm;