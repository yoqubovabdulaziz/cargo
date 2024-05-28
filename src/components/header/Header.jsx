import React, { useState } from 'react';
import "./Header.scss";
import { Link, NavLink } from 'react-router-dom';

import { FaAngleDown } from "react-icons/fa6";
import { MdLanguage } from "react-icons/md";

const Header = () => {
    const [languageBox, setLanguageBox] = useState(false);
    const [currentLanguageName, setCurrentLanguageName] = useState("Uzbek");

    const handleLanguageChange = (languageName) => {
        setCurrentLanguageName(languageName);
        setLanguageBox(true);
    };

    const languages = ["Uzbek", "Rus", "China"];
    const availableLanguages = languages.filter(lang => lang !== currentLanguageName);

    const navbarShrink = () => {
        const nav = document.querySelector("header");
        if (window.scrollY > 100) {
            nav.classList.add("nav__shrink");
        } else {
            nav.classList.remove("nav__shrink");
        }
    }

    window.addEventListener("scroll", navbarShrink);

    return (
        <header id='header'>
            <nav className="container nav">
                <a href='#hero' className='nav__logo'>
                    Logo Here
                </a>
                <div className="nav__list">
                    <a href='#about'>Biz haqimizda</a>
                    <a href='#service'>Xizmatlarimiz</a>
                    <a href='#contact'>Bog'lanish</a>
                </div>
                <div className="nav__end">
                    <button onClick={() => setLanguageBox(prev => !prev)} className="nav__end__language__btn">
                        <div className="language__btn__frame">
                            <MdLanguage />
                            <span className='current__name'>{currentLanguageName}</span>
                        </div>
                        <span className='language__btn__down'>
                            <FaAngleDown />
                        </span>
                        <div className={`language__dropdown ${languageBox ? "show__language__dropdown" : ""}`}>
                            {availableLanguages.map(language => (
                                <div key={language} onClick={() => handleLanguageChange(language)} className="language__dropdown__item">
                                    <div className="language__dropdown__item__frame">
                                        <span>{language}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Header;
