
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const CaseStudySection = () => {
  return (
    <section id="case-studies" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12 reveal-on-scroll">
          <span className="text-veroseal-accent font-medium">Success Stories</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Case Studies</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            See how our solutions have helped protect revenue and combat counterfeiting in the tobacco industry.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="mb-12 overflow-hidden reveal-on-scroll">
            <div className="grid md:grid-cols-5">
              <div className="md:col-span-2 bg-veroseal-blue text-white p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2">National Tobacco Control Program</h3>
                  <p className="text-gray-300 text-sm mb-4">
                    Government of Eastern European Country
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-white/10 rounded text-xs">Tax Stamps</span>
                    <span className="px-2 py-1 bg-white/10 rounded text-xs">Anti-Counterfeiting</span>
                    <span className="px-2 py-1 bg-white/10 rounded text-xs">Track & Trace</span>
                  </div>
                </div>
                <div className="mt-4">
                  <a href="#" className="text-veroseal-accent hover:text-white text-sm font-medium flex items-center">
                    Read Full Case Study
                    <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="md:col-span-3 p-6 md:p-8">
                <div className="mb-4">
                  <div className="flex items-baseline gap-4 mb-2">
                    <div className="text-lg font-bold">Challenge</div>
                    <div className="flex-grow h-px bg-gray-200"></div>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Widespread illicit trade in tobacco products was causing significant tax revenue losses for the government, estimated at €100 million annually.
                  </p>
                </div>
                
                <div className="mb-4">
                  <div className="flex items-baseline gap-4 mb-2">
                    <div className="text-lg font-bold">Solution</div>
                    <div className="flex-grow h-px bg-gray-200"></div>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Implementation of VeroSeal's comprehensive tobacco tax stamp program with multi-level security features and digital authentication system.
                  </p>
                </div>
                
                <div>
                  <div className="flex items-baseline gap-4 mb-2">
                    <div className="text-lg font-bold">Results</div>
                    <div className="flex-grow h-px bg-gray-200"></div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-veroseal-blue">62%</div>
                      <p className="text-xs text-gray-500">Reduction in Illicit Trade</p>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-veroseal-blue">€56M</div>
                      <p className="text-xs text-gray-500">Recovered Revenue</p>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-veroseal-blue">18 mo</div>
                      <p className="text-xs text-gray-500">Implementation Time</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
          
          <div className="text-center mt-8 reveal-on-scroll">
            <a href="#" className="button-outline inline-flex items-center">
              View More Case Studies
              <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
