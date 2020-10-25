import React from 'react';
import ContactForm from '../../components/ContactForm/ContactForm';

import { NavPanel } from '../../components/NavPanel/NavPanel';
 
 
import './ContactPage.css';

export function ContactPage(){
    return (
        <div className="contact-page-container">
            <NavPanel />
            <div className="contact-page-body-container">
                <div className="contact-title "><b>Get In Touch</b>
                    <div className="contact-page-text">Have an interesting project in mind or just want to say hi?</div>
                    <div className="contact-page-second-text">Feel free to send me a message!</div>
                </div>
                <div className="form-container">
                    <ContactForm />
                </div>
            </div>
        </div>
    )
}