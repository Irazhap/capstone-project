import styled from "styled-components";

const NavContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  background-color: #202020;
  color: #f2f2f2;
  width: 100%;
`;

const HeaderTitle = styled.h1`
  font-size: 2rem;
  margin: 0;
`;

export default function Header() {
  return (
    <NavContainer>
      <HeaderTitle>The Movie App</HeaderTitle>
    </NavContainer>
  );
}
