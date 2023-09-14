import { StyledPageTitle } from "@/components/PageTitle.styled";
import UpcomingList from "@/components/UpcomingList";
export default function Upcoming({ pageNumber, handleNext, handlePrev }) {
  return (
    <>
      <StyledPageTitle>Upcoming</StyledPageTitle>
      <UpcomingList
        pageNumber={pageNumber}
        handleNext={handleNext}
        handlePrev={handlePrev}
      />
    </>
  );
}
