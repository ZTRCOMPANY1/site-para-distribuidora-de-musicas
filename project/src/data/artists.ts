import type { Artist, Album } from '../types/artist';

export const FEATURED_ARTISTS: Artist[] = [
  {
    id: '1',
    name: 'Luna Eclipse',
    imageUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80',
    genres: ['Alternative Pop', 'Indie'],
    monthlyListeners: 1200000,
    topSong: 'Midnight Dreams',
    bio: 'Rising star Luna Eclipse brings a fresh perspective to alternative pop with her unique vocal style and introspective lyrics.',
    socialLinks: {
      spotify: 'https://spotify.com',
      instagram: 'https://instagram.com',
      twitter: 'https://twitter.com'
    }
  },
  {
    id: '2',
    name: 'The Quantum Collective',
    imageUrl: 'https://images.unsplash.com/photo-1511735111819-9a3f7709049c?auto=format&fit=crop&q=80',
    genres: ['Electronic', 'Synthwave'],
    monthlyListeners: 800000,
    topSong: 'Digital Horizon',
    bio: 'Electronic music pioneers pushing the boundaries of sound with their innovative approach to synthwave.',
    socialLinks: {
      spotify: 'https://spotify.com',
      instagram: 'https://instagram.com'
    }
  },
  {
    id: '3',
    name: 'Atlas Roads',
    imageUrl: 'https://images.unsplash.com/photo-1501612780327-45045538702b?auto=format&fit=crop&q=80',
    genres: ['Indie Rock', 'Folk'],
    monthlyListeners: 950000,
    topSong: 'Highway Memories',
    bio: 'A folk-rock band known for their storytelling lyrics and harmony-rich compositions.',
    socialLinks: {
      spotify: 'https://spotify.com',
      twitter: 'https://twitter.com'
    }
  }
];

export const FEATURED_ALBUMS: Album[] = [
  {
    id: 'a1',
    artistId: '1',
    title: 'Neon Nights',
    coverUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80',
    releaseYear: 2024,
    trackCount: 12
  },
  {
    id: 'a2',
    artistId: '2',
    title: 'Digital Dreams',
    coverUrl: 'https://images.unsplash.com/photo-1571330735066-03aaa9429d89?auto=format&fit=crop&q=80',
    releaseYear: 2024,
    trackCount: 10
  }
];