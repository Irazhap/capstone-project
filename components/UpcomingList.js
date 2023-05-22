import React from "react";
import useSWR from "swr";
import styled from "styled-components";
import { CardImage } from "./CardImage.styled";

const Container = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
`;
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const List = styled.li`
  list-style: none;
`;

function UpcomingList() {
  const { data: movies, isLoading, isError } = useSWR("/api/upcoming", fetcher);

  if (isError) {
    return <div>Error: {isError.message}</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      {movies.map((movie) => (
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

export default UpcomingList;
