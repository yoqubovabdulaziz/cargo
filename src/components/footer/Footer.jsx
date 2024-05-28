import React from 'react'
import "./Footer.scss"
import { Link } from 'react-router-dom'

import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { LuPhone } from "react-icons/lu";

const Footer = () => {
    return (
        <footer id="footer">
            <div className="container footer">
                <Link className='footer__logo'>Logo Here</Link>
                <div className="footer__box">
                    <h3>Social Networks</h3>
                    <a href="#!">
                        <FaInstagram />
                        Instagram
                    </a>
                    <a href="#!">
                        <FaTelegramPlane />
                        Telegram
                    </a>
                    <a href="#!">
                        <MdOutlineMailOutline />
                        Email
                    </a>
                    <a href="#!">
                        <LuPhone />
                        +999-123-45-67
                    </a>
                </div>
                <div className="footer__box">
                    <h3>Location</h3>
                    <p>Uzbekiston</p>
                    <p>Toshkent</p>
                    <p>Chilonzor tumani</p>
                    <p>43-uy</p>
                    <p>Mo'ljal</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer