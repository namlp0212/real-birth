import React, { useEffect, useState } from 'react';
import './AnimatedText.css';

const AnimatedText = ({ text }) => {
    const [letters, setLetters] = useState([]);
  
    useEffect(() => {
      const textArray = text.split('');
      setLetters(textArray);
    }, [text]);
  
    return (
      <div className="text-container">
        {letters.map((letter, index) => (
          <span key={index} className="letter" style={{ animationDelay: `${index * 0.03}s` }}>
            {letter === ' ' ? '\u00A0' : letter}
          </span>
        ))}
      </div>
    );
  };

export default AnimatedText;