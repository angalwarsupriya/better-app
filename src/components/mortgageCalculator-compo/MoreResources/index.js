import React from 'react'
import './index.css'
import { GrDocumentText } from 'react-icons/gr'
import { FaArrowTrendDown } from 'react-icons/fa6'
import { FaArrowRight } from 'react-icons/fa6'
import {PiCalculator} from 'react-icons/pi'


function MoreResource() {
  return (
    <section className='resorce-bg-con'>
          <h3>More resource</h3>
          <div className='resources-row'>
              <div className='resource-box'>
                  <GrDocumentText/>
                  <h6>Get pre-approved to see how much you can borrow</h6>
                  <div className='a-row'>
                      <a>Get Started</a>
                      <FaArrowRight/>
                  </div>
              </div>
              <div className='resource-box'>
                  <FaArrowTrendDown/>
                  <h6>See today’s rates in your area</h6>
                  <div className='a-row'>
                      <a>See rates</a>
                      <FaArrowRight/>
                  </div>
              </div>
              <div className='resource-box'>
                  <PiCalculator/>
                  <h6>Find out your max homebuying budget</h6>
                  <div className='a-row'>
                      <a>Try our mortgage calculator </a>
                      <FaArrowRight/>
                  </div>
              </div>
             
              <a className='a'> Better Real Estate discount terms and conditions.</a>
              <p className='pa'>*See Better Real Estate discount terms and conditions.
                  **The average lifetime savings estimate is based on a comparison of the Freddie Mac Primary Mortgage Market Survey’s (PMMS) 30-year fixed-rate mortgage product with Better Mortgage’s own offered rate for a comparable mortgage product between Jan ‘20 - Dec ‘20. PMMS is based on conventional, conforming fully-amortizing home purchase loans for borrowers with a loan-to-value of 80 percent and with excellent credit. Better Mortgage’s offered rate is based on pricing output for a 30-year fixed-rate mortgage product with a 30-day lock period for a single-family, owner-occupied residential property and a borrower with excellent (760 FICO) credit and a loan-to-value ratio of 80 percent. Individual savings could vary based on current market rates, property type, loan amount, loan-to-value, credit score, debt-to-income ratio and other variables.</p>
          </div>
    </section>
  )
}

export default MoreResource