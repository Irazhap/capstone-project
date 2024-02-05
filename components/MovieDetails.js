// MovieDetails.js
import styled from "styled-components";
import React from "react";

const Container = styled.div`
  background-color: #919191;
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-template-rows: repeat(3, auto);

  grid-gap: 20px;
  padding: 20px;
  border: 2px solid red;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const Poster = styled.img`
  width: 100%; /* Breite 100% für responsives Design */
  height: auto;

  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.3);
  border: 2px solid red;

  @media (max-width: 600px) {
    width: 85%; /* Breite 100% für kleinere Bildschirme */
    height: 100%; /* Automatische Höhe für kleinere Bildschirme */
    margin: 1em; /* Abstand unterhalb des Posters beibehalten */
  }
`;

const InfoSection = styled.div`
  display: flex;
  justify-content: row;
`;

const SectionDetail = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  font-size: 2rem;
  width: 100%;
  height: 50px;
  margin: 0px;

  border: 2px solid red;

  @media (max-width: 600px) {
    font-size: 1.3rem;
  }
`;

const Text = styled.p`
  font-size: 1em;
  //padding: 5px;
  border: 2px solid red;
`;
const Separation = styled.div`
  background-color: black;
  border-radius: 10px;
  width: 5px;
  height: 5px;
  margin: 25px 15px;
`;

const HomepageLink = styled.a`
  font-size: 1em;
  color: blue;
  text-decoration: underline;
  width: 100px;
  //padding: 5px;
  border: 2px solid red;

  &:hover {
    filter: brightness(0.5); // Abdunkelungseffekt bei Hover
  }
`;

const TrailerSection = styled.div`
  margin-top: 20px;
  padding: 20px;
`;

const TrailerTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const TrailerContainer = styled.div`
  width: 100%;

  position: relative;
  padding-bottom: 56.25%; /* Aspect ratio 16:9 */
`;

const TrailerIframe = styled.iframe`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export default function MovieDetails({ movie, trailerData }) {
  console.log(movie, trailerData);
  // Überprüfen Sie, ob 'movie' vorhanden ist, bevor Sie auf Eigenschaften zugreifen
  if (!movie) {
    return <div>No movie selected</div>;
  }

  // Funktion zur Umrechnung der Minuten in Stunden und Minuten
  const formatRuntime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    if (hours > 0) {
      return `${hours}h ${remainingMinutes}m`;
    } else {
      return `${remainingMinutes}m`;
    }
  };

  return (
    <>
      <Container>
        <Poster
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
        />
        <SectionDetail>
          <Title>{movie.title}</Title>
          <InfoSection>
            <Text>{movie.release_date}</Text>
            <Separation />

            {movie.genres && (
              <Text>{movie.genres.map((genre) => genre.name).join(", ")}</Text>
            )}
            <Separation />
            <Text>{formatRuntime(movie.runtime)}</Text>
          </InfoSection>
          {movie.homepage && (
            <HomepageLink href={movie.homepage} target="_blank">
              Homepage
            </HomepageLink>
          )}
          <Text>{movie.overview}</Text>
        </SectionDetail>
      </Container>
      {/* Trailer-Sektion */}
      {trailerData && trailerData.results && trailerData.results.length > 0 && (
        <TrailerSection>
          <TrailerTitle>Trailer</TrailerTitle>
          <TrailerContainer>
            <TrailerIframe
              src={`https://www.youtube.com/embed/${trailerData.results[0].key}`}
              title={trailerData.results[0].name}
              frameBorder="0"
              allowFullScreen
            ></TrailerIframe>
          </TrailerContainer>
        </TrailerSection>
      )}
    </>
  );
}
