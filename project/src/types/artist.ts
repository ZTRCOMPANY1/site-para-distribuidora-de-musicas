export interface Artist {
  id: string;
  name: string;
  imageUrl: string;
  genres: string[];
  monthlyListeners: number;
  topSong: string;
  bio: string;
  socialLinks: {
    spotify?: string;
    instagram?: string;
    twitter?: string;
  };
}

export interface Album {
  id: string;
  artistId: string;
  title: string;
  coverUrl: string;
  releaseYear: number;
  trackCount: number;
}