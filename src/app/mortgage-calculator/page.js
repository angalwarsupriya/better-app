import React from 'react'
import Header from '@/components/Header'
import Calculator from '@/components/mortgageCalculator-compo/Calculator'
import PaymentBreakDownCompo from '@/components/mortgageCalculator-compo/PaymentBreakDownCompo'
import QuestionsBank from '@/components/mortgageCalculator-compo/QuestionsBank'
import MoreResource from '@/components/mortgageCalculator-compo/MoreResources'
import Footer from '@/components/footer-compo/Footer'

function MortgageCalculator() {
  return (
    <div className="mortgageCalculator-bg-con">
    <Header />
      <main className="mortgageCalculator-main">
        <Calculator />
        <PaymentBreakDownCompo />
        <QuestionsBank />
        <MoreResource />
      </main>
      <Footer/>
    </div>
  )
}

export default MortgageCalculator