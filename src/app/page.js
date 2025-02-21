
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Testimonial from '../components/Testimonial';
import QA from '../components/QA';

import './page.css';
import Footer from '@/components/footer-compo/Footer';

const Home = () => {
  return (
    <div className="home-page">
      <Header />
      <main className="home-main">
        <Hero />
        <Testimonial />
        <QA />
        <Footer/>
      </main>
    </div>
  );
};

export default Home;
