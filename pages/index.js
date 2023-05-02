import NowPlayinglist from "@/components/NowPlayingList";
import PopulaList from "@/components/PopularList";
import UpcomingMovies from "@/components/UpcomingMovies";
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
