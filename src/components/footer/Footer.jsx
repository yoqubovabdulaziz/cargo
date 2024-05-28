import React from 'react'
import "./Footer.scss"
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer id="footer">
            <div className="container footer">
                <Link className='footer__logo'>Logo Here</Link>
                <div className="footer__box">
                    <h3>Social Networks</h3>
                    <a href="#!">Instagram</a>
                    <a href="#!">Telegram</a>
                    <a href="#!">Email</a>
                    <a href="#!">+999-123-45-67</a>
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