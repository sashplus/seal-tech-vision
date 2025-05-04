
import React, { useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const SolutionsSection = () => {
  useEffect(() => {
    const handleScroll = () => {
      const revealElements = document.querySelectorAll('.reveal-on-scroll');
      revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight - 100) {
          element.classList.add('revealed');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const solutions = [
    {
      title: "Tobacco Industry Solutions",
      description: "Comprehensive security seals that comply with global tobacco regulations while protecting your brand from counterfeiting.",
      icon: "🚬",
      features: ["Tax stamp integration", "Anti-counterfeiting measures", "Track & trace compatibility", "Tamper-evident design"]
    },
    {
      title: "Government Compliance",
      description: "Seal solutions that help governments protect tax revenue and enforce regulatory standards in the tobacco sector.",
      icon: "🏛️",
      features: ["Revenue protection", "Regulatory compliance", "Supply chain visibility", "Authentication tools"]
    },
    {
      title: "Brand Protection",
      description: "Advanced sealing technology that preserves brand integrity and helps combat illicit trade in tobacco products.",
      icon: "🛡️",
      features: ["Visual authentication", "Covert security features", "Digital verification", "Consumer engagement"]
    }
  ];
  
  return (
    <section id="solutions" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 reveal-on-scroll">
          <span className="text-veroseal-accent font-medium">Our Solutions</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Comprehensive Security for Tobacco Products</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Our security seal technologies are specifically designed to meet the unique challenges facing the tobacco industry.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <Card key={index} className="tech-card reveal-on-scroll" style={{transitionDelay: `${index * 100}ms`}}>
              <CardContent className="p-6">
                <div className="text-3xl mb-4">{solution.icon}</div>
                <h3 className="text-xl font-bold mb-3">{solution.title}</h3>
                <p className="text-gray-600 mb-4">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <svg className="h-5 w-5 text-veroseal-accent mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a 
                  href="#" 
                  className="inline-block mt-6 text-veroseal-accent hover:text-veroseal-blue font-medium text-sm"
                >
                  Learn More →
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center reveal-on-scroll">
          <a href="#" className="button-primary inline-flex items-center">
            View All Solutions
            <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
