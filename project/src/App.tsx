import React from 'react';
import { Navbar } from './components/Navbar';
import { ArtistCard } from './components/ArtistCard';
import { FEATURED_ARTISTS } from './data/artists';
import { Music2, BarChart, Globe2, HeadphonesIcon } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-16 h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Amplify Your Music Career
            </h1>
            <p className="text-xl mb-8 text-gray-300">
              Join SoundWave Distribution and reach millions of listeners worldwide.
              We help independent artists grow their audience and maximize their potential.
            </p>
            <button className="bg-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition-colors">
              Submit Your Music
            </button>
          </div>
        </div>
      </section>

      {/* Artists Section */}
      <section id="artists" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Featured Artists</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {FEATURED_ARTISTS.map((artist) => (
              <ArtistCard key={artist.id} artist={artist} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Services</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Music2 className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Music Distribution</h3>
              <p className="text-gray-600">
                Get your music on all major streaming platforms worldwide
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Analytics</h3>
              <p className="text-gray-600">
                Track your performance with detailed analytics and insights
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe2 className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Global Reach</h3>
              <p className="text-gray-600">
                Connect with audiences worldwide through our network
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <HeadphonesIcon className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Playlist Pitching</h3>
              <p className="text-gray-600">
                Get your music featured on popular playlists
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-purple-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-8">
            Join thousands of artists who trust SoundWave Distribution to share their music with the world.
          </p>
          <button className="bg-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition-colors">
            Contact Us
          </button>
        </div>
      </section>

      <footer className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Music2 className="h-8 w-8 text-purple-600" />
              <span className="ml-2 text-xl font-bold">SoundWave Distribution</span>
            </div>
            <div className="text-gray-600 text-sm">
              © 2024 SoundWave Distribution. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;