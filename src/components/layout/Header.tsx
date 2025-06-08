import React, { useState } from 'react';
import { Button } from '../../components/ui/Button';
// TODO: import needed icons from lucide-react when installed
// import { User, LogIn, UserPlus, PlusSquare } from 'lucide-react';

interface HeaderProps {
  isAuthenticated?: boolean;
}

const Header = ({ isAuthenticated = false }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-40 bg-gray-900 border-b border-gray-700">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="font-anton text-4xl md:text-5xl text-tradey-blue">
          TRADEY
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            href="#featured" 
            className="font-anton text-lg text-tradey-blue hover:text-white transition-colors"
          >
            PROIZVODI
          </a>
          
          {!isAuthenticated && (
            <div className="flex space-x-4">
              <Button 
                className="bg-tradey-blue hover:bg-blue-300 text-gray-900 font-anton px-6 py-3 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                {/* TODO: Add LogIn icon here */}
                PRIJAVI SE
              </Button>
              <Button 
                className="bg-red-700 hover:bg-red-800 text-white font-anton px-6 py-3 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                {/* TODO: Add UserPlus icon here */}
                REGISTRUJ SE
              </Button>
            </div>
          )}
          
          {isAuthenticated && (
            <div className="flex space-x-4">
              <Button 
                className="bg-tradey-blue hover:bg-blue-300 text-gray-900 font-anton px-6 py-3 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                {/* TODO: Add User icon here */}
                PROFIL
              </Button>
              <Button 
                className="bg-red-700 hover:bg-red-800 text-white font-anton px-6 py-3 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                {/* TODO: Add PlusSquare icon here */}
                + NOVI POST
              </Button>
            </div>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className={`w-6 h-0.5 bg-tradey-blue transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-0.5' : ''}`} />
          <div className={`w-6 h-0.5 bg-tradey-blue transition-all duration-300 mt-1 ${isMenuOpen ? 'opacity-0' : ''}`} />
          <div className={`w-6 h-0.5 bg-tradey-blue transition-all duration-300 mt-1 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-gray-800 transition-all duration-300 ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <nav className="container mx-auto px-4 py-6 space-y-6">
          <a href="#featured" className="block font-anton text-xl text-tradey-blue">
            PROIZVODI
          </a>
          
          {!isAuthenticated && (
            <div className="space-y-4 pt-4">
              <Button className="w-full bg-tradey-blue hover:bg-blue-300 text-gray-900 font-anton py-3 rounded-xl">
                {/* TODO: Add LogIn icon here */}
                PRIJAVI SE
              </Button>
              <Button className="w-full bg-red-700 hover:bg-red-800 text-white font-anton py-3 rounded-xl">
                {/* TODO: Add UserPlus icon here */}
                REGISTRUJ SE
              </Button>
            </div>
          )}
          
          {isAuthenticated && (
            <div className="space-y-4 pt-4">
              <Button className="w-full bg-tradey-blue hover:bg-blue-300 text-gray-900 font-anton py-3 rounded-xl">
                {/* TODO: Add User icon here */}
                PROFIL
              </Button>
              <Button className="w-full bg-red-700 hover:bg-red-800 text-white font-anton py-3 rounded-xl">
                {/* TODO: Add PlusSquare icon here */}
                + NOVI POST
              </Button>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
