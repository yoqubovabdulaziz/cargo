import React, { useEffect } from 'react'
import "./HeroAbout.scss"

import { TbTruckDelivery } from "react-icons/tb";

import Aos from 'aos';
import 'aos/dist/aos.css';

const HeroAbout = () => {
    useEffect(() => {
        Aos.init({
            duration: 700
        });
    }, [])
    return (
        <div className='hero__about'>
            <div className="hero__about__wrapper container">
                <div data-aos="zoom-in" className="hero__about__box">
                    <TbTruckDelivery />
                    <h3>Lorem ipsum dolor sit.</h3>
                    <p>Lorem ipsum dolor, Lorem ipsum dolor sit amet. sit amet consectetur adipisicing elit. Placeat, sunt.</p>
                </div>
                <div data-aos="zoom-in" className="hero__about__box">
                    <TbTruckDelivery />
                    <h3>Lorem ipsum dolor sit.</h3>
                    <p>Lorem ipsum dolor, Lorem ipsum dolor sit amet. sit amet consectetur adipisicing elit. Placeat, sunt.</p>
                </div>
                <div data-aos="zoom-in" className="hero__about__box">
                    <TbTruckDelivery />
                    <h3>Lorem ipsum dolor sit.</h3>
                    <p>Lorem ipsum dolor, Lorem ipsum dolor sit amet. sit amet consectetur adipisicing elit. Placeat, sunt.</p>
                </div>
            </div>
        </div>
    )
}

export default HeroAbout