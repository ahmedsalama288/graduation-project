import { useEffect, useState, RefObject } from "react";

interface IntersectionOptions {
  threshold?: number | number[];
  rootMargin?: string;
  root?: Element | null;
}
const useInView = (
  elementRef: RefObject<Element | null>,
  options: IntersectionOptions = {}
) => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    const observer = new IntersectionObserver(([entry]) => {
      setInView(entry.isIntersecting);
      if (entry.isIntersecting) observer.unobserve(entry.target);
    }, options);

    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [elementRef, options]);

  return inView;
};

export default useInView;
