import styled from "styled-components";
import { popularMovies } from "../lib/db";
import Card from "./Card";

const StyledUl = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export default function PopularList() {
  return (
    <>
      <h2>Popular</h2>
      <StyledUl>
        {popularMovies.map((movie) => (
          <li key={movie.id}>
            <Card image={movie.image} year={movie.year} title={movie.title} />
          </li>
        ))}
      </StyledUl>
    </>
  );
}
