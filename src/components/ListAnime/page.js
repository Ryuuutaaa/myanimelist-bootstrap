import Link from "next/link";
import AnimeCard from "./AnimeCard";

const ListAnime = ({ popular, genresAnime, title, view }) => {
  return (
    <>
      <div className="container">
        <div className="text-decoration-none text-white d-flex justify-content-between px-3">
          <h3>{title}</h3>
          <h5 className="align-content-center">
            <Link href={"/popular"} className="text-white">
              {view}
            </Link>
          </h5>
        </div>
        <div className="row">
          {popular.data.map((anime) => (
            <AnimeCard
              key={anime.mal_id}
              id={anime.mal_id}
              AnimeImage={anime.images.jpg.image_url}
              AnimeTitle={anime.title}
              genresAnime={genresAnime}
              score={anime.score}
              rank={anime.rank}
              episode={anime.episodes}
              genres={anime.genres.map((genre) => genre.name)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ListAnime;
