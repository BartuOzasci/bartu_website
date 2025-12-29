// src/features/Typewriter.jsx
import React from 'react';
import TypewriterEffect from 'typewriter-effect';
import { heroData } from '../storage/data'; // Veriyi buradan çekiyoruz

const Typewriter = () => {
  return (
    <div className="hero-typewriter d-flex justify-content-center gap-2">
      <TypewriterEffect
        options={{
          strings: heroData.titles,
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
          delay: 75,
          wrapperClassName: 'typewriter-text',
          cursorClassName: 'typewriter-cursor',
        }}
      />
    </div>
  );
};

export default Typewriter;
