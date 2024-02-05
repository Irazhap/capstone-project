import fetcher from "@/services/fetch";

export default async function handler(request, response) {
  try {
    const { id } = request.query;
    const movieId = id;
    const appendToResponse = "videos,images,credits";

    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}&language=en-US&append_to_response=${appendToResponse}`;
    response.status(200).json(movieId);
  } catch (error) {
    response
      .status(500)
      .json({ error: "An error occurred while fetching the data" });
  }
}
