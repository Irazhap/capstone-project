import { StyledPageTitle } from "@/components/PageTitle.styled";
import TopRatedList from "@/components/TopRatedList";
export default function TopRated({ pageNumber, handleNext, handlePrev }) {
  return (
    <>
      <StyledPageTitle>Top Rated</StyledPageTitle>
      <TopRatedList
        pageNumber={pageNumber}
        handleNext={handleNext}
        handlePrev={handlePrev}
      />
    </>
  );
}
