import Burger from "./Burger";
import { StyledHead } from "./StyledHead";
import { StyledHeaderTitle } from "./StyledHeaderTitle";
import { StyledNavList } from "./StyledNavList";
import { StyledListItem } from "./StyledListItem";
import {
  StyledNavContainer,
  StyledTransparentContainer,
} from "./StyledNavContainer";

export default function Header({ isOpen, onToggle }) {
  return (
    <StyledHead>
      <Burger isOpen={isOpen} onClick={onToggle} />
      <StyledNavContainer isOpen={isOpen}>
        <StyledNavList>
          <StyledListItem href="/index">Home</StyledListItem>
          <StyledListItem href="/popular">Popular</StyledListItem>
          <StyledListItem href="/toprated">Top Rated</StyledListItem>
          <StyledListItem href="/upcoming">Upcoming</StyledListItem>
        </StyledNavList>
      </StyledNavContainer>
      <StyledTransparentContainer isOpen={isOpen} />
      <StyledHeaderTitle>The Movie App</StyledHeaderTitle>
    </StyledHead>
  );
}
