import styled from "styled-components";
import { CardImage } from "./CardImage.styled";
import useSWR from "swr";
import Pagination from "./Pagination";
import Link from "next/link";

import { useState } from "react";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const CardWrapper = styled.div`
  margin-bottom: 50px;
  display: grid;
  grid-gap: 2rem;
  //grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const List = styled.li`
  list-style: none;
`;

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function PopularList({ pageNumber, handleNext, handlePrev }) {
  const {
    data: movies,
    isLoading,
    isError,
  } = useSWR(`/api/popular?page=${pageNumber}`, fetcher);

  const [selectedMovie, setSelectedMovie] = useState(null);

  if (isError) {
    return <div>Error: {isError.message}</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Container>
        <CardWrapper>
          {movies.map((movie) => (
            <List key={movie.id}>
              <div onClick={() => setSelectedMovie(movie)}>
                <Link href="/movie/[id]" as={`/movie/${movie.id}`}>
                  <CardImage
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt={movie.title}
                    width={280}
                    height={420}
                  />
                </Link>
              </div>
            </List>
          ))}
        </CardWrapper>
      </Container>

      <Pagination
        pageNumber={pageNumber}
        handleNext={handleNext}
        handlePrev={handlePrev}
      />
    </>
  );
}
