import { Movie, MovieResponse } from "../types/movie-type";
import { apiClient } from "../api/axios";

class Movies {
  private _API = "/v2.2/films";

  async getAllFilms(): Promise<Movie[]> {
    try {
      const response = await apiClient.get<MovieResponse>(this._API);
      return response.data.items || [];
    } catch (error) {
      console.error("Error fetching movies:", error);
      return [];
    }
  }
}

export const moviesClass = new Movies();
