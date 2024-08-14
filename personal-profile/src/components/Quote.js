// src/components/Quote.js
import React, { useEffect, useState } from 'react';
import './Quote.css';

const quotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Life is what happens when you're busy making other plans. - John Lennon",
  "Get busy living or get busy dying. - Stephen King",
  "You have within you right now, everything you need to deal with whatever the world can throw at you. - Brian Tracy",
  "I'm gon be forever steppin forwards'. - Lil Baby",
  "Change is a gradual evolution, we do not change by snapping our fingers and deciding to be someone entirely new. - Atomic Habits",
  "we change bit by bit, habit by habit. We are continually undegoing microevolutions of the self. - James Clear",
  "Hell is other people. - Jean Paul Satre",
  "The process of building habits is actually the process of becoming yourself. - James Clear",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "Work harder on yourself, than you do on your job. - Jim Rohn"
];

const Quote = () => {
  const [currentQuote, setCurrentQuote] = useState('');

  useEffect(() => {
    const displayQuote = () => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setCurrentQuote(quotes[randomIndex]);
    };

    displayQuote();
    const interval = setInterval(displayQuote, 8000);

    return () => clearInterval(interval);
  }, []);

  return <div className="quote">{currentQuote}</div>;
};

export default Quote;
