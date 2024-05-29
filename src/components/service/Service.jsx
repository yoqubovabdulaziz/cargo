import React, { useEffect } from 'react'
import "./Service.scss"

import { TbTruckDelivery } from "react-icons/tb";


import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';

const Service = () => {
    useEffect(() => {
        AOS.init();
    }, [])

    const { t } = useTranslation();

    return (
        <section id="service">
            <div className="container service">
                <h2 data-aos="fade-up" className="service__title">{t('serviceTitle')}</h2>
                <p data-aos="fade-up" className="service__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ex illum dolore blanditiis atque provident soluta velit modi cumque </p>
                <div className="service__wrapper">
                    <div data-aos="fade-up" data-aos-delay="50" className="service__box">
                        <div className="service__box__left">
                            <TbTruckDelivery />
                        </div>
                        <div className="service__box__right">
                            <h3>Lorem ipsum dolor sit amet.</h3>
                            <p>Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, autem? amet consectetur adipisicing elit. Consectetur, quaerat.</p>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="100" className="service__box">
                        <div className="service__box__left">
                            <TbTruckDelivery />
                        </div>
                        <div className="service__box__right">
                            <h3>Lorem ipsum dolor sit amet.</h3>
                            <p>Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, autem? amet consectetur adipisicing elit. Consectetur, quaerat.</p>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="150" className="service__box">
                        <div className="service__box__left">
                            <TbTruckDelivery />
                        </div>
                        <div className="service__box__right">
                            <h3>Lorem ipsum dolor sit amet.</h3>
                            <p>Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, autem? amet consectetur adipisicing elit. Consectetur, quaerat.</p>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="200" className="service__box">
                        <div className="service__box__left">
                            <TbTruckDelivery />
                        </div>
                        <div className="service__box__right">
                            <h3>Lorem ipsum dolor sit amet.</h3>
                            <p>Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, autem? amet consectetur adipisicing elit. Consectetur, quaerat.</p>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="250" className="service__box">
                        <div className="service__box__left">
                            <TbTruckDelivery />
                        </div>
                        <div className="service__box__right">
                            <h3>Lorem ipsum dolor sit amet.</h3>
                            <p>Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, autem? amet consectetur adipisicing elit. Consectetur, quaerat.</p>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="300" className="service__box">
                        <div className="service__box__left">
                            <TbTruckDelivery />
                        </div>
                        <div className="service__box__right">
                            <h3>Lorem ipsum dolor sit amet.</h3>
                            <p>Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, autem? amet consectetur adipisicing elit. Consectetur, quaerat.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Service