import { useState } from "react";
import axios from "axios";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleLogin = () => {
        axios.post("http://localhost:5001/login", {
            username,
            password,
        })
        .then((response) => {
            setMessage(response.data.message);
        })
        .catch((error) => {
            setMessage(error.response ? error.response.data.message : "Erreur de connexion.");
        });
    };

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h2>Connexion</h2>
            <input
                type="name"
                placeholder="Nom d'utilisateur"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={{ marginBottom: "10px" }}
            /><br />
            <input
                type="password"
                placeholder="Mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ marginBottom: "10px" }}
            /><br />
            <button onClick={handleLogin}>Se connecter</button>
            <p>{message}</p>
        </div>
    );
};

export default Login;
