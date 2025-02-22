import React from 'react'
import './page.css'

import Header from '@/components/Header'
import OurMission from '@/components/about-us/OurMission'
import ReadStory from '@/components/about-us/ReadStory'
import ChangingThings from '@/components/about-us/ChangingThings'
import Footer from '@/components/footer-compo/Footer'
function About() {
  return (
    <div className="about-page">
    <Header />
      <main className="about-main">
        <OurMission />
        <ReadStory />
        <ChangingThings/>
      </main>
    <Footer/>
    </div>
  )
}

export default About