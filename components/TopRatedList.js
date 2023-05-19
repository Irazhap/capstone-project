import React from "react";
import useSWR from "swr";
import styled from "styled-components";
import { StyledCardImage } from "./StyledCardImage";

const Container = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
`;

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function TopRatedList() {
  const {
    data: movies,
    isLoading,
    isError,
  } = useSWR("/api/top_rated/api_top_rated", fetcher);

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

export default TopRatedList;
