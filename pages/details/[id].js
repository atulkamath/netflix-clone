import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
const Details = (props) => {
  const router = useRouter();
  const [myList, setMyList] = useState(null);
  const { id } = router.query;

  useEffect(() => {
    if (!id) {
      return;
    }
    const fetchSomethingById = async () => {
      axios(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
      )
        .then((response) => {
          // console.log(response.data.original_title);
          setMyList(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    };
    fetchSomethingById();
  }, [id]);

  if (!myList) {
    return null;
  }

  return (
    <div>
      <h1>{myList.original_title}</h1>
      {console.log(myList)}
    </div>
  );
};

export default Details;
