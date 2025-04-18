
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-2xl font-bold text-gray-900 flex items-center">
            <span className="bg-gradient-to-r from-brand-purple to-brand-purple-dark bg-clip-text text-transparent">MeetingMind</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-700 hover:text-brand-purple transition-colors">Features</a>
          <a href="#benefits" className="text-gray-700 hover:text-brand-purple transition-colors">Benefits</a>
          <a href="#testimonials" className="text-gray-700 hover:text-brand-purple transition-colors">Testimonials</a>
          <Button className="bg-brand-purple hover:bg-brand-purple-dark text-white">
            Join Waitlist
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 hover:text-brand-purple"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <a 
              href="#features" 
              className="text-gray-700 hover:text-brand-purple transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#benefits" 
              className="text-gray-700 hover:text-brand-purple transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Benefits
            </a>
            <a 
              href="#testimonials" 
              className="text-gray-700 hover:text-brand-purple transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <Button 
              className="bg-brand-purple hover:bg-brand-purple-dark text-white w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              Join Waitlist
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
