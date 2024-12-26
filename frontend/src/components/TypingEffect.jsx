import React, { useState, useEffect } from 'react';
import './TypingEffect.css';  

const TypingEffect = () => {
  const lines = [
    "Hi There...!",
    "I'm Yash Ghavghave...",
    "Welcome to my portfolio! "
  ];

  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isErasing, setIsErasing] = useState(false);

  useEffect(() => {

    let timeout;
    if (!isErasing && currentText.length < lines[currentLineIndex].length) {
      timeout = setTimeout(() => {
        setCurrentText((prev) => prev + lines[currentLineIndex][prev.length]);
      }, 100); 
    } else if (isErasing && currentText.length > 0) {
      timeout = setTimeout(() => {
        setCurrentText((prev) => prev.slice(0, -1));
      }, 50); 
    } else if (currentText.length === lines[currentLineIndex].length && !isErasing) {
      timeout = setTimeout(() => {
        setIsErasing(true);
      }, 2000); 
    } else if (currentText.length === 0 && isErasing) {
      timeout = setTimeout(() => {
        setIsErasing(false);
        setCurrentLineIndex((prevIndex) => (prevIndex + 1) % lines.length); 
      }, 1000); 
    }

    return () => clearTimeout(timeout);
  }, [currentText, isErasing, currentLineIndex, lines]);

  return (
<div
  id="text"
  className="items-center text-white absolute top-[25vh] left-[50%]
             flex 
             max-lg:top-[55%] 
             max-md:left-[7vw] max-lg:left-[28vw]
             lg:left-auto lg:right-[4vw] lg:translate-x-0 lg:top-[29vh]
             xl:left-[70%] xl:transform xl:-translate-x-1/2">
      <div className="text-center max-2xl:text-2xl text-4xl font-mono overflow-hidden relative">
        <span className="inline-block">{currentText}</span>
      <br/>
      <br/>
        <hr/>
        <br/>
        <h2>
          You can connect me here

          <a href='https://www.linkedin.com/in/yash-ghavghave-3b0782262/?originalSubdomain=in' target='_blank' className='text-blue-500'> <br/><br/>Linked_in</a>
          <a href='https://github.com/YashGhavghave' target='_blank' className='text-white'> <br/><br/>GitHub</a>
          <a href='https://www.reddit.com/user/Nearby_Professor_251/' target='_blank' className='text-red-500'> <br/><br/>Reddit</a>
          <a href='https://www.cloudskillsboost.google/public_profiles/7332cd94-bc1e-4027-a515-bf5a26bd3fd1' target='_blank' className='text-yellow-500'> <br/><br/>Google Cloud</a>
          {/* <a href='https://www.linkedin.com/in/yash-ghavghave-3b0782262/?originalSubdomain=in' target='_blank' className='text-blue-500'> <br/><br/>Linked_in</a> */}
        </h2>
        {/* <span className="absolute right-0 top-0 border-r-4 border-Transparent animate-blink"></span> */}
      </div>
    </div>
  );
};

export default TypingEffect;
