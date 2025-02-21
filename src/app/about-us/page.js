import React from 'react'
import './page.css'

import Header from '@/components/Header'
import OurMission from '@/components/about-us/OurMission'
import ReadStory from '@/components/about-us/ReadStory'
import ChangingThings from '@/components/about-us/ChangingThings'
function About() {
  return (
    <div className="about-page">
    <Header />
      <main className="about-main">
        <OurMission />
        <ReadStory />
        <ChangingThings/>
      </main>
    </div>
  )
}

export default About