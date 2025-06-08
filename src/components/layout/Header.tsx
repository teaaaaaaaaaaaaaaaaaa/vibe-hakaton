import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/config';
import { Button } from '../ui/Button';

export function Header() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error('Error signing out: ', error);
      // Optionally, show a toast notification to the user
    }
  };

  return (
    <header className="bg-black/80 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white font-serif tracking-wider">
          TRADEY
        </Link>
        <div className="flex items-center space-x-4">
          {user ? (
            <>
              <Link to="/profile" className="text-gray-300 hover:text-white transition-colors">
                Profile
              </Link>
              <Link to="/chat" className="text-gray-300 hover:text-white transition-colors">
                Messages
              </Link>
              <Link to="/liked" className="text-gray-300 hover:text-white transition-colors">
                Liked
              </Link>
              <div className="w-24">
                <Button onClick={handleLogout} variant="secondary">
                  Log Out
                </Button>
              </div>
            </>
          ) : (
            <>
              <Link to="/login" className="text-gray-300 hover:text-white transition-colors">
                Log In
              </Link>
              <Link to="/signup" className="bg-[#a61f1e] text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
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
