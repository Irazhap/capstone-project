import styled from "styled-components";
export const StyledNavContainer = styled.nav`
  position: fixed;
  top: 60px;
  left: 0;
  width: 250px;
  height: 100%;
  background: #f2f2f2;
  z-index: 8888;
  transition: transform 0.3s ease-in-out;
  transform: ${({ isOpen }) =>
    isOpen ? "translateX(0%)" : "translateX(-100%)"};
`;

export const StyledTransparentContainer = styled.nav`
  position: fixed;
  top: 60px;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000;
  opacity: 0.5;
  z-index: 7777;
  transition: transform 0.3s ease-in-out;
  transform: ${({ isOpen }) =>
    isOpen ? "translateX(0)" : "translateX(-100%)"};
`;
