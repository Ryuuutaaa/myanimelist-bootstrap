import Link from "next/link";
import AnimeCard from "./AnimeCard";

const ListAnime = ({ popular, title, view, api }) => {
  return (
    <>
      <div className="container">
        <div className="text-decoration-none text-white d-flex justify-content-between px-3">
          <h3>{title ? title : null}</h3>
          <h5 className="align-content-center">
            <Link href={"/popular"} className="text-white">
              {view ? view : null}
            </Link>
          </h5>
        </div>
        <div className="row">
          {popular.data?.map((anime) => (
            <AnimeCard
              key={anime.mal_id}
              id={anime.mal_id}
              AnimeImage={anime.images.jpg.image_url}
              AnimeTitle={anime.title}
              score={anime.score}
              rank={anime.rank}
              episode={anime.episodes}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ListAnime;
