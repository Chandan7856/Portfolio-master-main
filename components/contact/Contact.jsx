/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_ti7hhqr', 'template_f4qr48v', form.current, {
                publicKey: 'Y5yspJjTsRVn9zFXq8oSY',
            })
            .then(() => {
                alert("✅ Message sent successfully!");
            })
            .catch(() => {
                alert("❌ Failed to send message. Try again.");
            });

        e.target.reset();
    };

    return (
        <section className="contact section" id="contact">
            <h2 className="section__title">Get In Touch 📩</h2>
            <span className="section__subtitle">
                Feel free to reach out for opportunities, collaborations, or any queries. <br />
                I’ll get back to you as soon as possible.
            </span>

            <div className="contact__container container grid">
                <div className="contact__content">
                    <h3 className="contact__title">
                        Talk To Me <i className="uil uil-calling"></i>
                    </h3>

                    <div className="contact__info">

                        {/* EMAIL */}
                        <div className="contact__card">
                            <i className="bx bx-mail-send contact__card-icon"></i>

                            <h3 className="contact__card-title">Email</h3>
                            <span className="contact__card-data">chandankumar7august@gmail.com</span>

                            <a
                                href="mailto:chandankumar7august@gmail.com"
                                className="contact__button"
                            >
                                Write Me{" "}
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                            </a>
                        </div>

                        {/* WHATSAPP */}
                        <div className="contact__card">
                            <i className="bx bxl-whatsapp contact__card-icon"></i>

                            <h3 className="contact__card-title">WhatsApp</h3>
                            <span className="contact__card-data">(+91) 7856956716</span>

                            <a
                                href="https://api.whatsapp.com/send?phone=7856956716&text=Hi Prince, I saw your portfolio!"
                                className="contact__button"
                            >
                                Write Me{" "}
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                            </a>
                        </div>

                    </div>
                </div>

                <div className="contact__content">
                    <h3 className="contact__title">
                        Send Me a Message <i className="uil uil-message"></i>
                    </h3>

                    <form ref={form} onSubmit={sendEmail} className="contact__form">

                        {/* NAME */}
                        <div className="contact__form-div">
                            <label className="contact__form-tag">Name</label>
                            <input
                                type="text"
                                name="name"
                                className="contact__form-input"
                                placeholder="Your Name"
                                required
                            />
                        </div>

                        {/* EMAIL */}
                        <div className="contact__form-div">
                            <label className="contact__form-tag">Mail</label>
                            <input
                                type="email"
                                name="email"
                                className="contact__form-input"
                                placeholder="Your Email"
                                required
                            />
                        </div>

                        {/* MESSAGE */}
                        <div className="contact__form-div contact__form-area">
                            <label className="contact__form-tag">Message</label>
                            <textarea
                                name="message"
                                cols="30"
                                rows="10"
                                className="contact__form-input"
                                placeholder="Write your message here..."
                                required
                            ></textarea>
                        </div>

                        {/* BUTTON */}
                        <button className="button button--flex">
                            Send Message 
                            <svg
                                className="button__icon"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352Z"
                                    fill="var(--container-color)"
                                ></path>
                                <path
                                    d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852Z"
                                    fill="var(--container-color)"
                                ></path>
                            </svg>
                        </button>

                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;