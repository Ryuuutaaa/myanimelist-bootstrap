import Navbar from "@/components/Navbar/page";
import VideoPlayer from "@/components/utilities/VideoPlayer";

const page = async ({ params: { id } }) => {
  const API = process.env.NEXT_PUBLIC_API_BASE_URL;

  const response = await fetch(`${API}/anime/${id}`);

  const anime = await response.json();

  console.log(anime);
  return (
    <div
      className="bg-black text-white"
      style={{ height: "120vh", width: "100%" }}
    >
      <div className="container-fluid pt-5 fs-6 ">
        <div className="d-flex mx-3">
          <div className="me-3">
            <img src={anime.data.images.webp.image_url} alt="" />

            <div className="d-flex mt-3">
              <p className="pe-5">Rate : {anime.data.score}</p>
              <p>Rank : {anime.data.rank}</p>
            </div>
          </div>

          <table class="table">
            <tbody>
              <tr>
                <th scope="row">Title </th>
                <td>
                  {anime.data.title} ({anime.data.title_japanese})
                </td>
              </tr>
              <tr>
                <th scope="row">Genre </th>
                <td>
                  {anime.data.genres.map((genre) => genre.name).join(",")}
                </td>
              </tr>
              <tr>
                <th scope="row">Episode </th>
                <td>{anime.data.episodes}</td>
              </tr>
              <tr>
                <th scope="row">synopsis </th>
                <td>
                  {anime.data.synopsis.replace(
                    /\[Written by MAL Rewrite\]/g,
                    ""
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
      </div>
    </div>
  );
};

export default page;
