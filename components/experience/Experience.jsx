/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './experience.css';

const Experience = () => {
    const [toggleState, setToggleState] = useState(false);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <div className="section experience section" id="experience">
            <h2 className="section__title">Experience 💼</h2>
            <span className="section__subtitle">What I do</span>

            <div className="exp__container container grid">

                {/* FULL STACK PROJECTS */}
                <div className="exp__content">
                    <div>
                        <i className="uil uil-web-grid exp__icon"></i>
                        <h3 className="exp__title">Full Stack <br /> Developer</h3>
                    </div>

                    <div>
                        <span className="exp__comp">Personal Projects</span>
                    </div>

                    <span className="exp__button" onClick={() => toggleTab(1)}>
                        View More <i className="uil uil-arrow-right exp__button-icon"></i>
                    </span>

                    <div className={toggleState === 1 ? "exp__modal active-modal" : "exp__modal"}>
                        <div className="exp__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times exp__modal-close"></i>

                            <h3 className="exp__modal-title">
                                Full Stack Development <br /> 2024 - Present
                            </h3>

                            <p className="exp__modal-description">
                                Building real-world full stack applications using modern technologies.
                            </p>

                            <ul className="exp__modal-experiences grid">

                                <li className="exp__modal-experience">
                                    <li className="uil uil-check-circle exp__modal-icon"></li>
                                    <p className="exp__modal-info">
                                        Developed an E-commerce platform with product management, cart, and order system.
                                    </p>
                                </li>

                                <li className="exp__modal-experience">
                                    <li className="uil uil-check-circle exp__modal-icon"></li>
                                    <p className="exp__modal-info">
                                        Built a real-time chat application using React, Node.js, and Socket.io.
                                    </p>
                                </li>

                                <li className="exp__modal-experience">
                                    <li className="uil uil-check-circle exp__modal-icon"></li>
                                    <p className="exp__modal-info">
                                        Created a pathfinding visualizer to demonstrate algorithms visually.
                                    </p>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>

                {/* DSA + LEARNING */}
                <div className="exp__content">
                    <div>
                        <i className="uil uil-brain exp__icon"></i>
                        <h3 className="exp__title">Problem Solving <br /> & DSA</h3>
                    </div>

                    <div>
                        <span className="exp__comp">Self Learning</span>
                    </div>

                    <span className="exp__button" onClick={() => toggleTab(2)}>
                        View More <i className="uil uil-arrow-right exp__button-icon"></i>
                    </span>

                    <div className={toggleState === 2 ? "exp__modal active-modal" : "exp__modal"}>
                        <div className="exp__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times exp__modal-close"></i>

                            <h3 className="exp__modal-title">
                                DSA & Problem Solving <br /> Ongoing
                            </h3>

                            <p className="exp__modal-description">
                                Continuously improving problem-solving skills and algorithmic thinking.
                            </p>

                            <ul className="exp__modal-experiences grid">

                                <li className="exp__modal-experience">
                                    <li className="uil uil-check-circle exp__modal-icon"></li>
                                    <p className="exp__modal-info">
                                        Solving Data Structures and Algorithms problems regularly.
                                    </p>
                                </li>

                                <li className="exp__modal-experience">
                                    <li className="uil uil-check-circle exp__modal-icon"></li>
                                    <p className="exp__modal-info">
                                        Strong understanding of arrays, trees, graphs, and recursion.
                                    </p>
                                </li>

                                <li className="exp__modal-experience">
                                    <li className="uil uil-check-circle exp__modal-icon"></li>
                                    <p className="exp__modal-info">
                                        Practicing coding questions to prepare for technical interviews.
                                    </p>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Experience;