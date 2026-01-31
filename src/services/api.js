const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

// Optional helper to avoid repeating api_key
const fetchFromTMDB = async (endpoint) => {
  const url = `${BASE_URL}${endpoint}${
    endpoint.includes("?") ? "&" : "?"
  }api_key=${API_KEY}`;

  const response = await fetch(url, {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`TMDB request failed: ${response.status}`);
  }

  return response.json();
};

export const getPopularMovies = async () => {
  const data = await fetchFromTMDB("/movie/popular");
  return data.results;
};

export const searchMovies = async (query) => {
  const data = await fetchFromTMDB(
    `/search/movie?query=${encodeURIComponent(query)}`
  );
  return data.results;
};
