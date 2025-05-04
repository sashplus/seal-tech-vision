
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navLinks = [
    { title: "Solutions", href: "#solutions" },
    { title: "Technology", href: "#technology" },
    { title: "Why VeroSeal", href: "#why-veroseal" },
    { title: "Case Studies", href: "#case-studies" },
    { title: "About Us", href: "#about" },
    { title: "News", href: "#news" },
    { title: "Contact", href: "#contact" }
  ];
  
  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-8",
      isScrolled ? "bg-white/95 shadow-md backdrop-blur-sm py-2" : "bg-transparent py-4"
    )}>
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-veroseal-blue">
            Vero<span className="text-veroseal-accent">Seal</span>
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link, index) => (
            <a 
              key={index}
              href={link.href}
              className={cn(
                "text-sm font-medium hover:text-veroseal-accent transition-colors relative",
                "after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0",
                "after:bg-veroseal-accent after:origin-bottom-right after:transition-transform after:duration-300",
                "hover:after:scale-x-100 hover:after:origin-bottom-left",
                isScrolled ? "text-veroseal-blue" : "text-white"
              )}
            >
              {link.title}
            </a>
          ))}
          <Button className="ml-4 bg-veroseal-accent hover:bg-veroseal-blue text-white">
            Request Demo
          </Button>
        </nav>
        
        <button 
          className="md:hidden text-veroseal-blue"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg p-4 flex flex-col gap-4">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-veroseal-blue py-2 px-4 hover:bg-gray-100 rounded"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.title}
            </a>
          ))}
          <Button className="bg-veroseal-accent hover:bg-veroseal-blue text-white mt-2">
            Request Demo
          </Button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
