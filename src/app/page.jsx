import MyCarousel from "@/components/Caraousel/page";

import Upcoming from "@/components/ListAnime/Upcoming";
import ListAnime from "@/components/ListAnime/page";
import { getAnimeResponse } from "@/libs/api-libs";

const Home = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=12");
  const genresAnime = await getAnimeResponse(`genres/anime`);
  const upcoming = await getAnimeResponse("seasons/upcoming", "limit=12");

  return (
    <div>
      <MyCarousel api={topAnime} />
      <div style={{ paddingTop: "100px" }}>
        <ListAnime popular={topAnime} title="Popular" view="View All" />
        <Upcoming upcoming={upcoming} title="Upcoming" view="View All" />
      </div>
    </div>
  );
};

export default Home;
