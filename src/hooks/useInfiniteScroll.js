import { useEffect } from "react";

const useInfiniteScroll = (ref, callback) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) callback();
      },
      { threshold: 1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, callback]);
};

export default useInfiniteScroll;
