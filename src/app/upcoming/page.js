import MyCarousel from "@/components/Caraousel/page";
import Upcoming from "@/components/ListAnime/Upcoming";
import ListAnime from "@/components/ListAnime/page";
import Navbar from "@/components/Navbar/page";

const Home = async () => {
  const API = process.env.NEXT_PUBLC_API_BASE_URL;

  const response = await fetch(`${API}/top/anime?limit=12`);

  const upcoming = await fetch(`${API}/seasons/upcoming`);

  const topAnime = await response.json();

  const upcomingAnime = await upcoming.json();
  return (
    <div className="bg-black">
      <Navbar />
      <MyCarousel api={topAnime} />
      <div style={{ paddingTop: "100px" }}>
        <Upcoming upcoming={upcomingAnime} title="Upcoming" view="View All" />
      </div>
    </div>
  );
};

export default Home;
