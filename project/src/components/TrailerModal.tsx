import React from 'react';
import { X } from 'lucide-react';
import type { MovieTrailer } from '../types/movie';

interface TrailerModalProps {
  trailer: MovieTrailer | null;
  onClose: () => void;
}

export function TrailerModal({ trailer, onClose }: TrailerModalProps) {
  if (!trailer) return null;

  return (
    <div className="fixed inset-0 bg-black/75 flex items-center justify-center z-50">
      <div className="bg-black rounded-lg w-full max-w-4xl p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-white">{trailer.title}</h3>
          <button onClick={onClose} className="text-white hover:text-red-500">
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="relative pt-[56.25%]">
          <iframe
            src={trailer.trailerUrl}
            className="absolute inset-0 w-full h-full rounded-lg"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}