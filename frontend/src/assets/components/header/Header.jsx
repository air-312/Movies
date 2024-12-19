import { useState } from 'react'
import './Header.css'
import logoDesktop from '../../images/Logos/Logo_movies_ft.svg'
import logoMobile from '../../images/Logos/Logo_M.svg'
import { Link } from 'react-router-dom'

const Header = () => {
    const [searchQuery, setSearchQuery] = useState('')

    const handleSearchSubmit = (e) => {
        e.preventDefault()
    }
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value)
    }

    return (
        <>
            <header>
                <div className="logos">
                    <Link to="/" ><img src={logoDesktop} alt="logo-desktop" className="logo-desktop" /></Link>
                    <Link to="/" ><img src={logoMobile} alt="logo-mobile" className="logo-mobile" /></Link>
                </div>
                <form className='search' onSubmit={handleSearchSubmit}>
                    <input 
                        type="search" 
                        name="search" 
                        id="search"
                        value={searchQuery}
                        onChange={handleSearchChange}
                        placeholder='Que recherchez-vous ?'
                    />
                    <button className='btn-search' type="submit"><i className="fas fa-search"/>
                    </button>
                </form>
                <div className="btn-profileAndMenu">
                    <button className="btn-profile"><i className="fas fa-user"/></button>
                    <button className="btn-menu"><i className='fas fa-bars'/></button>
                </div>
            </header>
        </>
    )
}
export default Header