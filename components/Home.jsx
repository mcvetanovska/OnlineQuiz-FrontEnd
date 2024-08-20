import React from 'react';
import './Home.css';

const HomePage = () => {
  return (
    <div className="homepage">    
	  <div className="main-content">
        <h1>Improve Your Mind</h1>
        <p>
          Do you like quizzes and competitions? Find and take quizzes on any topic!
          Play, share, and study in one app.
        </p>
      </div>
	  <div className="svg-container">
        <img src={"/blob.svg"} alt="Decorative SVG" className="blob-svg" />
        <img src={"/4 SCENE.svg"} alt="Decorative SVG" className="bottom-right-svg" />
      </div>
    </div>
  );
};

export default HomePage;
