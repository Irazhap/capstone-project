import useSWR from "swr";

async function fetcher(url) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOTk5OTZkZDQzODNhYzgxNDEyMDA0NTg1MmUwM2JkNiIsInN1YiI6IjY0NDdkMWZhZTE4Yjk3MDRhMTViMjRhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bWS_8cBb0t_sWt917vAtmS8xJc4rW1x8rpgHU8LXK6U",
    },
  };

  const res = await fetch(url, options);
  if (!res.ok) {
    throw new Error("Could not fetch data from API");
  }
  const data = await res.json();
  return data;
}

export default function useMovieData() {
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/top_rated?language=en-US`,
    fetcher
  );

  return {
    movies: data?.results || [],
    isLoading: !error && !data,
    isError: error,
  };
}
