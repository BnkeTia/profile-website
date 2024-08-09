// src/components/Quote.js
import React, { useEffect, useState } from 'react';
import './Quote.css';

const quotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Life is what happens when you're busy making other plans. - John Lennon",
  "Get busy living or get busy dying. - Stephen King",
  "You have within you right now, everything you need to deal with whatever the world can throw at you. - Brian Tracy",
  "Believe you can and you're halfway there. - Theodore Roosevelt"
];

const Quote = () => {
  const [currentQuote, setCurrentQuote] = useState('');

  useEffect(() => {
    const displayQuote = () => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setCurrentQuote(quotes[randomIndex]);
    };

    displayQuote();
    const interval = setInterval(displayQuote, 5000);

    return () => clearInterval(interval);
  }, []);

  return <div className="quote">{currentQuote}</div>;
};

export default Quote;
