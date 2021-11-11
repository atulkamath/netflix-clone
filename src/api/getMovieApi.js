import axios from "axios";

const getMovieApi = async (slug) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/${slug}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&append_to_response=images&include_image_language=en,null`
  );
  return response.data.results;
};

export default getMovieApi;
