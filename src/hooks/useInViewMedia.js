import { useState, useEffect } from "react";  

const useInViewMedia = (ref) => {
  const [isVisible, setIsVisible] = useState(false);

  const options = {
    root: null, // viewport
    rootMargin: '0px',
    threshold: 0.5, // Element must be 50% in view
  };

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);

  return isVisible;
};

export default useInViewMedia;

