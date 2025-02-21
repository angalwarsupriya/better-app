import React from 'react'
import './index.css'

function StartMain() {
    return (
      <div className='start-main-bg-con'>
            <h3>Hi, I'm Besty! <br />
                What can i help You with?
            </h3>
            <div className='item-container'>
                <div className='item'>
                    <i>ssssss</i>
                    <p>Buying a Home</p>
                </div>
                <div className='item'>
                    <i>ssssss</i>
                    <p>Refinancing</p>
                </div>
                <div className='item'>
                    <i>ssssss</i>
                    <p>Cash out refinance</p>
                </div>
                <div className='item'>
                    <i>ssssss</i>
                    <p>Home Eqality Line of Credit</p>
                </div>
            </div>
            <div className='price-details-row'>
                <div className='price-details-left-con'>
                    <h2 className='price-h'>$100B</h2>
                    <p className='price-p'>home loans fnded entirly online.</p>
                </div>
                <div className='price-details-right-con'>
                    <h2 className='price-h'>400K</h2>
                    <p className='price-p'>Customers who choose a Better Mortogage.</p>
                </div>
            </div>
            <div className='unlock-props-con'>
                <div className='props-con'>
                <p className='price-p'>
                    After a few Questions, you will Unlock:
                </p>
                <div className='unlock-item-con'>
                    <i>📱</i>
                    <p className='price-p'>Custom Mortages rate</p>
                </div>
                <div className='unlock-item-con'>
                    <i>📱</i>
                    <p className='price-p'>Exclusive offers</p>
                </div>
                <div className='unlock-item-con'>
                    <i>📱</i>
                    <p className='price-p'>A personalizes dashboard</p>
                </div>
                </div>
            </div>
      </div>
  )
}

export default StartMain