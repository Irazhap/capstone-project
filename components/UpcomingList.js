import React from "react";
import useSWR from "swr";
import styled from "styled-components";
import { CardImage } from "./CardImage.styled";
import Pagination from "./Pagination";

const PaginationContainer = styled.div`
  margin: 15px;
  display: flex;
  justify-content: center;
`;

const StyledButton = styled.button`
  display: inline-block;
  border: none;
  border-radius: 2.5px;
  padding: 8px 15px;
  margin: 5px;
  background-color: #222222;
  color: #f2f2f2;
  text-align: center;
`;

const Container = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
`;
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const List = styled.li`
  list-style: none;
`;

function UpcomingList({ pageNumber, handleNext, handlePrev }) {
  const {
    data: movies,
    isLoading,
    isError,
  } = useSWR(`/api/upcoming?page=${pageNumber}`, fetcher);

  if (isError) {
    return <div>Error: {isError.message}</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
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
      <Pagination
        pageNumber={pageNumber}
        handleNext={handleNext}
        handlePrev={handlePrev}
      />
    </>
  );
}

export default UpcomingList;
