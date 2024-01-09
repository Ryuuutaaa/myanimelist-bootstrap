import MyCarousel from "@/components/Caraousel/page";

import Upcoming from "@/components/ListAnime/Upcoming";
import ListAnime from "@/components/ListAnime/page";
import { getAnimeResponse } from "@/libs/api-libs";
import Link from "next/link";

const Home = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=12");
  const genresAnime = await getAnimeResponse(`genres/anime`);
  const upcoming = await getAnimeResponse("seasons/upcoming", "limit=12");

  return (
    <div>
      <MyCarousel api={topAnime} />
      <div style={{ paddingTop: "100px" }}>
        <ListAnime popular={topAnime} title="Popular" view="View All" />
        <div className="container">
          <div className="text-decoration-none text-white d-flex justify-content-between px-3">
            <h3>Upcoming</h3>
            <h5 className="align-content-center">
              <Link href={"/upcoming"} className="text-white">
                View All
              </Link>
            </h5>
          </div>
          <Upcoming upcoming={upcoming} title="Upcoming" view="View All" />
        </div>
      </div>
    </div>
  );
};

export default Home;
