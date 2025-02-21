import React from 'react';
import './index.css';
import {IoStarSharp} from 'react-icons/io5'

const Testimonial = () => {
  return (
    <section className="testimonial-section">
      <div className='testimonial-left-con'>
        <div className='img-div'>
          <img src="/images/imgk.jpg" alt='something' className='testimonail-img'/>
        </div>
       
        <div className="tabs">
          <button>Arian</button>
          <button>Amadas</button>
          <button>paul</button>
        </div>
      </div>
      <div className='testimonial-right-con'>
        <h2>Find out why <br /> We're better</h2>
        <button>see all our stories.</button>
        <div className='star-row'>
          <IoStarSharp style={{color:"green"}}></IoStarSharp>
          <p>my name is supriya</p>
        </div>
      </div>
      
    </section>
  );
};

export default Testimonial;
