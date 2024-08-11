// src/App.js
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Quote from './components/Quote';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Quote />
      <Header />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
