import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Catalogue.css";
import { Link } from "react-router-dom";

const Catalogue = () => {
    const SERVER_IP = `${import.meta.env.VITE_SERVER_IP}`;
    const [popularMovies, setPopularMovies] = useState([]);
    const [list, setList] = useState([])
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch(`${SERVER_IP}/movies`);
                if (!response.ok) {
                    throw new Error ('errur de serveur')
                }
                const data = await response.json();
                setPopularMovies(data); 
                setList(data);
            } catch (err) {
                console.error("Erreur lors de la récupération :", err);
                setError(err.message)
            }
        };

        fetchMovies();
    }, [SERVER_IP]);

    if (error) {
        return <div>Erreur : {error}</div>
    }
    if (!popularMovies.length) {
        return <div>Pas de film disponible.</div>
    }

    return (
        <>
            <div className="poster">
                <Carousel
                    showThumbs={false}
                    showArrows={false}
                    autoPlay={true}
                    transitionTime={2}
                    infiniteLoop={true}
                    showStatus={false}
                    swipeable={true}
                >
                    {popularMovies.map((movie) => (
                        <Link to={`/movie/${movie.id}`} key={movie.id}>
                            <div className="posterImage">
                                <img 
                                    src={movie.cover_image} 
                                    alt={movie.title || "Image indisponible"} 
                                />
                            </div>
                            <div className="posterImage_overlay">
                                <div className="posterImage__title">
                                    {movie.title || "Titre indisponible"}
                                </div>
                                <div className="poster__runtime">
                                    <span className="posterImage__rating">
                                        {movie.vote_average || "N/A"}
                                        <i className="fas fa-star" />
                                    </span>
                                </div>
                                <div className="posterImage__description">
                                    {movie.description || "Pas de description."}
                                </div>
                            </div>
                        </Link>
                    ))}
                </Carousel>
            </div>
            <div 
                style={{
                    overflowX:'auto',
                    width:'100%'
                }}
                className="list-movie p-5 d-flex">
                {list.map((movie) =>(
                    <div key={movie.id} className="">
                        <img
                            className=""
                            style={{height:'200px', width:'250px'}}
                            src={movie.cover_image} 
                            alt={movie.title || 'Titre indisponible'} 
                        />
                    </div>
                ))}
            </div>
            
        </>
    );
};

export default Catalogue;
