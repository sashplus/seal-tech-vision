
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const WhyVeroSealSection = () => {
  const benefits = [
    {
      title: "Protect Tax Revenue",
      icon: "💰",
      description: "Help governments secure their tax revenue by preventing illicit trade in tobacco products."
    },
    {
      title: "Eliminate Counterfeits",
      icon: "🛑",
      description: "Our multi-layered security features make counterfeiting virtually impossible."
    },
    {
      title: "Supply Chain Compliance",
      icon: "📦",
      description: "Ensure your entire supply chain meets regulatory requirements while improving traceability."
    },
    {
      title: "Consumer Protection",
      icon: "👥",
      description: "Protect consumers from potentially dangerous counterfeit tobacco products."
    }
  ];
  
  return (
    <section id="why-veroseal" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 reveal-on-scroll">
          <span className="text-veroseal-accent font-medium">Why Choose VeroSeal</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">The VeroSeal Advantage</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Our solutions provide comprehensive protection against counterfeiting while ensuring regulatory compliance.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image side */}
          <div className="reveal-on-scroll">
            <div className="relative">
              <div className="absolute -inset-4 bg-veroseal-accent/10 rounded-lg transform -rotate-3"></div>
              <div className="relative bg-gradient-to-br from-veroseal-blue to-veroseal-charcoal rounded-lg overflow-hidden aspect-square flex items-center justify-center">
                <div className="text-white text-2xl font-bold text-center p-8">
                  Product Visualization<br />
                  <span className="text-sm font-normal block mt-2">
                    (Placeholder for product image)
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content side */}
          <div className="space-y-8">
            <div className="reveal-on-scroll">
              <h3 className="text-2xl font-bold mb-4">Benefits for the Tobacco Industry</h3>
              <p className="text-gray-600 mb-6">
                VeroSeal provides comprehensive solutions that help tobacco manufacturers comply with regulations while protecting their brands and revenue.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, idx) => (
                  <Card key={idx} className="border-l-4 border-l-veroseal-accent shadow-sm">
                    <CardContent className="p-4">
                      <div className="text-2xl mb-2">{benefit.icon}</div>
                      <h4 className="font-bold mb-1">{benefit.title}</h4>
                      <p className="text-sm text-gray-600">{benefit.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            <div className="reveal-on-scroll pt-4">
              <h4 className="font-bold mb-2">Why Our Customers Choose Us</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-veroseal-accent mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Comprehensive security solutions tailored for tobacco products</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-veroseal-accent mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Experienced team with deep industry knowledge</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-veroseal-accent mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Proven track record with major tobacco companies worldwide</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-veroseal-accent mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Continuous innovation in security technology</span>
                </li>
              </ul>
            </div>
            
            <div className="reveal-on-scroll pt-2">
              <a href="#contact" className="button-primary inline-block">
                Request Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyVeroSealSection;
