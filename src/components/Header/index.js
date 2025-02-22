"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import './index.css'; // Import the CSS file
import {IoIosCall} from 'react-icons/io'
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="header-container">
      <div className="logo">Better.com</div>
      <div className="menu-icon" onClick={toggleMenu}>
        <div className='' style={{ display: "flex", alignItems: "center" }}>
          <button className='btn'>
          ☰
          </button>

          <div className='call-row'>
            <div className='call-round'>
              <IoIosCall/>
            </div>
            <button className='sign-in-btn'>
              sign in
            </button>
          </div>
        </div>
      </div>
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <Link href="/">Home</Link>
        <Link href="/about-us">About Us</Link>
        <Link href="/mortgage-calculator">Mortgage Calculator</Link>
        <Link href="/start">Get Started</Link>
      </div>
      <div className='call-row2'>
          <div className='call-round'>
             <IoIosCall/>
          </div>
          <button className='sign-in-btn'>
            sign in
          </button>
      </div>
    </div>
  );
};

export default Header;
