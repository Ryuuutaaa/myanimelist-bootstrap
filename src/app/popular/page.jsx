"use client";

import ListAnime from "@/components/ListAnime/page";
import Header from "@/components/utilities/Header";
import PaginationBottom from "@/components/utilities/Pagination";
import { getAnimeResponse } from "@/libs/api-libs";
import { useEffect } from "react";
import { useState } from "react";

const Page = () => {
  const [pagess, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState([]);

  const fetchData = async () => {
    const response = await getAnimeResponse("top/anime", `page=${pagess}`);
    const data = await response.json();
    setTopAnime(data);
  };

  useEffect(() => {
    fetchData();
  }, [pagess]);

  return (
    <div>
      <div>
        <Header title={`ANIME POPULAR #${pagess}`} />
        <ListAnime popular={topAnime} />
        <PaginationBottom
          page={pagess}
          setPage={setPage}
          lastPage={topAnime.pagination?.last_visible_page}
        />
      </div>
    </div>
  );
};

export default Page;
