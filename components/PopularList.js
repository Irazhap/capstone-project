import React from "react";
import styled from "styled-components";
import { StyledCardImage } from "./StyledCardImage";
import useSWR from "swr";

const Container = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
`;

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function PopularList() {
  const {
    data: movies,
    isLoading,
    isError,
  } = useSWR("/api/popular/api_popular", fetcher);

  if (isError) {
    return <div>Error: {isError.message}</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }
  console.log(movies);
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

export default PopularList;
