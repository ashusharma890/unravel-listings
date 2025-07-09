import { useState, useEffect, useMemo } from "react"; // Import useMemo

const useInViewMedia = (ref) => {
  const [isVisible, setIsVisible] = useState(false);

  // Memoize the options object so it's only recreated if its dependencies change.
  // In this case, there are no internal dependencies for options, so it's created once.
  const options = useMemo(() => ({
    root: null, // viewport
    rootMargin: '0px',
    threshold: 0.5, // Element must be 50% in view
  }), []); // Empty dependency array means this object is created only once on initial render

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) { // Check ref.current before disconnecting as it might be null on unmount
        observer.disconnect();
      }
    };
  }, [ref, options]); // 'options' is now a stable reference due to useMemo

  return isVisible;
};

export default useInViewMedia;