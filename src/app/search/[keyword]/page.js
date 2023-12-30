import ListAnime from "@/components/ListAnime/page";
import Navbar from "@/components/Navbar/page";

const Page = async ({ params }) => {
  const keyword = params.keyword;
  const API = process.env.NEXT_PUBLC_API_BASE_URL;

  const response = await fetch(`${API}/anime?q=${keyword}`);
  const response1 = await fetch(`${API}/genres/anime`);

  const searchAnime = await response.json();
  const genresAnime = await response1.json();

  return (
    <div className="bg-black">
      <Navbar />
      <div style={{ paddingTop: "100px" }}>
        <ListAnime api={searchAnime} genres={genresAnime} />
      </div>
    </div>
  );
};

export default Page;
