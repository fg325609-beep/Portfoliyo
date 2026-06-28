import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Header from './companents/Header/Header'
import Hero from './companents/Hero/Hero'
import Section_one from './companents/Section_one/Section_one'
import Sectiontwo from './companents/Sectiontwo/Sectiontwo'
import Sectiontheare from './companents/Sectiontheare/Sectiontheare'
import Footer from './companents/Footer/Footer'

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  }, [])

  return (
    <div>
        <Header/>
        <Hero/>
        <Section_one/>
        <Sectiontwo/>
        <Sectiontheare/>
        <Footer/>
    </div>
  )
}

export default App