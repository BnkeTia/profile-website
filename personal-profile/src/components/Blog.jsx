import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Blog.css';

const Blog = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Navigate to the previous page
  };

  return (
    <div className="blog">
      <h2>My Blog</h2>
      <section className="blog-section">
        <h3>Articles</h3>
        <ul>
          <li><a href="https://example.com/article1" target="_blank" rel="noopener noreferrer">Article 1</a></li>
          <li><a href="https://example.com/article2" target="_blank" rel="noopener noreferrer">Article 2</a></li>
        </ul>
      </section>
      <section className="blog-section">
        <h3>My Reading List</h3>
        <ul>
          <li>Rich Dad Poor Dad by Robert Kiyosaki - Done</li>
          <li>Atomic Habits by James Clear - Still reading...</li>
          <li>Think and Grow Rich by Napoleon Hill - Done(Re-reading)</li>
          <li>Stock Investing for Dummies by Paul Mladjenovic - Almost done</li>
          <li>Hustle Harder, Hustle Smarter by 50 Cent - Done</li>
          <li>1984 by George Orwell - Done (Favorite)</li>
	  <li>The Business of The 21st Century by Robert Kiyosaki - yet to read</li>
	  <li>Nausea by Jean Paul Satre - yet to read..</li>
	  <li>48 Laws of Power by Robert Greene - Done</li>
        </ul>
      </section>
      <section className="blog-section">
        <h3>Sports Teams I Follow</h3>
        <ul>
          <li>Manchester United</li>
          <li>Manchester United</li>
          <li>Manchester United</li>
        </ul>
      </section>
      <section className="blog-section">
        <h3>My Current Top Five Artiste Playlist</h3>
        <ul>
          <li>Rod Wave - Nostalgia Album</li>
          <li>Lil Baby - It's Only Me Album</li>
          <li>Polo G</li>
          <li>Kwesi Arthur</li>
          <li>YGA OKenneth</li>
        </ul>
      </section>
      <button className="go-back-button" onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default Blog;
