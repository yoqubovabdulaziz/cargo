import React, { useEffect } from 'react'
import "./About.scss"

import aboutImg1 from "../../assets/about1.jpg"
import aboutImg2 from "../../assets/about2.jpg"
import aboutImg3 from "../../assets/about3.jpg"

import { FaPhone } from "react-icons/fa6";

import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000
        });
    }, [])
    return (
        <section id="about">
            <div className="container about">
                <h2 data-aos="fade-up" className="about__title">Biz Haqimizda</h2>
                <p data-aos="fade-up" className="about__description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque quos sapiente corrupti quis doloribus laudantium, architecto minima ab ullam saepe tenetur rem, aut quidem commodi quasi ratione necessitatibus expedita eaque.</p>
                <div className="about__wrapper">
                    <div data-aos="fade-up" className="about__card">
                        <div className="about__card__frame">
                            <img src={aboutImg1} alt="" />
                        </div>
                        <div className="about__card__content">
                            <h3>Lorem ipsum dolor sit.</h3>
                            <p> elit. Impedit recusandae quod nulla quaerat? Recusandae, enim aliquam quidem quam molestias placeat nulla, accusantium nihil fugiat tenetur tempore sunt amet esse ipsam!</p>
                            <a href="#contact">
                                Biz bilan bog'lanish
                                <FaPhone />
                            </a>
                        </div>
                    </div>
                    <div data-aos="fade-up" className="about__card">
                        <div className="about__card__frame">
                            <img src={aboutImg2} alt="" />
                        </div>
                        <div className="about__card__content">
                            <h3>Lorem ipsum dolor sit.</h3>
                            <p> elit. Impedit recusandae quod nulla quaerat? Recusandae, enim aliquam quidem quam molestias placeat nulla, accusantium nihil fugiat tenetur tempore sunt amet esse ipsam!</p>
                            <a href="#contact">
                                Biz bilan bog'lanish
                                <FaPhone />
                            </a>
                        </div>
                    </div>
                    <div data-aos="fade-up" className="about__card">
                        <div className="about__card__frame">
                            <img src={aboutImg3} alt="" />
                        </div>
                        <div className="about__card__content">
                            <h3>Lorem ipsum dolor sit.</h3>
                            <p> elit. Impedit recusandae quod nulla quaerat? Recusandae, enim aliquam quidem quam molestias placeat nulla, accusantium nihil fugiat tenetur tempore sunt amet esse ipsam!</p>
                            <a href="#contact">
                                Biz bilan bog'lanish
                                <FaPhone />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About