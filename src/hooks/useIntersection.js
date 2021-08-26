import { useEffect, useRef, useState } from 'react';

export const useIntersection = () => {
  const sentinelRef = useRef(null)

  const [inView, setInView] = useState(false)

  useEffect(() => {
    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (sentinelRef.current) {
          setInView(entry.isIntersecting)
        }
      });
    };
    const observer = new IntersectionObserver(callback, {});
    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }
    return () => {
      observer.unobserve(sentinelRef.current);
    }
  }, [])

  return [sentinelRef, inView]
}
