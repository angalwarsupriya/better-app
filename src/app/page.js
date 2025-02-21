
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Testimonial from '../components/Testimonial';
import QA from '../components/QA';

import './page.css';

const Home = () => {
  return (
    <div className="home-page">
      <Header />
      <main className="home-main">
        <Hero />
        <Testimonial />
        <QA />
      </main>
    </div>
  );
};

export default Home;
