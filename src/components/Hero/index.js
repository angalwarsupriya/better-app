import React from 'react';
import './index.css';

import {FcGoogle} from  'react-icons/fc'

const Hero = () => {
  return (
    <section className="hero-section">
      <h1>Mortgages <br /> made simple</h1>
      <div className='home-row'>
        <div className='hero-left-con'>
          <button className='hero-btn'>Start my request</button>
          <div className='hero-left-con1'>
            <i></i>
            <p className='hero-icon-p'>3 min / my name is something</p>
          </div>
        </div>
        <div className="ratings-con">
          <div className='ratings-row-con'>
            <FcGoogle/>
            <div className='star-icons-row'>
                ⭐⭐⭐⭐⭐
            </div>
          </div>
          <p className='hero-icon-p'>3 min / my name is something</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
