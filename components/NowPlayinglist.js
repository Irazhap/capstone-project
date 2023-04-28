import styled from "styled-components";
import { nowPlayingMovies } from "../lib/db";
import Card from "./Card";

const StyledList = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const StyledUl = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export default function NowPlayinglist() {
  return (
    <>
      <h2>Now Playing</h2>

      <ul>
        <StyledUl>
          {nowPlayingMovies.map((movie) => (
            <StyledList key={movie.id}>
              <Card image={movie.image} year={movie.year} title={movie.title} />
            </StyledList>
          ))}
        </StyledUl>
      </ul>
    </>
  );
}
