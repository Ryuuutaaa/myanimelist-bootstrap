import ListAnime from "@/components/ListAnime/page";
import { getAnimeResponse } from "@/libs/api-libs";

const Page = async ({ params }) => {
  const keyword = params.keyword;
  const decodeKeyword = decodeURI(keyword);
  const searchAnime = await getAnimeResponse("anime", `q=${decodeKeyword}`);
  const genresAnime = await getAnimeResponse("genres/anime");

  return (
    <div>
      <div style={{ paddingTop: "100px" }}>
        <ListAnime popular={searchAnime} genres={genresAnime} />
      </div>
    </div>
  );
};

export default Page;
