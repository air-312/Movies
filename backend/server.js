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
    host: "localhost",
    user: "root",
    password: "",
    database: "movies_db"
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


const PORT= process.env.PORT;
app.listen(PORT, () => {
    console.log(`Serveur backend en écoute sur le port ${PORT}`);
});

