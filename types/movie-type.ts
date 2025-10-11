export interface Movie {
  kinopoiskId: string;
  nameRU: string;
  nameEN?: string;
  posterUrl: string;
  posterUrlPreview: string;
  ratingKinopoisk: number;
  year: number;
  slogan: string;
  description: string;
}

export interface MovieResponse {
  items: Movie[];
}
