import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
    return (
        <section id="portfolio" className="portfolio">
            <h2>Portfolio</h2>
            <div className="portfolio-item">
                <h3>Project 1</h3>
                <p>Light weight responsive Linux terminal for android</p>
                <a href="https://example.com/project1" target="_blank" rel="noopener noreferrer">Project not completed</a>
            </div>
            <div className="portfolio-item">
                <h3>Project 2</h3>
                <p>Daavi Special Restaurant Website</p>
                <a href="https://daavispecial.vercel.app" target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
            <div className="portfolio-item">
                <h3>Project 3</h3>
                <p>SneakPik, A pic sharing chatapp</p>
                <a href="https://example.com/project3" target="_blank" rel="noopener noreferrer">Project not completed</a>
            </div>
        </section>
    );
};

export default Portfolio;
