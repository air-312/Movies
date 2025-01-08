import { useEffect, useState } from 'react';
import axios from 'axios';

const Catalogue = () => {
    const [movies, setMovies] = useState([]); // État pour les films
    const [selectedMovie, setSelectedMovie] = useState(null); // Film sélectionné
    const [error, setError] = useState(''); // Gestion des erreurs

    // Récupération des films depuis le backend
    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get('http://localhost:5001/movies');
                setMovies(response.data);
            } catch (err) {
                setError('Erreur lors de la récupération des films.');
                console.error(err);
            }
        };
        fetchMovies();
    }, []);

    return (
        <div className="container text-light mt-4">
            <h1 className="text-center">Catalogue des Films</h1>

            {/* Affichage des erreurs */}
            {error && <p className="text-danger">{error}</p>}

            {/* Liste des films */}
            <div className="row">
                {movies.map((movie) => (
                    <div className="col-md-4 mb-4" key={movie.id}>
                        <div className="card bg-dark text-light">
                            {/* Image de couverture */}
                            <img
                                src={movie.cover_image}
                                alt={movie.title}
                                className="card-img-top"
                                style={{ height: "200px", objectFit: "cover" }}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{movie.title}</h5>
                                <p className="card-text">{movie.description}</p>
                                <p><strong>Genres : </strong>{movie.genres}</p>
                                <p><strong>Réalisateur : </strong>{movie.director}</p>
                                <p>
                                    <strong>Date de sortie : </strong>
                                    {new Date(movie.release_date).toLocaleDateString()}
                                </p>
                                <button
                                    className="btn btn-secondary mt-3"
                                    onClick={() => setSelectedMovie(movie)}
                                >
                                    Voir les détails
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Section des détails du film */}
            {selectedMovie && (
                <div className="mt-4">
                    <h2>Détails pour {selectedMovie.title}</h2>

                    {/* Image de présentation */}
                    {selectedMovie.presentation_image && (
                        <img
                            src={selectedMovie.presentation_image}
                            alt={selectedMovie.title}
                            className="img-fluid mb-4"
                        />
                    )}

                    {/* Vidéo de bande-annonce */}
                    {selectedMovie.trailer_video && (
                        <div className="mb-4">
                            <h3>Bande-Annonce</h3>
                            <video
                                src={selectedMovie.trailer_video}
                                controls
                                className="w-100"
                                style={{ maxHeight: "400px" }}
                            />
                        </div>
                    )}

                    {/* Fichier du film */}
                    {selectedMovie.movies_movies_file && (
                        <div>
                            <h3>Film Complet</h3>
                            <a
                                href={selectedMovie.movies_movies_file}
                                className="btn btn-primary"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Télécharger le film
                            </a>
                        </div>
                    )}

                    <button
                        className="btn btn-danger mt-3"
                        onClick={() => setSelectedMovie(null)}
                    >
                        Fermer les détails
                    </button>
                </div>
            )}
        </div>
    );
};

export default Catalogue;
