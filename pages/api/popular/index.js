import fetcher from "@/services/fetch";

export default async function handler(request, response) {
  try {
    const key = process.env.API_KEY;
    const { page } = request.query;
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=${page}`;
    const movieData = await fetcher(url);
    response.status(200).json(movieData);
  } catch (error) {
    response
      .status(500)
      .json({ error: "An error occurred while fetching the data" });
  }
}
