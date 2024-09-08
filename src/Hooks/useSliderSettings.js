import { useState, useEffect } from 'react';

const useSliderSettings = ({initialFastDuration:fast, initialSlowDuration:slow}) => {
  const [duration, setDuration] = useState({
    fastDuration: fast,
    slowDuration: slow,
  });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
        setDuration({
          fastDuration: fast + 25,
          slowDuration: slow + 25,
        });
      } else {
        setIsMobile(false);
        setDuration({
          fastDuration: fast,
          slowDuration: slow,
        });
      }
    };

    handleResize(); // Initial check on mount
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [fast, slow]);

  return { duration, isMobile };
};

export default useSliderSettings;