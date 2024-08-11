// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Quote from './components/Quote';
import Footer from './components/Footer';
import Blog from './components/Blog';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Quote />
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <About />
              <Portfolio />
              <Contact />
            </>
          } />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
