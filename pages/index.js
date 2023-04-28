import Card from "@/components/Card";
import NowPlayinglist from "@/components/NowPlayinglist";
import PopulaList from "@/components/Popularlist";

export default function HomePage() {
  return (
    <>
      <NowPlayinglist />
      <PopulaList />
    </>
  );
}
