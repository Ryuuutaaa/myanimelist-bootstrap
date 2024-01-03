"use client";

import Upcoming from "@/components/ListAnime/Upcoming";
import ListAnime from "@/components/ListAnime/page";
import Navbar from "@/components/Navbar/page";
import Header from "@/components/utilities/Header";
import PaginationBottom from "@/components/utilities/Pagination";
import { useState, useEffect } from "react";

const Home = () => {
  const [pagess, setPage] = useState(1);
  const [upcomingAnime, setUpcomingAnime] = useState([]);
  const API = process.env.NEXT_PUBLIC_API_BASE_URL;

  const fetchData = async () => {
    const response = await fetch(`${API}/seasons/upcoming?page=${pagess}`);
    const data = await response.json();
    setUpcomingAnime(data);
  };

  useEffect(() => {
    fetchData();
  }, [pagess]);
  return (
    <div className="bg-black">
      <Navbar />
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
