"use client";

import Upcoming from "@/components/ListAnime/Upcoming";
import ListAnime from "@/components/ListAnime/page";
import Header from "@/components/utilities/Header";
import PaginationBottom from "@/components/utilities/Pagination";
import { getAnimeResponse } from "@/libs/api-libs";
import { useState, useEffect } from "react";

const Home = () => {
  const [pagess, setPage] = useState(1);
  const [upcomingAnime, setUpcomingAnime] = useState([]);

  const fetchData = async () => {
    const data = await getAnimeResponse("seasons/upcoming", `page=${pagess}`);
    setUpcomingAnime(data);
  };

  useEffect(() => {
    fetchData();
  }, [pagess]);
  return (
    <div className="bg-black">
      <div>
        <Header title={`UPCOMING ANIME #${pagess}`} />
        <Upcoming upcoming={upcomingAnime} />
        <PaginationBottom
          page={pagess}
          setPage={setPage}
          lastPage={upcomingAnime.pagination?.last_visible_page}
        />
      </div>
    </div>
  );
};

export default Home;
