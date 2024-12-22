import{Link} from 'react-router-dom'
import Logo from '../../images/Logos/Logo_movies_ft.svg'
import './Footer.css'

const Footer = () =>{
    return (
        <footer className='text-light custom-container-footer'>
            <div className="w-25">
                        <Link to="/"><img className='logo' src={Logo} alt="" /></Link>
                        <p className='p-custom'>
                        Movies est votre plateforme incontournable pour découvrir et profiter de vos films préférés. Plongez dans notre vaste bibliothèque et vivez le cinéma comme jamais auparavant.              </p>
            </div>
            <div className="footer-col">
                        <h4 className='fs-2 text-light fw-bold mb-5 custom'>Liens rapides</h4>
                        <ul className='list-unstyled'>
                            <li>
                                <Link className='fs-5 text-light d-block custom-link-menu'>Accueil</Link>
                            </li>
                            <li>
                                <Link className='fs-5 text-light d-block custom-link-menu'>Populaire</Link>
                            </li>
                            <li>
                                <Link className='fs-5 text-light d-block custom-link-menu'>Mieux notés</Link>
                            </li>
                            <li>
                                <Link className='fs-5 text-light d-block custom-link-menu'>Se connecter</Link>
                            </li>
                            <li>
                                <Link className='fs-5 text-light d-block custom-link-menu'>Contact</Link>
                            </li>
                        </ul>
            </div>
            <div className="footer-col">
                        <h4 className='fs-2 text-light fw-bold mb-5 custom'>Suivez-nous</h4>
                        <div className="d-flex g-custom">
                            <Link className='text-center text-dark   custom-social-link'><i className="fab fa-facebook-f"></i></Link>
                            <Link className='text-center text-dark  custom-social-link'><i className="fab fa-twitter"></i></Link>
                            <Link className='text-center text-dark  custom-social-link'><i className="fab fa-instagram"></i></Link>
                            <Link className='text-center text-dark  custom-social-link'><i className="fab fa-youtube"></i></Link>
                        </div>
            </div>
        </footer>
    )
}
export default Footer;