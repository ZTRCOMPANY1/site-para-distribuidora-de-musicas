export interface Movie {
  id: string;
  title: string;
  posterUrl: string;
  releaseYear: number;
  genre: string;
  synopsis: string;
}

export interface MovieTrailer {
  id: string;
  movieId: string;
  thumbnailUrl: string;
  trailerUrl: string;
  title: string;
}