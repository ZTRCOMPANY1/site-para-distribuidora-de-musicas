import React from 'react';
import { Music2, Menu, X } from 'lucide-react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Music2 className="h-8 w-8 text-purple-600" />
            <span className="ml-2 text-xl font-bold">SoundWave Distribution</span>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <a href="#artists" className="text-gray-700 hover:text-purple-600 transition-colors">Artists</a>
              <a href="#releases" className="text-gray-700 hover:text-purple-600 transition-colors">New Releases</a>
              <a href="#services" className="text-gray-700 hover:text-purple-600 transition-colors">Services</a>
              <a href="#contact" className="text-gray-700 hover:text-purple-600 transition-colors">Contact</a>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#artists" className="block text-gray-700 hover:text-purple-600 py-2">Artists</a>
            <a href="#releases" className="block text-gray-700 hover:text-purple-600 py-2">New Releases</a>
            <a href="#services" className="block text-gray-700 hover:text-purple-600 py-2">Services</a>
            <a href="#contact" className="block text-gray-700 hover:text-purple-600 py-2">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}