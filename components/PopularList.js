import React from "react";
import styled from "styled-components";
import { CardImage } from "./CardImage.styled";
import useSWR from "swr";

const Container = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
`;

const List = styled.li`
  list-style: none;
`;

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function PopularList() {
  const { data: movies, isLoading, isError } = useSWR("/api/popular", fetcher);

  if (isError) {
    return <div>Error: {isError.message}</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      {movies?.map((movie) => (
        <List key={movie.id}>
          <CardImage
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
            width={140}
            height={210}
          />
        </List>
      ))}
    </Container>
  );
}
