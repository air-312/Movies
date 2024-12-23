import {Link} from 'react-router-dom'
import iconPopcorn from '../../images/Icons/popcorn_time_macos_bigsur_icon_189462.ico'
import iconInfini from '../../images/Icons/infini.png'
import iconSansPublicite from '../../images/Icons/sans-publicité.png'
import iconOffresExclusive from '../../images/Icons/offres-exclusive.png'
import iconSupportPrenium from '../../images/Icons/support-prenium.png'
import './Home.css'

const Home =()=>{
    return (
        <>
            <div className=" text-light container-home">
                <div className="section-one-custom d-flex flex-column align-items-center justify-content-center">
                    <div className="text-center d-flex  align-items-center td-custom">
                        <h4 className='fs-custom'>Films en illimité</h4>
                        <p>
                            Partir de 5 €. Annulable à tout moment.
                            <br/>
                            Découvrez une vaste sélection de films, disponibles à tout moment. Profitez de l&apos;expérience cinématographique ultime, où que vous soyez.
                        </p>
                        
                        <form action="" className='d-flex align-items-center justify-content-center custom'>
                        <input 
                            type="email" 
                            name="" 
                            id="" 
                            placeholder='Adresse e-mail'
                            className='border-0 bg-light rounded p-2 input-custom'
                        />
                            <button className='py-2 px-3 d-flex border-0 rounded btn-custom' type="submit">Commencer<i className='fas fa-chevron-right'></i></button>
                    </form>
                    </div>
                    
                </div>
                <div className="section-two">
                    <div className="top"><div className="blurry"></div></div>
                    
                    <div className="d-flex align-items-center justify-content-center pb-un-custom">
                        <img
                            className='popcorn-custom'
                            src={iconPopcorn}
                            alt="Icon Popcorn"
                        />
                        <div className="p-4 contenu-offre-custom">
                            <h4>Vos films préférés pour seulement 5 €.</h4>
                            <p>Découvrez notre offre sans publicité, la plus avantageuse.</p>
                            <Link className='p-2 text-light rounded linkInfo-custom' to={'/'}>En savoir plus</Link>
                        </div>

                    </div>

                </div>
                <div className="p-5 section-four">
                    <h4 className='text-left mb-4'>Encore plus de raisons de vous abonner</h4>
                    <div className="container-cards-infos">
                            
                                <div className="card-custom">
                                    <h4>Accès Illimité</h4>
                                    <p>Profitez de milliers de contenus sans aucune restriction, disponibles 24h/24 et 7j/7.</p>
                                    <img className='icon-custom' src={iconInfini} alt="Accès illimité" />
                                </div>
                           
                            
                                <div className="card-custom">
                                    <h4>Sans Publicité</h4>
                                    <p>Savourez vos contenus sans interruptions, pour une expérience fluide et agréable.</p>
                                    <img className='icon-custom' src={iconSansPublicite} alt="Sans publicité" />
                                </div>
                            
                            
                                <div className="card-custom">
                                    <h4>Offres Exclusives</h4>
                                    <p>Bénéficiez d’offres et de réductions réservées uniquement aux abonnés.</p>
                                    <img className='icon-custom' src={iconOffresExclusive} alt="Offres exclusives" />
                                </div>
                            
                            
                                <div className="card-custom">
                                    <h4>Support Premium</h4>
                                    <p>Accédez à une assistance rapide et dédiée pour résoudre tous vos problèmes.</p>
                                    <img className='icon-custom' src={iconSupportPrenium} alt="Support premium" />
                            </div>
                        
                    </div>
                </div>

            </div>
        </>
    )
}
export default Home