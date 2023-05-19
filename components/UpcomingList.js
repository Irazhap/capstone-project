import React from "react";
import useMovieData from "pages/api/upcoming/api_upcoming.js";
import styled from "styled-components";
import { StyledCardImage } from "./StyledCardImage";

const Container = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
`;

function UpcomingList() {
  const { movies, isLoading, isError } = useMovieData();

  if (isError) {
    return <div>Error: {isError.message}</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      {movies.map((movie) => (
        <div key={movie.id}>
          <StyledCardImage
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
            width={140}
            height={210}
          />
        </div>
      ))}
    </Container>
  );
}

export default UpcomingList;
