import React from 'react';
import './contact.css';

const Contact = () => {
    return (
        <section id="contactPage">
            <div className="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
                <form className="contactForm">
                    <input type="text" className="name" placeholder="First Name" />
                    <input type="text" className="name" placeholder="Last Name" />
                    <input type="number" className="name" placeholder="Contact Number" />
                    <input type="email" className="email" placeholder="Your Email" />
                    <textarea className="msg" name="message" rows="5" placeholder="Your Message"></textarea>
                    <button type="submit" value="Send" className="submitBtn">Submit</button>
                </form>

            </div>
        </section>
    )
}

export default Contact;