import React from 'react'
import './index.css'


const percentList = [
  { id: 1, color: 'rgb(19, 96, 24)', data: 'Principle & interest' },
  { id: 2, color: 'blue', data: 'Property taxes' },
  { id: 3, color: ' rgb(128, 128, 221)', data: 'Home owners insurance' },
  { id: 4, color: 'rgb(230, 233, 63)', data: 'HOA fees' },
  {id:5, color:' rgb(244, 103, 56)', data:'Utilities'}
]
function PaymentBreakDownCompo() {
  return (
    <section className='payment-break-bg-con'>

      <div className='breakdown-con-1'>
        <p>Monthly payment breakdown</p>
        <h3>$ 2,146/mo</h3>
        <div className='percents-container'>
          <div className='con1'></div>
          <div className='con2'></div>
          <div className='con3'></div>
          <div className='con4'></div>
          <div className='con5'></div>
        </div>
      </div>

      <div className='breakdown-con-2'>
        <div className='left-con'>

          {percentList.map((each) => (
            <div className='left-row'>
            <div className='color-div' style={{height:"14px", width:"6px",backgroundColor:`${each.color}`}}>

            </div>
              <p className='left-row-p'>{each.data}</p>
          </div>
          ))}
        </div>
        <div className='right-con'>
  
          <div className='right-box'>
            <p>$</p>
            <p>$1,175</p>
          </div>

          <div className='right-box'>
            <p>$</p>
            <p>265</p>
          </div>

          <div className='right-box'>
            <p>$</p>
            <p>132</p>
          </div>

          <div className='right-box'>
            <p>$</p>
            <p>132</p>
          </div>
          <div className='right-box'>
            <p>$100</p>
            <p></p>
          </div>
        </div>
      </div>
      <div className='breakdown-con-3'>
        <button>copy estimate Link</button>
      </div>
    </section>
  )
}

export default PaymentBreakDownCompo