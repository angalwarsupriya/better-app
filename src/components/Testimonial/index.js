
import React from 'react';
import './index.css';
import { IoStarSharp } from 'react-icons/io5';

const Testimonial = () => {
  return (
    <section className="testimonial-section">
      <div className='testimonial-left-con'>
        <div className='img-div'>
          <img src="https://media.better.com/better-com/homepage/social-proof/still-quote-Arian.webp" alt='something' className='testimonial-img'/>
        </div>
        <div className="tabs">
          <button>Arian</button>
          <button>Amadas</button>
          <button>Paul</button>
        </div>
      </div>
      <div className='testimonial-right-con'>
        <h2>Find out why <br /> We're better</h2>
        <button>See all our stories</button>
        <div className='star-row'>
          <IoStarSharp style={{color:"green"}} />
          <p>Trustpilot <span>Excellent 4.4 out of 5</span></p>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
