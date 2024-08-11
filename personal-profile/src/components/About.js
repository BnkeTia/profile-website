import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <p>
        Hello! Call me BnkeTia or Dev4fun. I am a passionate Software Engineer and Analytical Chemist. I love combining technology and science to solve complex problems and create innovative solutions. I am currently interested in projects or roles
        that help me develop skills in the MERN stack to build Full stack solutions.
      </p>
      <Link to="/blog" className="blog-button">Visit My Blog</Link>
    </section>
  );
};

export default About;
