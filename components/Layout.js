import Header from "./Header.js";
import styled from "styled-components";

const Main = styled.main`
  padding-left: 1rem;
  padding-right: 1rem;
`;

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Main>{children}</Main>
    </>
  );
}
