import './404.css'
import { useNavigate } from 'react-router-dom';

const notFound = () => {

    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }


    return (
        <div className="container_not_found">
            <h1>404</h1>
            <p>Oups ! la page que vous cherchez n&apos;existe pas</p>
            <button onClick={goBack}><i className="fast fa-caret-left"/>Retour</button>
        </div>
    );
};

export default notFound;