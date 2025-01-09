import { useEffect, useState } from "react";
import "./MovieList.css";
import { useParams } from "react-router-dom";

const Movie = () => {
    const SERVER_IP = `${import.meta.env.VITE_SERVER_IP}`;
    const [currentMovieDetail, setMovie] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        fetchMovieDetails();
        window.scrollTo(0, 0);
    }, []);

    const fetchMovieDetails = async () => {
        try {
            const response = await fetch(`${SERVER_IP}/movies/${id}`);
            const data = await response.json();
            setMovie(data);
        } catch (err) {
            console.error("Erreur lors de la récupération des détails du film :", err);
        }
    };

    return (
        <div style={{paddingTop:"400px"}} className="movie">
            {currentMovieDetail ? (
                <>
                    <div className="movie__intro">
                        <img
                            className="movie__backdrop"
                            src={currentMovieDetail.cover_image}
                            alt={`${currentMovieDetail.title} backdrop`}
                        />
                    </div>
                    <div className="movie__detail">
                        <div className="movie__detailLeft">
                            <div className="movie__posterBox">
                                <img
                                    className="movie__poster"
                                    src={currentMovieDetail.presentation_image}
                                    alt={`${currentMovieDetail.title} poster`}
                                />
                                <button
                                    className="play"
                                    onClick={() =>
                                        window.open(currentMovieDetail.trailer_video, "_blank")
                                    }
                                >
                                    Play <i className="fas fa-play" />
                                </button>
                            </div>
                        </div>
                        <div className="movie__detailRight">
                            <div className="movie__detailRightTop">
                                <div className="movie__name">{currentMovieDetail.title}</div>
                                <div className="movie__director">
                                    Directed by: {currentMovieDetail.director || "Unknown"}
                                </div>
                                <div className="movie__releaseDate">
                                    Release date: {currentMovieDetail.release_date || "N/A"}
                                </div>
                                <div className="movie__genres">
                                    Genres: {currentMovieDetail.genres || "Not specified"}
                                </div>
                            </div>
                            <div className="movie__detailRightBottom">
                                <div className="synopsisText">Synopsis</div>
                                <div>{currentMovieDetail.description || "No description available."}</div>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <div>Loading movie details...</div>
            )}
        </div>
    );
};

export default Movie;
