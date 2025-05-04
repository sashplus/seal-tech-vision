
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';

const TechnologySection = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);
  
  const technologies = [
    {
      id: "microstructures",
      name: "Microstructure Technology",
      description: "Our proprietary microstructure technology creates unique patterns at the microscopic level that are impossible to duplicate.",
      features: [
        "Multi-level security features",
        "Microscopic patterns unique to each seal",
        "Nano-scale precision manufacturing",
        "Tamper-evident response"
      ]
    },
    {
      id: "digital",
      name: "Digital Integration",
      description: "Connect physical seals with our secure digital backend for real-time tracking, authentication, and data analysis.",
      features: [
        "Secure cloud-based tracking",
        "Real-time authentication",
        "Mobile app verification",
        "API integration with existing systems"
      ]
    },
    {
      id: "authentication",
      name: "Multi-Factor Authentication",
      description: "Combine multiple verification methods for enhanced security, from visual inspection to smartphone-based digital verification.",
      features: [
        "QR code verification",
        "NFC technology compatibility",
        "UV/IR response layers",
        "Holographic elements"
      ]
    }
  ];
  
  return (
    <section id="technology" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12 reveal-on-scroll">
          <span className="text-veroseal-accent font-medium">Our Technology</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Advanced Security Features</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            VeroSeal combines cutting-edge physical security with digital authentication to create truly secure, multi-layered protection.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue="microstructures" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              {technologies.map((tech) => (
                <TabsTrigger 
                  key={tech.id} 
                  value={tech.id}
                  className="data-[state=active]:bg-veroseal-blue data-[state=active]:text-white"
                >
                  {tech.name}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {technologies.map((tech) => (
              <TabsContent key={tech.id} value={tech.id} className="mt-4">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">{tech.name}</h3>
                    <p className="text-gray-600 mb-6">{tech.description}</p>
                    <ul className="space-y-3 mb-6">
                      {tech.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="flex-shrink-0 mt-1">
                            <div className="h-5 w-5 rounded-full bg-veroseal-accent flex items-center justify-center text-white text-xs font-bold">
                              {idx + 1}
                            </div>
                          </div>
                          <span className="ml-3">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button className="button-outline">Learn More</button>
                  </div>
                  
                  <Card className="overflow-hidden p-1 border-2 border-gray-200 shadow-lg">
                    {/* Placeholder for tech visualization */}
                    <div className="aspect-video bg-gradient-to-br from-veroseal-blue to-veroseal-accent/40 rounded flex items-center justify-center">
                      <div className="text-white text-xl font-medium">
                        {tech.name} Visualization
                      </div>
                    </div>
                  </Card>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 reveal-on-scroll">
          <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
            <div className="h-12 w-12 rounded-lg bg-veroseal-blue/10 text-veroseal-blue flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-2">Tamper-Evident Design</h3>
            <p className="text-gray-600 text-sm">
              Security seals that visibly and permanently show evidence of any tampering attempts, ensuring product integrity.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
            <div className="h-12 w-12 rounded-lg bg-veroseal-blue/10 text-veroseal-blue flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-2">Multi-Layer Security</h3>
            <p className="text-gray-600 text-sm">
              Multiple security features in each seal work together to create a robust defense against counterfeiting attempts.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
            <div className="h-12 w-12 rounded-lg bg-veroseal-blue/10 text-veroseal-blue flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-2">Digital Authentication</h3>
            <p className="text-gray-600 text-sm">
              Verify authenticity in seconds with our smartphone-based digital authentication tools and secure cloud database.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
