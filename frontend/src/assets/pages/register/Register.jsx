import { useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import axios from "axios";
import iconDanger from "../../images/Icons/danger.png";
import "../login/Login.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
    const navigate = useNavigate();

  const handleRegister = () => {
    axios
      .post("http://localhost:5001/register", {
        username,
        name,
        email,
        phone,
        password,
      })
      .then((response) => {
          if (response === 200) {
            navigate('/login')
        }
      })
      .catch((error) => {
        setMessage(
          error.response ? error.response.data.message : "Erreur d'inscription."
        );
      });
  };

  return (
    <div
      style={{ height: "100vh", flexDirection: "column" }}
      className="d-flex justify-content-center align-items-center container-log"
    >
      {message && (
        <p
          style={{
            position: "absolute",
            top: "0px",
            backgroundColor: "#ff0000",
          }}
          className="text-light px-5 rounded"
        >
          {message}
          <img
            style={{
              position: "absolute",
              width: "30px",
              left: "6px",
              bottom: "12px",
            }}
            src={iconDanger}
            alt=""
          />
        </p>
      )}

      <div
        style={{
          position: "relative",
          height: "auto",
          width: "400px",
          flexDirection: "column",
        }}
        className="d-flex gap-3 p-5 form"
      >
        <h2 className="text-light">Inscription</h2>

        <div className="user">
          <label htmlFor="user">Nom d&apos;utilisateur</label>
          <input
            type="text"
            id="user"
            placeholder="Choisissez un nom d'utilisateur"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="name">
          <label htmlFor="name">Nom</label>
          <input
            type="text"
            id="name"
            placeholder="Nom complet"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="email">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="tel">
          <label htmlFor="tel">Numéro de téléphone</label>
          <input
            type="tel"
            id="tel"
            placeholder="Numéro de téléphone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div className="pssd">
          <label htmlFor="pssd">Créez un mot de passe</label>
          <input
            type="password"
            id="pssd"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          onClick={handleRegister}
          className="border-0 text-light py-2 rounded"
          style={{ backgroundColor: "#ff0000" }}
        >
          S&apos;inscrire
        </button>
        <div style={{flexDirection:'column'}} className="d-flex gap-2 justify-content-center align-items-center links">
                    
                    <p className="text-light-emphasis">Vous avez déja un compte ? <Link to={'/login'} className="text-light"> Connectez-vous.</Link></p>
                </div>
        <div className="restructuring">
          <p className="text-light text-center">
            Nous respectons votre vie privée et protégeons vos données
            personnelles.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
