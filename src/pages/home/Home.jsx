import React from 'react'
import "./Home.scss"
import Hero from '../../components/hero/Hero'
import HeroAbout from '../../components/hero-about/HeroAbout'
import About from '../../components/about/About'
import Service from '../../components/service/Service'
import Contact from '../../components/contact/Contact'

const Home = () => {
    return (
        <>
            <Hero />
            <HeroAbout />
            <About />
            <Service />
            <Contact />
        </>
    )
}

export default Home