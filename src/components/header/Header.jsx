import React, { useState } from 'react';
import "./Header.scss";

import { FaAngleDown } from "react-icons/fa6";
import { MdLanguage } from "react-icons/md";
import { IoMenu, IoClose } from "react-icons/io5";

import { useTranslation } from 'react-i18next';
import "../../i18n"

const Header = () => {
    const [katalog, setKatalog] = useState(false)
    const navbarShrink = () => {
        const nav = document.querySelector("header");
        if (window.scrollY > 100) {
            nav.classList.add("nav__shrink");
        } else {
            nav.classList.remove("nav__shrink");
        }
    }
    window.addEventListener("scroll", navbarShrink);

    const [currentLang, setCurrentLang] = useState("Uzbek");

    let langitems = [
        { code: 'rus', name: 'Rus' },
        { code: 'china', name: 'China' },
        { code: 'uz', name: 'Uzbek' },
    ]

    const [lngDropdown, setLngDropdown] = useState(false);

    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <>
            <header id='header'>
                <nav className="container nav">
                    <a href='#hero' className='nav__logo'>
                        Logo Here
                    </a>
                    <div className="nav__list">
                        <a href='#about'>{t('navLink1')}</a>
                        <a href='#service'>{t('navLink2')}</a>
                        <a href='#contact'>{t('navLink3')}</a>
                    </div>
                    <div className="nav__end">
                        <button onClick={() => setLngDropdown(p => !p)} className="nav__end__language__btn">
                            <MdLanguage className='lang__icon' />
                            {
                                localStorage.getItem('current_lang') || currentLang
                            }
                            <FaAngleDown className='down__icon' />
                            <div className={`language__dropdown ${lngDropdown ? "show__lang__dropdown" : ""}`}>
                                {
                                    langitems.map(el => (
                                        <button key={el.name} onClick={() => {
                                            changeLanguage(el.code)
                                            setCurrentLang(el.name)
                                            localStorage.setItem('current_lang', el.name)
                                        }} className="language__item">
                                            {el.name}
                                        </button>
                                    ))
                                }
                            </div>
                        </button>
                        <button onClick={() => setKatalog(p => !p)} className="nav__menu__btn">
                            {
                                katalog ? <IoClose /> : <IoMenu />
                            }
                        </button>
                    </div>
                </nav>
            </header>

            <div className={`nav__katalog ${katalog ? "show__nav__katalog" : ""}`}>
                <a href='#about'>{t('navLink1')}</a>
                <a href='#service'>{t('navLink2')}</a>
                <a href='#contact'>{t('navLink3')}</a>
            </div>
        </>
    );
};

export default Header;
