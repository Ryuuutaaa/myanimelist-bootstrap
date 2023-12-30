import Link from "next/link";
import "../../app/public/styles/cards.css";

const AnimeCard = ({ AnimeImage, AnimeTitle, id }) => {
  return (
    <>
      <div className="col-lg-3 col-md-4 col-sm-6 mb-4 fs-6">
        <Link href={`/${id}`} className="text-decoration-none">
          <div className=" p-3 .cards-style" s>
            <img
              src={AnimeImage}
              className="card-img-top img-style"
              alt={AnimeTitle}
            />
            <div className="card-body">
              <p className="card-title text-center py-2 text-white .font-title">
                <strong>{AnimeTitle}</strong>
              </p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default AnimeCard;
