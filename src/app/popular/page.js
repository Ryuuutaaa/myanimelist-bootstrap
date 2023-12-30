import MyCarousel from "@/components/Caraousel/page";
import Upcoming from "@/components/ListAnime/Upcoming";
import ListAnime from "@/components/ListAnime/page";
import Navbar from "@/components/Navbar/page";

const Page = async ({ params }) => {
  const keyword = params.keyword;
  const API = process.env.NEXT_PUBLC_API_BASE_URL;

  const response = await fetch(`${API}/top/anime`);
  const response1 = await fetch(`${API}/genres/anime`);

  const topAnime = await response.json();
  const genresAnime = await response1.json();

  return (
    <div className="bg-black">
      <Navbar />
      <MyCarousel api={topAnime} />
      <div style={{ paddingTop: "100px" }}>
        <ListAnime
          popular={topAnime}
          genres={genresAnime}
          title="Popular"
          view="View All"
        />
      </div>
    </div>
  );
};

export default Page;
