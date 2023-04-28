import styled from "styled-components";
import { nowPlayingMovies } from "../lib/db";
import MovieCard from "./Card";

const StyledList = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export default function NowPlayinglist() {
  return (
    <>
      <h3>Now Playing</h3>

      <ul>
        <StyledList>
          {nowPlayingMovies.map((movie) => (
            <li key={movie.id}>
              <MovieCard
                image={movie.image}
                year={movie.year}
                title={movie.title}
              />
            </li>
          ))}
        </StyledList>
      </ul>
    </>
  );
}
