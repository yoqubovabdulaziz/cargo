import React, { useEffect } from 'react'
import "./Hero.scss"

import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000
        });
    }, [])

    return (
        <section id="hero">
            <div className="overlay"></div>
            <div className="container hero">
                <h1 data-aos="fade-down" className="hero__title">
                    Lorem ipsum dolor sit amet consectetur.
                </h1>
                <p data-aos="zoom-in" className="hero__description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, ea. Voluptas recusandae eius ad accusantium reiciendis perspiciatis, enim sint. Totam?
                </p>
                <div data-aos="fade-up" className="hero__buttons">
                    <button>lorem</button>
                    <button>lorem</button>
                </div>
            </div>
        </section >
    )
}

export default Hero