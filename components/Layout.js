import styled from "styled-components";
const Main = styled.main`
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 4rem;
`;

export default function Layout({ children }) {
  return (
    <>
      <Main>{children}</Main>
    </>
  );
}
