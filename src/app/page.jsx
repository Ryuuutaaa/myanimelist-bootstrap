import MyCarousel from "@/components/Caraousel/page";

import Upcoming from "@/components/ListAnime/Upcoming";
import ListAnime from "@/components/ListAnime/page";
import Navbar from "@/components/Navbar/page";

const Home = async () => {
  const API = process.env.NEXT_PUBLIC_API_BASE_URL;

  const response = await fetch(`${API}/top/anime?limit=12`);
  const response1 = await fetch(`${API}/genres/anime`);
  const upcoming = await fetch(`${API}/seasons/upcoming?limit=12`);

  const topAnime = await response.json();
  const genresAnime = await response1.json();
  const upcomingAnime = await upcoming.json();
  return (
    <div>
      <Navbar />
      <MyCarousel api={topAnime} />
      <div style={{ paddingTop: "100px" }}>
        <ListAnime popular={topAnime} title="Popular" view="View All" />
        <Upcoming upcoming={upcomingAnime} title="Upcoming" view="View All" />
      </div>
    </div>
  );
};

export default Home;
