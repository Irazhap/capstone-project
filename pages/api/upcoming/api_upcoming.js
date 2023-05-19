export default async function handler(request, response) {
  const apiResponse = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.API_KEY}&language=en-US&page=1`
  );
  const movieData = await apiResponse.json();
  response.status(200).json(movieData.results);
}
