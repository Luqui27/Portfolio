// Contact.js
import React from 'react';
import ContactForm from './ContactForm/contactForm';
import { CiMail } from "react-icons/ci";

function Contact() {
  return (
    <section id="contact" className="row">
      <div className="col-lg-6 mx-auto">
        <h1 className="section-title"><CiMail /> Contact</h1>
        <ContactForm/>
      </div>
    </section>
  );
}

export default Contact;
