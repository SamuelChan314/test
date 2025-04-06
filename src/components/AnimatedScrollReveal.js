'use client';

import { useEffect } from 'react';

export default function AnimatedScrollReveal() {
  useEffect(() => {
    // Simple scroll reveal animation
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-reveal');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Target all elements with the reveal class
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(element => {
      observer.observe(element);
    });

    return () => {
      revealElements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  return null; // This is a utility component that doesn't render anything
}
