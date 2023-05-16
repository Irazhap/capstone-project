import {
  nowPlayingMovies,
  popularMovies,
  topRatedMovies,
  upcomingMovies,
} from "../lib/db";

import Carousel from "@/components/Carousel";

export default function HomePage() {
  return (
    <>
      <Carousel movies={nowPlayingMovies} title="Now Playing" />
      <Carousel movies={popularMovies} title="Popular" />
      <Carousel movies={topRatedMovies} title="Top Rated" />
      <Carousel movies={upcomingMovies} title="Upcoming" />
    </>
  );
}
