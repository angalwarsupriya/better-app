
import React from 'react';
import './index.css';
import { IoStarSharp } from 'react-icons/io5';
import { FcGoogle } from 'react-icons/fc';
import { CiStopwatch } from 'react-icons/ci';
const Hero = () => {
  return (
    <section className="hero-section">
      <h1>Mortgages <br /> made simple</h1>
      <div className='home-row'>
        <div className='hero-left-con'>
          <button className='hero-btn'>Start my request</button>
          <div className='hero-left-con1'>
            <CiStopwatch style={{color:'white', marginTop:'10px'}}/>
            <p className='hero-icon-p'>3 min | no credit impact</p>
          </div>
        </div>
        <div className="ratings-con">
          <div className='ratings-row-con'>
            <FcGoogle />
            <div className='star-icons-row'>
              <IoStarSharp style={{ color: "yellow" }} />
              <IoStarSharp style={{ color: "yellow" }} />
              <IoStarSharp style={{ color: "yellow" }} />
              <IoStarSharp style={{ color: "yellow" }} />
              <IoStarSharp style={{ color: "yellow" }} />
            </div>
          </div>
          <p className='hero-icon-p'>4.6 stars| 3177 Google review</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
