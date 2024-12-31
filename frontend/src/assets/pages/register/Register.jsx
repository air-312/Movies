import items from '../../images/Background.jpg'
import { Link } from 'react-router-dom'
import Logo from '../../images/Logos/Logo_movies_ft.svg'

const Login = () => {
    return (
        <>
            <div className="container-login">
                <div style={{ backgroundColor: '#161616cb', maxWidth: '1000px', position: 'relative', zIndex: '2', height: '540px' }} className="w-100 rounded-5">
                    
                    <div className="d-flex inner-box">

                    <div className="forms-wrap">
                            <form
                                style={{
                                    maxWidth: '370px',
                                    margin: '0 auto',
                                    flexDirection:' column',
                                }}
                                action=""
                                autoComplete='off' className='d-flex h-100 w-100 justify-content-evenly sign-in-from'>

                            <div className="d-flex align-items-center w-100 logo">
                                <Link to={'/'}>
                                        <img style={{ width: '200px', marginBottom: '1.3em' }} src={Logo} alt="movies" />
                                </Link>
                            </div>

                            <div className="heading">
                                    <h2 className='text-light fs-2 fw-600 mb-0 '>Inscription</h2>
                                    
                                    <h6 style={{ fontSize: '0.7rem', color: '#bababa' }} className='d-inline fw-400 '>
                                        Déjà inscrit ?
                                    </h6>
                                    
                                    <Link to={'/login'} style={{ fontSize: '0.7rem' }} className='text-light toggle'> Se connecter</Link>
                                    
                            </div>

                            <div className="actual-form">

                                <div className="input-wrap">
                                    <input
                                        type='text'
                                        minLength='6'
                                        className='input-field'
                                        autoComplete='off'
                                        name="name"
                                        id="name"
                                        placeholder='Nom & Prénom(s)'
                                        required
                                    />
                                </div>
                                <div className="input-wrap">
                                    <input
                                        type='email'
                                        minLength='4'
                                        className='input-field'
                                        autoComplete='off'
                                        name="email"
                                        id="email"
                                        placeholder='Adresse mail'
                                        required
                                    />
                                </div>
                                <div className="input-wrap">
                                    <input
                                        type='tel'
                                        minLength='8'
                                        className='input-field'
                                        autoComplete=''
                                        name="tel"
                                        id="tel"
                                        placeholder='Numéro sans indicatif. Ex: 06 69 47 09'
                                        required
                                    />
                                </div>
                                <div className="input-wrap">
                                    <input
                                        type="password"
                                        minLength='6'
                                        className='input-field'
                                        autoComplete='off'
                                        name="password"
                                        id="password"
                                        placeholder='Password'
                                        required
                                    />
                                </div>

                                    <input
                                        type="submit"
                                        value="S&apos;inscrire"
                                        style={{fontSize:'0.8em', height:'43px',transition: '0.3s'}}
                                        className='d-inline-block w-100 cursor-auto rounded text-light mb-4 border-0 bg-dark sign-btn'
                                    />

                                <p style={{ fontSize: '0.7rem'}} className="text-center text-secondary">
                                    En vous inscrivant, vous acceptez les
                                    <Link className="text-primary text" to={''}> Conditions d&apos;utilisations</Link> et <Link className="text-primary text" to={''}> la politique de confidentialité.</Link>
                                </p>
                            </div>
                        </form>
                    </div>
                    <div style={{overflow:'hidden', position:'absolute', width:'55%', left:'45%'}} className="h-100 rounded-5 container-img ">   
                        <img className='img' style={{
                                position: 'relative',
                                width: '100%',
                                height: '100%',
                                zIndex: '4',
                                objectFit:'cover'
                        }} src={items} alt="" />
                       
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}
export default Login