import fetcher from "@/pages/services/fetch";

export default async function handler(request, response) {
  const { page } = request.query;
  const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.API_KEY}&language=en-US&page=${page}`;
  const movieData = await fetcher(url);
  response.status(200).json(movieData);
}
