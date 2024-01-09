import VideoPlayer from "@/components/utilities/VideoPlayer";
import "../../../app/public/styles/cards.css";

const page = async ({ params: { id } }) => {
  const API = process.env.NEXT_PUBLIC_API_BASE_URL;

  const response = await fetch(`${API}/anime/${id}`);
  const response1 = await fetch(`${API}/anime/${id}/characters`);
  const response2 = await fetch(`${API}/anime/${id}/staff`);

  const anime = await response.json();
  const karakter = await response1.json();
  const staffAnime = await response2.json();

  console.log(karakter);

  const trailerYoutubeId = anime.data.trailer?.youtube_id;

  return (
    <div>
      <div class="container-fluid ">
        {trailerYoutubeId && <VideoPlayer youtubeId={trailerYoutubeId} />}
        <div class="row align-items-center mt-5">
          <div class="col-3 text-center">
            <div>
              <img
                src={anime.data.images.jpg.image_url}
                alt=""
                className="rounded-2 border border-secondary
                "
              />
            </div>
            <div className="d-flex justify-content-evenly fs-5 mt-3">
              {anime.data.score ? (
                <>
                  <div className="d-flex align-items-center justify-content-center text-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-star-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <p className="my-3 mx-2">
                      {anime.data.score ? anime.data.score : "-"}
                    </p>
                  </div>
                </>
              ) : (
                "-"
              )}

              {anime.data.rank ? (
                <>
                  <div className="d-flex align-items-center justify-content-center text-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      class="bi bi-trophy-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5q0 .807-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33 33 0 0 1 2.5.5m.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935m10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935" />
                    </svg>
                    <p className="my-3 mx-2">
                      {anime.data.rank ? anime.data.rank : "-"}
                    </p>
                  </div>
                </>
              ) : (
                "-"
              )}
            </div>
          </div>
          <div class="col-8 fs-5">
            <div className="fs-3">{anime.data.title}</div>
            <p className="text-secondary fs-">{anime.data.title_japanese}</p>
            <div>
              <p>
                {anime.data.genres
                  .map((genre) => (genre.name ? genre.name : "-"))
                  .join(", ")}
              </p>
            </div>
            <div>
              <p>
                {anime.data.synopsis
                  ? anime.data.synopsis
                      .replace("[Written by MAL Rewrite]")
                      .slice(0, 500)
                  : "-"}
              </p>
            </div>
            <div>
              {anime.data.year ? <>year : {anime.data.year}</> : "-"}
              &nbsp;&nbsp;&nbsp;
              {anime.data.episodes ? <>eps : {anime.data.episodes}</> : "-"}
            </div>
          </div>
        </div>
        <div className="my-5">
          <h3 className="ms-2">Chracter</h3>
          <div className="row text-center">
            {karakter.data.slice(0, 12).map((c, index) => (
              <div className="col-2" key={index}>
                <div>
                  <img
                    src={c.character.images.jpg.image_url}
                    alt=""
                    className="img-style rounded-2 border border-secondary"
                  />
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
