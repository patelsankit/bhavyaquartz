"use client"

import { useEffect, useState, useRef } from 'react';

interface CounterProps {
  endValue: number;
  duration: number;
}

export default function Counter({ endValue, duration }: CounterProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (counterRef.current) {
            observer.unobserve(counterRef.current); // Unobserve after it's visible to avoid re-triggering
          }
        }
      },
      {
        threshold: 0.5, // Adjust this value based on when you want to trigger the counter (0.5 means halfway visible)
      }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const increment = endValue / (duration / 10);

    const counterInterval = setInterval(() => {
      start += increment;
      if (start >= endValue) {
        start = endValue;
        clearInterval(counterInterval);
      }
      setCount(Math.floor(start));
    }, 10);

    return () => clearInterval(counterInterval);
  }, [isVisible, endValue, duration]);

  return (
    <div ref={counterRef} className="text-4xl font-bold text-center">
      {count}+
    </div>
  );
}
