import React from 'react'
import Header from '@/components/Header'
import Calculator from '@/components/mortgageCalculator-compo/Calculator'

function MortgageCalculator() {
  return (
    <div className="mortgageCalculator-bg-con">
    <Header />
      <main className="mortgageCalculator-main">
        <Calculator />
        
      </main>
    </div>
  )
}

export default MortgageCalculator