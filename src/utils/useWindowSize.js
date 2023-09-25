import React from 'react';

export default function useWindowSize() {
  const [windowSize, setWindowSize] = React.useState({
    width: 1360,
    height: 800,
  });

  function handleResize() {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      handleResize();
    }

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return windowSize;
}
