import React, { useState, useEffect } from 'react';
import '../styles/ScrollToTop.css';

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) { 
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className={`scroll-to-top ${visible ? 'visible' : ''}`} onClick={scrollToTop}>
      ↑
    </div>
  );
};

export default ScrollToTop;
