import { StyledPageTitle } from "@/components/PageTitle.styled";
import PopularList from "@/components/PopularList";

export default function PopularPage({ pageNumber, handleNext, handlePrev }) {
  return (
    <>
      <StyledPageTitle>Popular</StyledPageTitle>
      <PopularList
        pageNumber={pageNumber}
        handleNext={handleNext}
        handlePrev={handlePrev}
      />
    </>
  );
}
