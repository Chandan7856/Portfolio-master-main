import React, { useState, useEffect } from 'react';

const Data = () => {
  const [isAnimating, setIsAnimating] = useState(true);
  
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const originalText = "Chandan Kumar";
  const [displayText, setDisplayText] = useState(originalText);

  useEffect(() => {
    let interval = null;
    let iteration = 0;
    
    if (isAnimating) {
      interval = setInterval(() => {
        setDisplayText(prev => {
          return prev
            .split("")
            .map((letter, index) => {
              if (index < iteration) {
                return originalText[index];
              }
              
              if (letter === " ") return " ";
              return letters[Math.floor(Math.random() * 26)];
            })
            .join("");
        });

        iteration += 1/3;
        
        if (iteration >= originalText.length) {
          clearInterval(interval);
          setIsAnimating(false);
          setDisplayText(originalText);
        }
      }, 30);
    }

    return () => clearInterval(interval);
  }, [isAnimating]);

  const handleHover = () => {
    setIsAnimating(true);
  };

  return (
    <div className="home__data">
      <h1 
        className="home__title font-bold"
        onMouseEnter={handleHover}
        style={{
          fontFamily: 'monospace',
          cursor: 'pointer',
          transition: 'all 0.25s',
          textShadow: isAnimating ? '0 0 8px rgba(0,0,0,0.3)' : 'none'
        }}
      >
        {displayText}
        {/* SVG SAME */}
      </h1>

      <h3 className="home__subtitle">Full Stack Developer</h3>

      <p className="home__description">
        I am a Full Stack Developer and B.Tech CSE student, passionate about building scalable web applications and solving real-world problems using modern technologies.
      </p>

      <a href="#contact" className="button button--flex">
        Say Hello
        {/* SVG SAME */}
      </a>
    </div>
  );
};

export default Data;