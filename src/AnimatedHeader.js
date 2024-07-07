import React, { useEffect, useState } from 'react';
import './AnimatedHeader.css';

const AnimatedHeader = ({ text }) => {
    const [letters, setLetters] = useState([]);
  
    useEffect(() => {
      const textArray = text.split('');
      setLetters(textArray);
    }, [text]);
  
    return (
      <div className="text-container-header">
        {letters.map((letter, index) => (
          <span key={index} className="letter" style={{ animationDelay: `${index * 0.03}s` }}>
            {letter === ' ' ? '\u00A0' : letter}
          </span>
        ))}
      </div>
    );
  };

export default AnimatedHeader;