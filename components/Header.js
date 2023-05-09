import styled from "styled-components";
import Link from "next/link";

const NavContainer = styled.header`
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  top: 0px;
  height: 60px;
  background-color: #202020;
  color: #f2f2f2;
  width: 100%;
  z-index: 9999;
`;

const HeaderTitle = styled.h1`
  font-size: 2rem;
  margin: 0;
  z-index: 9888;
`;

const NavbarMenu = styled.nav`
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

const NavUnderContainer = styled.nav`
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

const NavbarMenuItem = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const NavbarLink = styled(Link)`
  color: #262626;
  text-decoration: none;
  font-size: 18px;
  margin: 5px;

  &:hover {
    text-decoration: underline;
  }
  z-index: 11111;
`;

const Hamburger = styled.div`
  background-color: #202020;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: fixed;
  top: 15px;
  left: 20px;
  width: 30px;
  height: 30px;
  cursor: pointer;
  z-index: 10000;

  &:focus {
    outline: none;
  }

  div {
    width: 100%;
    height: 4px;
    background-color: #f2f2f2;
  }
`;

export default function Header({ isOpen, onToggle }) {
  return (
    <NavContainer>
      <Hamburger isOpen={isOpen} onClick={onToggle}>
        <div></div>
        <div></div>
        <div></div>
      </Hamburger>
      <NavbarMenu isOpen={isOpen}>
        <NavbarMenuItem>
          <NavbarLink href="/index">Home</NavbarLink>
          <NavbarLink href="/popular">Popular</NavbarLink>
          <NavbarLink href="/toprated">Top Rated</NavbarLink>
          <NavbarLink href="/upcoming">Upcoming</NavbarLink>
        </NavbarMenuItem>
      </NavbarMenu>
      <NavUnderContainer isOpen={isOpen} />
      <HeaderTitle>The Movie App</HeaderTitle>
    </NavContainer>
  );
}
