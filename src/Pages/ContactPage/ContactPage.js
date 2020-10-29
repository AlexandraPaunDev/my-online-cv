import React from 'react';
import ContactForm from '../../components/ContactForm/ContactForm';

import { NavPanel } from '../../components/NavPanel/NavPanel';
 import name from "./img/name.png"
 import address from "./img/address.png"
 import phone from "./img/phone.png"
 import email from "./img/email.png"
 
import './ContactPage.css';

export function ContactPage(){
    return (
        <div className="contact-page-container">
            <NavPanel />
            <div className="contact-page-body-container">
                <div className="contact-first-container">
                    <div className="contact-name-container">
                        <div className="nameico-container">
                            <img src={name} className="contact-nameico" alt="name"></img>
                        </div>
                        <div className="contact-name-description">
                            <p className="name-name">Name</p>
                            <p className="my-name">Alexandra Paun</p>
                        </div> 
                    </div>

                    <div className="contact-address-container">
                        <div className="addressico-container">
                            <img src={address} className="contact-addressico" alt="address"></img>
                        </div>
                        <div className="contact-address-description">
                            <p className="address-address">Address</p>
                            <p className="my-address">Cluj-Napoca, Romania</p>
                        </div>
                    </div>

                    <div className="contact-phone-container">
                        <div className="phoneico-container">
                            <img src={phone} className="contact-phoneico" alt="phone"></img>
                        </div>
                        <div className="contact-phone-description">
                            <p className="phone-phone">Phone</p>
                            <p className="my-phone">+40741514215</p>
                        </div> 
                    </div> 

                    <div className="contact-email-container"> 
                        <div className="emailico-container">
                            <img src={email} className="contact-emailico" alt="email"></img>
                        </div>
                        <div className="contact-email-description">
                            <p className="email-email">Email</p>
                            <p className="my-email">alexandrapaun14@gmail.com</p>
                        </div> 
                    </div>

                </div>
                <div className="contact-second-container">
                    <div className="contact-title "><b>Get In Touch</b>
                        <div className="contact-page-text">Have an interesting project in mind or just want to say hi?</div>
                        <div className="contact-page-second-text">Feel free to send me a message!</div>
                    </div>
                    <div className="form-container">
                    <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    )
}