import { useState } from "react";
import axios from "axios";

const Register = () => {
    const [username, setUsername] = useState("");
    const [name, setName] = useState("")
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleRegister = () => {
        axios.post("http://localhost:5001/register", {
            username,
            name,
            email,
            phone,
            password,
        })
        .then((response) => {
            setMessage(response.data.message);
        })
        .catch((error) => {
            setMessage(error.response ? error.response.data.message : "Erreur d'inscription.");
        });
    };

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h2>Inscription</h2>
            <input
                type="text"
                placeholder="Choisissez un nom d'utilisateur"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={{ marginBottom: "10px" }}
            /><br />
            <input
                type="name"
                placeholder="Nom complet"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ marginBottom: "10px" }}
            /><br />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ marginBottom: "10px" }}
            /><br />
            <input
                type="tel"
                placeholder="Numéro de téléphone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                style={{ marginBottom: "10px" }}
            /><br />
            <input
                type="password"
                placeholder="Mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ marginBottom: "10px" }}
            /><br />
            <button onClick={handleRegister}>S&apos;inscrire</button>
            <p>{message}</p>
        </div>
    );
};

export default Register;
