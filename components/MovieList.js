import styled from "styled-components";
import Card from "./Card";

const StyledUl = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export default function MovieList({ movies, title }) {
  return (
    <>
      <h2>{title}</h2>
      <StyledUl>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Card image={movie.image} year={movie.year} title={movie.title} />
          </li>
        ))}
      </StyledUl>
    </>
  );
}
