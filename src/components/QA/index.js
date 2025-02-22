import React from 'react';
import './index.css';
import { FaArrowRight } from 'react-icons/fa6'

const QA = () => {
  return (
    <section className="qa-section">
      
      <div className='qa-top-row'>
        <h2>Got Questions? <br />
          We got Answers
        </h2>
        <div className='qa-tabs'>
          <button>Arian</button>
          <button>Amadas</button>
          <button>paul</button>
        </div>
      </div>
      
      <div className="qa-content">
        <div className="qa-item item1">
          <div className="qa-text">
            <h3>Buying Your first Home with Better.</h3>
            <button className='item-btn'>
              <FaArrowRight style={{fontSize:"15px"}}/>
            </button>
          </div>
          <img src="https://media.better.com/better-com/homepage/learning-center/first-home.webp" alt="Question 1" className='sm-img' />
        </div>
        <div className="qa-item item2">
          <div className="qa-text">
            <h3>One day Mortage?</h3>
            <p>With this structure, we create a fully responsive home page with a header,
              hero section, testimonial section, Q&A section, and footer. Each component has its
              own CSS file for styling, and the home page integrates these components to create the full layout.</p>
            <button className='item-btn'>
            <FaArrowRight style={{fontSize:"15px"}}/>

            </button>
          </div>
          <img src="https://media.better.com/better-com/homepage/learning-center/one-day-mortgage.webp" alt="Question 1" className='lg-img' />
        </div>
        <div className="qa-item item3">
          <div className="qa-text">
            <h3>Better HCLOC</h3>
            <p>With this structure, we create a fully responsive home page with a header,
              hero section, testimonial section, Q&A section, and footer. Each component has its
              own CSS file for styling, and the home page integrates these components to create the full layout.</p>
            <button className='item-btn'>
            <FaArrowRight style={{fontSize:"15px"}}/>
            </button>
          </div>
          <img src="https://media.better.com/better-com/homepage/learning-center/better-heloc.webp" alt="Question 1" className='lg-img' />
        </div>
        <div className="qa-item item4">
          <div className="qa-text">
            <h3>Insurance</h3>
            <button className='item-btn'>
            <FaArrowRight style={{fontSize:"15px"}}/>
            </button>
          </div>
          <img src="https://media.better.com/better-com/homepage/learning-center/insurance.webp" alt="Question 1" className='sm-img' />
        </div>
      </div>

    </section>
  );
};

export default QA;
