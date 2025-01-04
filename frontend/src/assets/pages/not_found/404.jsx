import './404.css'
import { useNavigate } from 'react-router-dom';

const notFound = () => {

    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }


    return (
        <div style={{height:'100vh', flexDirection:'column'}} className="text-light d-flex justify-content-center align-items-center container_not_found">
            <h1
                style={{
                    position: 'relative', fontSize: '10em', fontFamily: 'Sixtyfour',
                    textAlign: 'center',
                }}>
                404
            </h1>
            
            <p style={{position:'relative',}}>Oups ! la page que vous cherchez n&apos;existe pas.</p>

            <button style={{position:'relative',}} className='border-0 rounded px-4 py-1 hover' onClick={goBack}><i className="fas fa-caret-left"/> Retour</button>
        </div>
    );
};

export default notFound;