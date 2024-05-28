import React, { useEffect } from 'react'
import "./Contact.scss"

import { IoLocationSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";

import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <section id="contact">
            <div className="container contact">
                <h2 className="contact__title">Biz Bilan Bog'lanish</h2>
                <p className="contact__description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, magnam?</p>
                <div className="contact__wrapper">
                    <div data-aos="fade-right" className="contact__box">
                        <IoLocationSharp />
                        <h3>Manzil</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                    </div>
                    <div data-aos="fade-up" className="contact__box">
                        <FaPhone />
                        <h3>Telefon Raqam</h3>
                        <p>Lorem ipsum dolor.</p>
                    </div>
                    <div data-aos="fade-left" className="contact__box">
                        <FaTelegram />
                        <h3>Telegram</h3>
                        <p>Lorem ipsum dolor</p>
                    </div>
                </div>
                <form className="contact__form">
                    <div className="contact__form__wrapper">
                        <div className="contact__form__left">
                            <input data-aos="fade-right" data-aos-delay="500" data-aos-duration="800" type="text" placeholder='Ism' />
                            <input data-aos="fade-right" data-aos-delay="700" data-aos-duration="800" type="text" placeholder='Familya' />
                            <input data-aos="fade-right" data-aos-delay="900" data-aos-duration="800" type="number" placeholder='Telefon raqam' />
                            <input data-aos="fade-right" data-aos-delay="1000" data-aos-duration="800" type="text" placeholder='Email Address' />
                        </div>
                        <div className="contact__form__right">
                            <textarea data-aos="fade-left" placeholder='Message' name="" id="" cols="30" rows="10"></textarea>
                        </div>
                    </div>
                    <button className='contact__form__send__btn'>Yuborish</button>
                </form>
            </div>
        </section>
    )
}

export default Contact