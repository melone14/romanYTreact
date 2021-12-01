import { useState, useEffect } from 'react';

export const useWindowSize = () => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleResize = () => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    document.addEventListener('resize', handleResize);

    return () => document.removeEventListener('resize', handleResize);
  }, []);

  return dimensions;
};
