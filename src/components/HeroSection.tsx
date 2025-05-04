
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleParallax = () => {
      if (!heroRef.current) return;
      const scrollPosition = window.scrollY;
      const parallaxElements = heroRef.current.querySelectorAll('.parallax');
      
      parallaxElements.forEach((element) => {
        const speed = parseFloat((element as HTMLElement).dataset.speed || '0.2');
        (element as HTMLElement).style.transform = `translateY(${scrollPosition * speed}px)`;
      });
    };
    
    window.addEventListener('scroll', handleParallax);
    return () => window.removeEventListener('scroll', handleParallax);
  }, []);
  
  return (
    <div ref={heroRef} className="relative min-h-screen flex items-center text-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-gradient">
        {/* Tech pattern overlay */}
        <div className="absolute inset-0 opacity-10 bg-[url('/src/assets/circuit-pattern.png')] bg-repeat"></div>
        
        {/* Abstract elements */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-veroseal-blue/20 blur-3xl parallax" data-speed="0.1"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 rounded-full bg-veroseal-accent/10 blur-3xl parallax" data-speed="0.2"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Advanced Security Seals for the Tobacco Industry
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl">
            Protect your products with tamper-evident, anti-counterfeiting security seals backed by cutting-edge technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-veroseal-accent hover:bg-white hover:text-veroseal-blue text-lg font-medium"
            >
              Request Demo <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-veroseal-blue text-lg font-medium"
            >
              Explore Solutions
            </Button>
          </div>
          
          {/* Trust badges */}
          <div className="mt-16 flex flex-wrap gap-8 items-center">
            <div className="text-sm text-gray-300 font-medium">Trusted by industry leaders:</div>
            <div className="flex flex-wrap gap-6 md:gap-10">
              <div className="opacity-80 hover:opacity-100 transition-opacity">
                <div className="h-8 w-24 bg-white/20 rounded flex items-center justify-center">
                  Company 1
                </div>
              </div>
              <div className="opacity-80 hover:opacity-100 transition-opacity">
                <div className="h-8 w-24 bg-white/20 rounded flex items-center justify-center">
                  Company 2
                </div>
              </div>
              <div className="opacity-80 hover:opacity-100 transition-opacity">
                <div className="h-8 w-24 bg-white/20 rounded flex items-center justify-center">
                  Company 3
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-gray-300 mb-2">Scroll Down</span>
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
