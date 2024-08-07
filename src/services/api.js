import axios from "axios";

// API_KEY = '61b025e8fd3830695c165a14b44869a1';

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MWIwMjVlOGZkMzgzMDY5NWMxNjVhMTRiNDQ4NjlhMSIsIm5iZiI6MTcyMzA0MzQ2OC4zMTM2NzIsInN1YiI6IjY2YjMzNzQ3NDY2YTU1MTEyNzI3ZDRkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pOLPIuVam2UWj7rnzPqVftEUcOw7Q8tuVfG8At2PTv8",
  },
};

const searchMovies = async (url) => {
  const response = await axios.get(url, options);

  return response.data;
};

export default searchMovies;
