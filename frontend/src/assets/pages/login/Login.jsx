import { useState } from "react";
import axios from "axios";
import iconDanger from '../../images/Icons/danger.png'
import './Login.css'
import { Link, useNavigate} from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleLogin = () => {
        axios
        .post("http://192.168.1.195:5001/login", {
            username,
            password,
        })
        .then((response) => {
            if (response.status === 200) {
                navigate('/catalogue')
            }
        })
        .catch((error) => {
            setMessage(error.response ? error.response.data.message : "Une erreur est survenue !");
        });
    };

    return (
        <div
            style={{ height: '100vh', flexDirection:'column' }}
            className="d-flex justify-content-center align-items-center container-log"
        >           
            {message && (

                <p style={{ position: 'absolute', top: '90px', backgroundColor:'#ff0000' }}
                    className="text-light px-5 rounded"
                >
                    {message}
                    <img style={{position:'absolute',width:'30px', left:'6px', bottom:'12px'}} src={iconDanger} alt="" />
                </p>
            )}
            <div
                style={{
                    position: 'relative',
                    height: 'auto',
                    width: '400px',
                    flexDirection: 'column'
                }}
                className="d-flex gap-3 p-5 form">
            
            <h2 className="text-light">S&apos;identifier</h2>
                
            <div className="name">
            <label htmlFor="name">Nom d&apos;utilisateur</label>
            <input
                type="name"
                id="name"
                name="name"
                placeholder="Entrer votre nom d&apos;utilisateur ..."
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            </div>

            <div className="pssd">
            <label htmlFor="pssd">Mot de passe</label>    
            <input 
                type="password"
                id="pssd"
                name="pssd"
                placeholder="Entrer votre mot de passe ..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            </div>
                <button
                    onClick={handleLogin}
                    className="border-0 text-light py-2 rounded"
                    style={{backgroundColor:'#ff0000'}}
                >
                    S&apos;identifier
                
                </button>
                
                <div style={{flexDirection:'column'}} className="d-flex gap-2 justify-content-center align-items-center links">
                    <Link className="text-light"> Mot de passe oublié ?</Link>
                    <p className="text-light-emphasis">Première visite sur Movies ? <Link to={'/register'} className="text-light"> Inscrivez-vous.</Link></p>
                </div>

                <div className=" restructuring">
                    <p className="text-center">Nous respectons votre vie privée et protégeons vos données personnelles.</p>
                </div>


            </div>

            
        </div>
    );
};

export default Login;
