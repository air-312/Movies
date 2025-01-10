import { useState, useRef, useEffect } from 'react'
import './Header.css'
import logoDesktop from '../../images/Logos/Logo_movies_ft.svg'
import logoMobile from '../../images/Logos/Logo_M.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Header = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const handleSearchSubmit = (e) => { e.preventDefault() }
    const handleSearchChange = (e) => { setSearchQuery(e.target.value) }
    const navigate = useNavigate();
    const location = useLocation();

    const sidebarButton = useRef(null);
    const containerSidebar = useRef(null);

    const toggleSidebar = () => { containerSidebar.current.classList.toggle('open'); }

    useEffect(() => {
        if (containerSidebar.current.classList.contains('open')) {
            containerSidebar.current.classList.remove('open')
        }
    })

    const btnLoginAndSignup = () => { navigate('/login'); }

    const validPaths = ['/', '/login', '/register', '/catalogue', '/movies/:id'];
    const isNotFoundPage = !validPaths.includes(location.pathname);

    const isHomePage = location.pathname === '/'
    const isLoginPage = location.pathname === '/login'
    const isRegisterPage = location.pathname === '/register'
    const loginRedirection = () => {
        navigate('/login')
    }

    return (
        <>
            <header className='d-flex align-center px-5 py-3'>
                <div className="logos">
                    <Link to="/" >
                        <img src={logoDesktop} alt="logo-desktop" className="logo-desktop" />
                    </Link>
                    <Link to="/" >
                        <img src={logoMobile} alt="logo-mobile" className="logo-mobile" />
                    </Link>
                </div>

                {/* Affichage sur toutes les pages sauf certaines spécifiques */}
                {!isHomePage && !isLoginPage && !isRegisterPage && !isNotFoundPage && (
                    <form className='search' onSubmit={handleSearchSubmit}>
                        <input 
                            type="search" 
                            name="search" 
                            id="search"
                            value={searchQuery}
                            onChange={handleSearchChange}
                            placeholder='Recherche ...'
                        />
                        <button onClick={btnLoginAndSignup} className='btn-search' type="submit">
                            <i className="fas fa-search"/>
                        </button>
                    </form>
                )}
                
                {/* Affichage de la section profil et menu sur certaines pages */}
                {!isNotFoundPage && !isLoginPage && !isRegisterPage && (
                    <div className="btn-profileAndMenu">
                        <button onClick={loginRedirection} className="btn-profile">
                            <i className="fas fa-user"/>
                        </button>
                        <button 
                            className="btn-menu"
                            ref={sidebarButton}
                            onClick={toggleSidebar}
                        >
                            <i className='fas fa-bars'/>
                        </button>
                    </div>
                )}
                
            </header>

            {/* Menu de la sidebar */}
            <div className="container-sidebar" ref={containerSidebar}>
                <Link className='link-sidebar' to="">
                    <i className="bi-clock"></i> Récent
                </Link>
                <Link className='link-sidebar' to="">
                    <i className="bi-fire"></i> Populaire
                </Link>
                <Link className='link-sidebar' to="">
                    <i className="bi-heart"></i> Mieux noté
                </Link>
                <Link className='link-sidebar' to="">
                    <i className="bi-film"></i> Tous les films
                </Link>
                <Link className='link-sidebar' to="">
                    <i className="bi-lightning"></i> Action
                </Link>
                <Link className='link-sidebar' to="">
                    <i className="bi-emoji-laughing"></i> Comédie
                </Link>
                <Link className='link-sidebar' to="/login">
                    <i className="bi-person-circle"></i> Profil
                </Link>
                <Link className='link-sidebar' to="">
                    <i className="bi-gear"></i> Paramètres
                </Link>
            </div>
        </>
    )
}

export default Header;
