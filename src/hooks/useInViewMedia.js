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
    }, options); // 'options' should be passed in or defined when calling useInViewMedia

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref, options]); // Added options to dependency array to re-create observer if options change

  return isVisible;
};


export default useInViewMedia;

