// ./pages/movie/[id]/index.js
import React from "react";
import MovieDetails from "@/components/MovieDetails";

export default function MovieDetailsPage({ movie, trailerData }) {
  return (
    <div>
      {/* Übergeben Sie die movie- und trailerData-Eigenschaften an die MovieDetails-Komponente */}
      <MovieDetails movie={movie} trailerData={trailerData} />
    </div>
  );
}

export async function getServerSideProps({ params }) {
  try {
    const movieId = params.id;
    const apiKey = process.env.API_KEY;

    // API-Aufruf, um Filmdaten zu erhalten
    const movieUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`;
    const movieResponse = await fetch(movieUrl);

    if (!movieResponse.ok) {
      throw new Error("Failed to fetch movie data");
    }

    const movie = await movieResponse.json();

    // API-Aufruf, um Trailer für den Film zu erhalten
    const trailerUrl = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}&language=en-US`;
    const trailerResponse = await fetch(trailerUrl);

    if (!trailerResponse.ok) {
      throw new Error("Failed to fetch movie trailer data");
    }

    const trailerData = await trailerResponse.json();

    return {
      props: {
        movie,
        trailerData,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        movie: null,
        trailerData: null,
      },
    };
  }
}

/*
import React from "react";
import MovieDetails from "@/components/MovieDetails";

export default function MovieDetailsPage({ movie, }) {
  return (
    <div>
      //{ Übergeben Sie die movie-Eigenschaft an die MovieDetails-Komponente }
      <MovieDetails movie={movie} />
    </div>
  );
}

export async function getServerSideProps({ params }) {
  try {
    // Rufen Sie die Daten für den ausgewählten Film basierend auf params.id ab
    const movieId = params.id;

    // Beispiel: API-Aufruf, um Filmdaten zu erhalten
    const apiKey = process.env.API_KEY;
    const apiUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`;

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error("Failed to fetch movie data");
    }

    const movie = await response.json();

    return {
      props: {
        movie,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        movie: null, // Geben Sie null zurück oder behandeln Sie den Fehler entsprechend
      },
    };
  }
}
*/
