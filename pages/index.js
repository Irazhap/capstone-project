import NowPlayinglist from "@/components/NowPlayinglist";
import PopulaList from "@/components/Popularlist";
import UpcomingMovies from "@/components/Upcomingmovies";
import TopratedList from "@/components/TopRatedList";

export default function HomePage() {
  return (
    <>
      <NowPlayinglist />
      <PopulaList />
      <UpcomingMovies />
      <TopratedList />
    </>
  );
}
