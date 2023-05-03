import NowPlayingList from "@/components/NowPlayingList.js";
import PopularList from "@/components/PopularList.js";
import UpcomingMovies from "@/components/UpcomingMovies.js";
import TopratedList from "@/components/TopRatedList.js";
import Header from "@/components/Header.js";

export default function HomePage() {
  return (
    <>
      <NowPlayingList />
      <PopularList />
      <UpcomingMovies />
      <TopratedList />
    </>
  );
}
