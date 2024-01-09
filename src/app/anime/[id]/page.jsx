import VideoPlayer from "@/components/utilities/VideoPlayer";
import "../../../app/public/styles/cards.css";
import { getAnimeResponse } from "@/libs/api-libs";
import Synopsis from "@/components/ListAnime/Synopsis";

const page = async ({ params: { id } }) => {
  const anime = await getAnimeResponse(`anime/${id}`);
  const karakter = await getAnimeResponse(`anime/${id}/characters`);
  const staffAnime = await getAnimeResponse(`anime/${id}/staff`);

  const trailerYoutubeId = anime.data.trailer?.youtube_id;

  function formatDate(dateString) {
    const date = new Date(dateString);
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Des"];
    const day = date.getDate().toString().padStart(2, "0");
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();

    return `${month} ${day}${year !== 0 ? `, ${year}` : ""}`;
  }

  return (
    <div>
      <div className="container-fluid ">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mt-5">
              <div className="card overflow-hidden self-center rounded">
                <img src={anime.data?.images.jpg.large_image_url} alt={`poster for ${anime.data?.title}`} className="d-none d-md-block card-img-top" />
              </div>
            </div>
            <div className="col-md-8 mt-5 text-white">
              <div className="col-lg-12">
                <div className="mb-3">
                  <h4 className="text-white font-weight-bold mb-1">{anime.data?.title}</h4>
                  <span className="text-secondary text-sm d-block">
                    {anime.data?.title_japanese}, {anime.data?.title}
                  </span>
                </div>

                <Synopsis anime={anime} />

                <div className="my-4 row">
                  <div className="col-md-6">
                    <ul className="list-unstyled">
                      <li>
                        <span className="text-white text-sm">Type:</span> {anime.data.type ? anime.data.type : "?"}, source: {anime.data.source ? anime.data.source : "?"}
                      </li>
                      <li className="d-flex">
                        <span className="text-white text-sm">Studios:</span>{" "}
                        <ul className="list-unstyled ms-2">
                          {anime.data.studios.map((studio) => (
                            <li key={studio.mal_id}>{studio.name}</li>
                          ))}
                        </ul>
                      </li>
                      <li>
                        <span className="text-white text-sm">Status:</span> {anime.data.status}
                      </li>
                      <li>
                        <span className="text-white text-sm">Date Aired:</span> {anime.data.aired.from ? formatDate(anime.data.aired.from) : "?"} to {anime.data.aired.to ? formatDate(anime.data.aired.to) : "?"}
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul className="list-unstyled">
                      <li>
                        <span className="text-white text-sm">Rating:</span> {anime.data.rating ? anime.data.rating : "?"}
                      </li>
                      <li>
                        <span className="text-white text-sm">Durations:</span> {anime.data.duration ? anime.data.duration : "?"}
                      </li>
                      <li>
                        <span className="text-white text-sm">Scores:</span> {anime.data.score ? anime.data.score : "?"} / 10
                      </li>
                      <li>
                        <span className="text-white text-sm">Genre:</span> {anime.data.genres.map((genre) => genre.name).join(", ")}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="my-5">{trailerYoutubeId && <VideoPlayer youtubeId={trailerYoutubeId} />}</div>

        <div className="my-5 mx-3 px-3 px-lg-5 mx-lg-5 px-md-4 mx-md-4">
          <h4 className="ms-2 my-2">Character in : {anime.data.title}</h4>
          <div className="row text-center">
            {karakter.data.slice(0, 12).map((c, index) => (
              <div className="col-2" key={index}>
                <div>
                  <img src={c.character.images.jpg.image_url} alt="" className="img-style rounded-2 border border-secondary" />
                  <div className="fs-6 mb-5">{c.character.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
