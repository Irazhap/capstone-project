import Header from "./Header.js";
import styled from "styled-components";

const Main = styled.main`
  padding-left: 2rem;
  padding-right: 2rem;
`;

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Main>{children}</Main>
    </>
  );
}
