"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import './index.css'; // Import the CSS file

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="header-container">
      <div className="logo">Better.com</div>
      <div className="menu-icon" onClick={toggleMenu}>
        ☰
      </div>
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <Link href="/">Home</Link>
        <Link href="/about-us">About Us</Link>
        <Link href="/mortgage-calculator">Mortgage Calculator</Link>
        <Link href="/start">Get Started</Link>
      </div>
    </div>
  );
};

export default Header;
