export default async function fetcher(url) {
  const apiResponse = await fetch(url);
  const data = await apiResponse.json();
  return data.results;
}
