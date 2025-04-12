
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar = ({ scrolled }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-xl font-bold bg-gradient-to-r from-brand-blue to-brand-royal bg-clip-text text-transparent">
              InfluenceMatch
            </h1>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li><a href="#how-it-works" className="text-gray-700 hover:text-brand-blue transition">How It Works</a></li>
              <li><a href="#for-brands" className="text-gray-700 hover:text-brand-blue transition">For Brands</a></li>
              <li><a href="#for-creators" className="text-gray-700 hover:text-brand-blue transition">For Creators</a></li>
            </ul>
          </nav>
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-brand-blue hover:text-brand-royal">
              Log In
            </Button>
            <Button className="bg-gradient-to-r from-brand-blue to-brand-royal text-white hover:from-brand-royal hover:to-brand-sky transition-all" onClick={() => navigate('/business-dashboard')}>
              Sign Up
            </Button>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-brand-blue focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <a href="#how-it-works" className="block px-3 py-2 text-gray-700 hover:text-brand-blue" onClick={() => setIsMenuOpen(false)}>
              How It Works
            </a>
            <a href="#for-brands" className="block px-3 py-2 text-gray-700 hover:text-brand-blue" onClick={() => setIsMenuOpen(false)}>
              For Brands
            </a>
            <a href="#for-creators" className="block px-3 py-2 text-gray-700 hover:text-brand-blue" onClick={() => setIsMenuOpen(false)}>
              For Creators
            </a>
            <div className="flex flex-col space-y-2 pt-4">
              <Button variant="ghost" className="w-full text-brand-blue justify-center">
                Log In
              </Button>
              <Button 
                className="w-full bg-gradient-to-r from-brand-blue to-brand-royal text-white hover:from-brand-royal hover:to-brand-sky transition-all"
                onClick={() => {
                  navigate('/business-dashboard');
                  setIsMenuOpen(false);
                }}
              >
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
