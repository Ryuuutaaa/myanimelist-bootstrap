import ListAnime from "@/components/ListAnime/page";
import Navbar from "@/components/Navbar/page";

const Page = async ({ params }) => {
  const keyword = params.keyword;
  const API = process.env.NEXT_PUBLIC_API_BASE_URL;

  const decodeKeyword = decodeURI(keyword);

  const response = await fetch(`${API}/anime?q=${decodeKeyword}`);
  const response1 = await fetch(`${API}/genres/anime`);

  const searchAnime = await response.json();
  const genresAnime = await response1.json();

  return (
    <div>
      <Navbar />
      <div style={{ paddingTop: "100px" }}>
        <ListAnime popular={searchAnime} genres={genresAnime} />
      </div>
    </div>
  );
};

export default Page;
