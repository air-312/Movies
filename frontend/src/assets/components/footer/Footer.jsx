import{Link} from 'react-router-dom'
import './Footer.css'

const Footer = () =>{
    return (
        <footer className='bg-lith'>
            <div className="container-footer">
                <div className="row">
                    <div className="footer-col">
                        <h4>A propos de <span>Movies</span></h4>
                        <p>
                        Movies est votre plateforme incontournable pour découvrir et profiter de vos films préférés. Plongez dans notre vaste bibliothèque et vivez le cinéma comme jamais auparavant.              </p>
                    </div>
                    <div className="footer-col">
                        <h4>Liens rapides</h4>
                        <ul>
                            <li>
                                <Link>Accueil</Link>
                            </li>
                            <li>
                                <Link>Populaire</Link>
                            </li>
                            <li>
                                <Link>Mieux notés</Link>
                            </li>
                            <li>
                                <Link>Se connecter</Link>
                            </li>
                            <li>
                                <Link>Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Suivez-nous</h4>
                        <div className="social-links">
                            <Link><i className="fab fa-facebook-f"></i></Link>
                            <Link><i className="fab fa-twitter"></i></Link>
                            <Link><i className="fab fa-instagram"></i></Link>
                            <Link><i className="fab fa-youtube"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        
        </footer>
    )
}
export default Footer;