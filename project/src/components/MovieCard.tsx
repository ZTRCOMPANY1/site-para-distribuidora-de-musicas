import React from 'react';
import type { Movie } from '../types/movie';
import { Play } from 'lucide-react';

interface MovieCardProps {
  movie: Movie;
  onPlay: () => void;
}

export function MovieCard({ movie, onPlay }: MovieCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg">
      <img
        src={movie.posterUrl}
        alt={movie.title}
        className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 p-6 w-full">
          <h3 className="text-xl font-bold text-white mb-2">{movie.title}</h3>
          <p className="text-gray-300 text-sm mb-4">{movie.synopsis}</p>
          <div className="flex items-center justify-between">
            <span className="text-red-500">{movie.genre}</span>
            <button
              onClick={onPlay}
              className="bg-red-600 text-white px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-red-700 transition-colors"
            >
              <Play className="w-4 h-4" />
              <span>Watch Trailer</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}