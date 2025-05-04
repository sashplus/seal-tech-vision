
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-veroseal-blue text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & About */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">
              Vero<span className="text-veroseal-accent">Seal</span>
            </h2>
            <p className="text-gray-300 text-sm">
              Leading provider of advanced security seal solutions for the tobacco industry, 
              helping brands and governments protect revenue and combat counterfeiting.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-300 hover:text-veroseal-accent">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-veroseal-accent">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#solutions" className="text-gray-300 hover:text-veroseal-accent text-sm">Solutions</a></li>
              <li><a href="#technology" className="text-gray-300 hover:text-veroseal-accent text-sm">Technology</a></li>
              <li><a href="#why-veroseal" className="text-gray-300 hover:text-veroseal-accent text-sm">Why VeroSeal</a></li>
              <li><a href="#case-studies" className="text-gray-300 hover:text-veroseal-accent text-sm">Case Studies</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-veroseal-accent text-sm">About Us</a></li>
            </ul>
          </div>
          
          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li><a href="#tobacco" className="text-gray-300 hover:text-veroseal-accent text-sm">Tobacco Industry</a></li>
              <li><a href="#" className="text-gray-300 hover:text-veroseal-accent text-sm">Government & Regulation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-veroseal-accent text-sm">Brand Protection</a></li>
              <li><a href="#" className="text-gray-300 hover:text-veroseal-accent text-sm">Supply Chain Security</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <address className="not-italic text-sm">
              <p className="text-gray-300 mb-2">
                VeroSeal Technologies<br />
                1234 Security Avenue<br />
                New York, NY 10001
              </p>
              <p className="text-gray-300 mb-2">
                <span className="font-medium text-white">Email:</span><br />
                <a href="mailto:info@veroseal.com" className="hover:text-veroseal-accent">
                  info@veroseal.com
                </a>
              </p>
              <p className="text-gray-300">
                <span className="font-medium text-white">Phone:</span><br />
                <a href="tel:+12345678900" className="hover:text-veroseal-accent">
                  +1 (234) 567-8900
                </a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row md:justify-between">
          <p className="text-gray-400 text-sm">
            © 2025 VeroSeal Technologies. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-veroseal-accent text-sm">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-400 hover:text-veroseal-accent text-sm">Terms of Service</Link>
            <Link to="/cookies" className="text-gray-400 hover:text-veroseal-accent text-sm">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
