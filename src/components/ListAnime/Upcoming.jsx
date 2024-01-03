import Link from "next/link";
import "../../app/public/styles/cards.css";

Link;

const Upcoming = ({ upcoming }) => {
  return (
    <div className="container">
      <div className="text-decoration-none text-white d-flex justify-content-between px-3">
        <h3>Upcoming</h3>
        <h5 className="align-content-center">
          <Link href={"/upcoming"} className="text-white">
            View All
          </Link>
        </h5>
      </div>
      <div className="row">
        {upcoming.data?.map((anime, index) => (
          <div
            className="col-lg-3 col-md-4 col-sm-6 mb-4 fs-6 card-effect"
            key={index}
          >
            <Link
              href={`/anime/${anime.mal_id}`}
              className="text-decoration-none"
            >
              <div className=" p-3 .cards-style">
                <img
                  src={anime.images.jpg.image_url}
                  className="card-img-top img-style"
                  alt={anime.title}
                />
                <div className="card-body">
                  <p className="card-title text-center py-2 text-white">
                    <strong>{anime.title}</strong>
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Upcoming;
