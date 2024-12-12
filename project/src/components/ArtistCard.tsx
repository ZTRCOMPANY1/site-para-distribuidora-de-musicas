import React from 'react';
import { Music, Users, Instagram, Twitter } from 'lucide-react';
import type { Artist } from '../types/artist';

interface ArtistCardProps {
  artist: Artist;
}

export function ArtistCard({ artist }: ArtistCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
      <div className="relative h-48">
        <img
          src={artist.imageUrl}
          alt={artist.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{artist.name}</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {artist.genres.map((genre) => (
            <span
              key={genre}
              className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm"
            >
              {genre}
            </span>
          ))}
        </div>
        
        <div className="flex items-center gap-4 mb-4 text-gray-600">
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{(artist.monthlyListeners / 1000000).toFixed(1)}M monthly listeners</span>
          </div>
          <div className="flex items-center gap-1">
            <Music className="w-4 h-4" />
            <span>{artist.topSong}</span>
          </div>
        </div>
        
        <p className="text-gray-600 mb-4">{artist.bio}</p>
        
        <div className="flex gap-4">
          {artist.socialLinks.instagram && (
            <a
              href={artist.socialLinks.instagram}
              className="text-gray-600 hover:text-purple-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-5 h-5" />
            </a>
          )}
          {artist.socialLinks.twitter && (
            <a
              href={artist.socialLinks.twitter}
              className="text-gray-600 hover:text-purple-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}