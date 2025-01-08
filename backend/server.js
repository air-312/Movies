import express from 'express';
import cors from 'cors';
import mysql from 'mysql2';
import bodyParser from 'body-parser';
import dotenv from 'dotenv'

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Configuration de la connexion MySQL
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
     password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
     port: process.env.DB_PORT,
});

db.connect((err) => {
    if (err) {
        console.log("Erreur de connexion à la base de données", err);
    } else {
        console.log("Connecté à la base de données MySQL.");
    }
});

// Route pour la connexion
app.post("/login", (req, res) => {
    const { username, password } = req.body;

    const query = "SELECT * FROM users WHERE username = ? AND password = ?";
    db.query(query, [username, password], (err, result) => {
        if (err) {
            res.status(500).send({ message: "Erreur serveur" });
        } else if (result.length > 0) {
            res.send({ message: "Connexion réussie !" });
        } else {
            res.status(401).send({ message: "Nom d'utilisateur ou mot de passe incorrect." });
        }
    });
});

// Route pour l'inscription
app.post("/register", (req, res) => {
    const { username, name, email, phone, password } = req.body;

    const query = "INSERT INTO users (username, name, email, phone, password) VALUES (?, ?, ?, ?, ?)";
    db.query(query, [username, name, email, phone, password], (err, result) => {
        if (err) {
            if (err.code === "ER_DUP_ENTRY") {
                res.status(400).send({ message: "L'email est déjà utilisé." });
            } else {
                res.status(500).send({ message: "Erreur serveur." });
            }
        } else {
            res.send({ message: "Inscription réussie !" });
        }
    });
});

// Route pour récupérer tous les films avec leurs genres
app.get("/movies", (req, res) => {
    const query = `
        SELECT 
            movies.id, 
            movies.title, 
            movies.description, 
            movies.release_date, 
            movies.director,
            movies.cover_image,
            movies.presentation_image,
            movies.trailer_video,
            movies.movies_movies_file,
            GROUP_CONCAT(genres.name SEPARATOR ', ') AS genres
        FROM 
            movies
        LEFT JOIN 
            movie_genres ON movies.id = movie_genres.movie_id
        LEFT JOIN 
            genres ON movie_genres.genre_id = genres.id
        GROUP BY 
            movies.id
    `;

    db.query(query, (err, results) => {
        if (err) {
            console.error("Erreur lors de la récupération des films :", err);
            res.status(500).send({ message: "Erreur serveur.", error: err });
        } else {
            res.send(results);
        }
    });
});



// Route pour ajouter un film avec ses genres
app.post("/movies", (req, res) => {
    const { title, description, release_date, director, genres } = req.body;

    const insertMovieQuery = "INSERT INTO movies (title, description, release_date, director) VALUES (?, ?, ?, ?)";
    db.query(insertMovieQuery, [title, description, release_date, director], (err, result) => {
        if (err) {
            res.status(500).send({ message: "Erreur serveur.", error: err });
        } else {
            const movieId = result.insertId;

            // Associer les genres au film
            const genreQueries = genres.map((genreId) => [movieId, genreId]);
            const insertGenresQuery = "INSERT INTO movie_genres (movie_id, genre_id) VALUES ?";
            db.query(insertGenresQuery, [genreQueries], (err) => {
                if (err) {
                    res.status(500).send({ message: "Erreur lors de l'association des genres.", error: err });
                } else {
                    res.send({ message: "Film ajouté avec succès !" });
                }
            });
        }
    });
});

// --- Routes Commentaires et Notations ---

// Route pour récupérer les commentaires d'un film
app.get("/movies/:id/comments", (req, res) => {
    const movieId = req.params.id;

    const query = `
        SELECT 
            comments.id, 
            comments.comment, 
            comments.rating, 
            comments.created_at, 
            users.username 
        FROM 
            comments
        JOIN 
            users ON comments.user_id = users.id
        WHERE 
            comments.movie_id = ?
        ORDER BY 
            comments.created_at DESC
    `;

    db.query(query, [movieId], (err, results) => {
        if (err) {
            res.status(500).send({ message: "Erreur serveur.", error: err });
        } else {
            res.send(results);
        }
    });
});

// Route pour ajouter un commentaire et une note à un film
app.post("/movies/:id/comments", (req, res) => {
    const movieId = req.params.id;
    const { userId, comment, rating } = req.body;

    const query = `
        INSERT INTO comments (movie_id, user_id, comment, rating) 
        VALUES (?, ?, ?, ?)
    `;
    db.query(query, [movieId, userId, comment, rating], (err) => {
        if (err) {
            res.status(500).send({ message: "Erreur serveur.", error: err });
        } else {
            res.send({ message: "Commentaire ajouté avec succès !" });
        }
    });
});

// Route pour récupérer la note moyenne et le total des évaluations d'un film
app.get("/movies/:id/rating", (req, res) => {
    const movieId = req.params.id;

    const query = `
        SELECT 
            AVG(rating) AS average_rating, 
            COUNT(*) AS total_reviews 
        FROM 
            comments
        WHERE 
            movie_id = ?
    `;

    db.query(query, [movieId], (err, results) => {
        if (err) {
            res.status(500).send({ message: "Erreur serveur.", error: err });
        } else {
            res.send(results[0]);
        }
    });
});



app.use((req, res, next) => {
    res.status(404).send('Page not')
})
const PORT= process.env.PORT;
app.listen(PORT, () => {
    console.log(`Serveur backend en écoute sur le port ${PORT}`);
});

