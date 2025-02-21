import React from 'react'
import './page.css'
import StartMain from '@/components/start-compo/StatMain'
import StartHead from '@/components/start-compo/StartHead'
function Start() {
  return (
    <div className="start-page">
    <StartHead/>
      <main className="start-main">
          <StartMain/>
      </main>
    </div>
  )
}

export default Start