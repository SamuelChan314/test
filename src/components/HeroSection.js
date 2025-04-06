'use client';

import { useEffect, useRef } from 'react';

export default function HeroSection() {
  const typingRef = useRef(null);
  
  useEffect(() => {
    if (typingRef.current) {
      const text = "Chemistry Student & Researcher";
      let i = 0;
      const typingEffect = setInterval(() => {
        if (i < text.length) {
          typingRef.current.textContent += text.charAt(i);
          i++;
        } else {
          clearInterval(typingEffect);
        }
      }, 100);
      
      return () => clearInterval(typingEffect);
    }
  }, []);

  return (
    <section className="relative h-screen flex items-center bg-gradient-to-r from-primary to-secondary overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, index) => (
          <div 
            key={index}
            className="absolute rounded-full bg-white opacity-10"
            style={{
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 15}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6 md:pr-12">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Hi, I'm Ceanna Cheung
            </h1>
            <div className="h-1 w-24 bg-white"></div>
            <h2 className="text-2xl md:text-3xl font-medium">
              <span ref={typingRef} className="inline-block"></span>
              <span className="animate-pulse">|</span>
            </h2>
            <p className="text-lg md:text-xl">
              University of Alberta | Year 4 Chemistry Student
            </p>
            <p className="text-lg">
              Passionate about applying chemistry knowledge to solve real-world problems
              and contribute to sustainable industrial practices.
            </p>
            <div className="pt-4 flex space-x-4">
              <a 
                href="#about" 
                className="px-6 py-3 bg-white text-primary font-medium rounded-md hover:bg-offWhite transition duration-300"
              >
                About Me
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 border-2 border-white text-white font-medium rounded-md hover:bg-white hover:text-primary transition duration-300"
              >
                Contact
              </a>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="relative w-80 h-80 mx-auto">
              <div className="absolute inset-0 bg-white rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute inset-4 bg-white rounded-full opacity-30"></div>
              <div className="absolute inset-8 bg-white rounded-full opacity-40"></div>
              <div className="absolute inset-12 bg-white rounded-full overflow-hidden border-4 border-white">
                {/* Placeholder for profile image */}
                <div className="w-full h-full bg-lightGray flex items-center justify-center">
                  <span className="text-primary text-lg font-medium">Profile Photo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-center">
        <p className="mb-2">Scroll Down</p>
        <div className="w-6 h-10 border-2 border-white rounded-full mx-auto relative">
          <div className="w-2 h-2 bg-white rounded-full absolute top-2 left-1/2 transform -translate-x-1/2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}
