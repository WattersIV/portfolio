import { useState, useEffect } from 'react'

export const useIntersection = (element: any, rootMargin: any) => {
    const [isVisible, setState] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                setState(entry.isIntersecting);
                observer.unobserve(element.current);
            }
        }, { rootMargin }
        );
        element && observer.observe(element);

        return () => observer.unobserve(element);
    }, []);

    return isVisible;
};