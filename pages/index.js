import {
  nowPlayingMovies,
  popularMovies,
  topRatedMovies,
  upcomingMovies,
} from "../lib/db";

import MovieList from "@/components/MovieList";

export default function HomePage() {
  return (
    <>
      <MovieList movies={nowPlayingMovies} title="Now Playing" />
      <MovieList movies={popularMovies} title="Popular" />
      <MovieList movies={topRatedMovies} title="Top Rated" />
      <MovieList movies={upcomingMovies} title="Upcoming" />
    </>
  );
}
