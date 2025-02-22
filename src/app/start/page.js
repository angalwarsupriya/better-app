import React from 'react'
import './page.css'
import StartMain from '@/components/start-compo/StatMain'
import StartHead from '@/components/start-compo/StartHead'
import Footer from '@/components/footer-compo/Footer'
function Start() {
  return (
    <div className="start-page">
    <StartHead/>
      <main className="start-main">
          <StartMain/>
      </main>
    <Footer/>
    </div>
  )
}

export default Start