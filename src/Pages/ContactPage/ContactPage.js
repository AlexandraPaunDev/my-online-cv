import React from 'react';
import ContactForm from '../../components/ContactForm/ContactForm';

import { NavPanel } from '../../components/NavPanel/NavPanel';


import './ContactPage.css';

export function ContactPage(){
    return (
        <div className="contact-page-container">
            <NavPanel />
            <div className="form-container">
                <ContactForm />
            </div>
        </div>
    )
}