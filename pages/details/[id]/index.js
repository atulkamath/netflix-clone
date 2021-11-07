import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
const Details = (props) => {
  const router = useRouter();
  const [myList, setMyList] = useState(null);
  const [cast, setCast] = useState(null);
  // const { asPath } = useRouter();
  //console.log(asPath);
  // const { id } = router.query;
  const id = router.query.id;
  console.log(router.query);
  // useEffect(() => {
  //   if (!id) {
  //     return;
  //   }
  //   const fetchSomethingById = async () => {
  //     axios(
  //       `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&append_to_response=release_dates`
  //     )
  //       .then((response) => {
  //         // console.log(response.data.original_title);
  //         setMyList(response.data);
  //       })
  //       .then(() => {
  //         axios(
  //           `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
  //         ).then((response) => {
  //           // setMyList(response.data);
  //         });
  //       })
  //       .catch(function (error) {
  //         console.log(error);
  //       });
  //   };
  //   fetchSomethingById();
  // }, [id]);

  // if (!myList) {
  //   return null;
  // }
  return (
    <div className="w-full h-screen text-white bg-black">
      {id}
      {/* <Image
        src={`https://image.tmdb.org/t/p/w500${myList.backdrop_path}`}
        width={"100%"}
        height={"50%"}
        layout="responsive"
      />
      <div className="p-6 font-light text-white">
        <h1 className="my-4 font-bold">{myList.original_title}</h1>
        <div className="w-10/12 -ml-1 ">
          <ul className="flex items-center justify-around text-sm list-none">
            <li className="pr-2 border-r">
              {myList.release_date.substring(0, 4)}
            </li>
            <li className="p-1 border">
              {myList.release_dates.results[0].release_dates[0].certification}
            </li>
            <li className="px-2 border-l border-r">{myList.runtime}m</li>
            <li className="">{myList.genres[0].name}</li>
          </ul>
        </div>
        <h2 className="mt-4">{myList.overview}</h2>
      </div> */}
    </div>
  );
};

export default Details;
