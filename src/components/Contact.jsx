// Contact.js
import React from 'react';
import ContactForm from './ContactForm/contactForm';
import { CiMail } from "react-icons/ci";

function Contact() {
  return (
    <section id="contact" className="row">
      <div className="col-lg-6 mx-auto">
        <h2 className="section-title"><CiMail /> Contact</h2>
        <ContactForm/>
      </div>
    </section>
  );
}

export default Contact;
