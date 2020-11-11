import { useEffect, useState } from "react";

const useObserver = (outerRef, threshold = 0.5) => {
  const [inViewport, setInViewport] = useState(false);

  useEffect(() => {
    const onChange = (entries) => {
      entries.forEach((entry) => {
        if (entry.target === outerRef.current)
          setInViewport(entry.isIntersecting);
      });
    };
    const observer = new IntersectionObserver(onChange, { threshold });
    observer.observe(outerRef.current);
  }, [outerRef, threshold]);

  return { inViewport };
};

export default useObserver;
