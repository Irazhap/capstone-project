import Burger from "./Burger";
import { StyledHead } from "./Head.styled";
import { StyledHeaderTitle } from "./HeaderTitle.styled";
import { StyledNavList } from "./NavList.styled";
import { StyledListItem } from "./ListItem.styled";
import {
  StyledNavContainer,
  StyledTransparentContainer,
} from "./NavContainer.styled";

export default function Header({ isOpen, onToggle, handleClose }) {
  return (
    <StyledHead>
      <Burger isOpen={isOpen} onClick={onToggle} />
      <StyledNavContainer isOpen={isOpen}>
        <StyledNavList>
          <StyledListItem href="/index">Home</StyledListItem>
          <StyledListItem isOpen={isOpen} href="/popular">
            Popular
          </StyledListItem>
          <StyledListItem href="/toprated">Top Rated</StyledListItem>
          <StyledListItem href="/upcoming">Upcoming</StyledListItem>
        </StyledNavList>
      </StyledNavContainer>
      <StyledTransparentContainer isOpen={isOpen} />
      <StyledHeaderTitle>The Movie App</StyledHeaderTitle>
    </StyledHead>
  );
}
