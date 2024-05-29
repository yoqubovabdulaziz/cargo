import React, { useEffect } from 'react'
import "./Contact.scss"

import { IoLocationSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';

const Contact = () => {
    useEffect(() => {
        AOS.init();
    }, [])

    const { t } = useTranslation();

    return (
        <section id="contact">
            <div className="container contact">
                <h2 className="contact__title">{t('contactTitle')}</h2>
                <p className="contact__description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, magnam?</p>
                <div className="contact__wrapper">
                    <div className="contact__box">
                        <IoLocationSharp />
                        <h3>{t('contactBoxTitle1')}</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                    </div>
                    <div className="contact__box">
                        <FaPhone />
                        <h3>{t('contactBoxTitle2')}</h3>
                        <p>Lorem ipsum dolor.</p>
                    </div>
                    <div className="contact__box">
                        <FaTelegram />
                        <h3>{t('contactBoxTitle3')}</h3>
                        <p>Lorem ipsum dolor</p>
                    </div>
                </div>
                <form className="contact__form">
                    <div className="contact__form__wrapper">
                        <div className="contact__form__left">
                            <input type="text" placeholder={t('contactInpText1')} />
                            <input type="text" placeholder={t('contactInpText2')} />
                            <input type="number" placeholder={t('contactInpText3')} />
                            <input type="text" placeholder={t('contactInpText4')} />
                        </div>
                        <div className="contact__form__right">
                            <textarea placeholder={t('contactInpText5')} name="" id="" cols="30" rows="10"></textarea>
                        </div>
                    </div>
                    <button className='contact__form__send__btn'>{t('contactSendBtn')}</button>
                </form>
            </div>
        </section>
    )
}

export default Contact