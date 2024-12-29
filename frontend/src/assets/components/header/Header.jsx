import { useState } from 'react'
import './Header.css'
import logoDesktop from '../../images/Logos/Logo_movies_ft.svg'
import logoMobile from '../../images/Logos/Logo_M.svg'
import { Link } from 'react-router-dom'
import { useRef } from 'react'

const Header = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const handleSearchSubmit = (e) => {e.preventDefault()}
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value)
    }

    const sidebarButton = useRef(null);
    const containerSidebar = useRef(null);
    const toggleSidebar = () =>{
        containerSidebar.current.classList.toggle('open');
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
                <form className='search' onSubmit={handleSearchSubmit}>
                    <input 
                        type="search" 
                        name="search" 
                        id="search"
                        value={searchQuery}
                        onChange={handleSearchChange}
                        placeholder='Recherche ...'
                    />
                    <button className='btn-search' type="submit"><i className="fas fa-search"/>
                    </button>
                </form>
                <div className="btn-profileAndMenu">
                    <button className="btn-profile"><i className="fas fa-user"/></button>
                    <button 
                        className="btn-menu"
                        ref={sidebarButton}
                        onClick={toggleSidebar}
                    >
                        <i className='fas fa-bars'/>
                    </button>
                </div>
            </header>
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
                    <i className="bi-lightning"></i> ActionWXCVB
                </Link>
                <Link className='link-sidebar' to="">
                    <i className="bi-emoji-laughing"></i> Comédie
                </Link>
                <Link className='link-sidebar' to="">
                    <i className="bi-person-circle"></i> Profil
                </Link>
                <Link className='link-sidebar' to="">
                    <i className="bi-gear"></i> Paramètres
                </Link>
                </div>


        </>
    )
}
export default Header