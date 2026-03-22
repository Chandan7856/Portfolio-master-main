/* eslint-disable no-unused-vars */
import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">&lt;Chandan Kumar/&gt;</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#projects" className="footer__link">Projects</a>
                </li>

                <li>
                    <a href="#contact" className="footer__link">Contact</a>
                </li>
            </ul>

            <div className="footer__social">

                <a 
                    href="https://github.com/Chandan7856" 
                    className="footer__social-link" 
                    target="_blank"
                    rel="noreferrer"
                >
                    <i className="bx bxl-github"></i>
                </a>

                <a 
                    href="https://www.linkedin.com/in/chandan-kumar-cse//" 
                    className="footer__social-link" 
                    target="_blank"
                    rel="noreferrer"
                >
                    <i className="bx bxl-linkedin"></i>
                </a>

                {/* <a 
                    href="https://twitter.com/your-twitter" 
                    className="footer__social-link" 
                    target="_blank"
                    rel="noreferrer"
                >
                    <i className="bx bxl-twitter"></i>
                </a> */}

            </div>

            <span className="footer__copy">
                &#169; Chandan Kumar. All rights reserved
            </span>
        </div>
    </footer>
  )
}

export default Footer