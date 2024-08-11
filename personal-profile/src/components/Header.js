// src/components/Header.js
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <h1>Bernard Nketia Acheampong</h1>
      <p>Software Engineer & Analytical Chemist</p>
      <div className="star" style={{ top: '10%', left: '20%' }}></div>
      <div className="star" style={{ top: '30%', left: '50%' }}></div>
      <div className="star" style={{ top: '60%', left: '70%' }}></div>
      <div className="star" style={{ top: '40%', left: '80%' }}></div>
      <div className="star" style={{ top: '70%', left: '10%' }}></div>
    </header>
  );
};

export default Header;
