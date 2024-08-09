import { createContext, ReactNode, useEffect, useState } from "react";
import { TMDB_API } from "../API";
import { Movie, Response_TMDB } from "../interfaces";

interface ContextValue {
  moviesByGenre: Array<{ genre: string; data: Movie[] }>;
}

export const ContextMovies = createContext<ContextValue | undefined>(undefined);

interface Props {
  children: ReactNode;
}

export const ProviderMovies = ({ children }: Props) => {
  type DataTypes = [] | Array<{ genre: string; data: Movie[] }>;
  const [moviesByGenre, setMoviesByGenre] = useState<DataTypes>([]);

  interface Props {
    ID: number;
    genre: string;
  }

  /**
   * @description
   * This function is iterated for each element in an array, and for each iteration an API call is executed.
   * Every result is saved to be displayed later
   *
   * @param {Props} props - Params of the function
   * @param {number} props.ID - ID of the genre.
   * @param {string} props.genre - Name of the genre.
   * @return {Array} An array of objects with the next information:
   * - loading: {boolean} - To know if the data is loading
   * - error: {boolean} - To know if there was any error
   * - genre: {string} - The corresponding genre to the data.
   * - data: {Movie[]} - The movies.
   */

  async function getMoviesByGenre({
    ID,
    genre,
  }: Props): Promise<Response_TMDB<Movie[]> | void> {
    // URL
    const URL = `${TMDB_API.base}discover/movie${TMDB_API.key}&with_genres=${ID.toString()}`;
    try {
      const request = await fetch(URL);
      if (!request.ok) {
        throw new Error(`HTTP ERROR! Status: ${request.status}`);
      }
      const response: Response_TMDB<Movie[]> = await request.json();

      setMoviesByGenre((prevState) => [
        ...prevState,
        {
          genre: genre,
          data: response.results,
        },
      ]);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    TMDB_API.movieGenres.forEach((movie) => {
      getMoviesByGenre({ genre: movie.genre, ID: movie.id });
    });
  }, []);

  return (
    <ContextMovies.Provider value={{ moviesByGenre }}>
      {children}
    </ContextMovies.Provider>
  );
};
