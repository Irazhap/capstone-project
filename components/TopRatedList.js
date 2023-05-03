import styled from "styled-components";
import { topRatedMovies } from "../lib/db";
import Card from "./Card";

const StyledUl = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export default function TopratedList() {
  return (
    <>
      <h2>Top Rated</h2>
      <StyledUl>
        {topRatedMovies.map((movie) => (
          <li key={movie.id}>
            <Card image={movie.image} year={movie.year} title={movie.title} />
          </li>
        ))}
      </StyledUl>
    </>
  );
}
