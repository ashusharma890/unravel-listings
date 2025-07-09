import { useState, useEffect, useMemo } from "react";

const useInViewMedia = (ref) => {
  const [isVisible, setIsVisible] = useState(false);

  const options = useMemo(() => ({
    root: null, // viewport
    rootMargin: '0px',
    threshold: 0.5, // Element must be 50% in view
  }), []);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);

    // Capture the current ref value in a variable.
    // This variable will be stable throughout the lifetime of this specific effect run.
    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      // Use the captured 'currentRef' here.
      // This ensures you're referring to the same DOM node that was observed.
      if (currentRef) {
        observer.disconnect();
      }
    };
  }, [ref, options]); // 'ref' is still a dependency because observer.observe/disconnect needs it initially

  return isVisible;
};

export default useInViewMedia;