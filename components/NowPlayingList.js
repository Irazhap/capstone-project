import styled from "styled-components";
import { nowPlayingMovies } from "../lib/db";
import Card from "./Card";

const StyledUl = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export default function NowPlayingList() {
  return (
    <>
      <h2>Now Playing</h2>
      <StyledUl>
        {nowPlayingMovies.map((movie) => (
          <li key={movie.id}>
            <Card image={movie.image} year={movie.year} />
          </li>
        ))}
      </StyledUl>
    </>
  );
}
