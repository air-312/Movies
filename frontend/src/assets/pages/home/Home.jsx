import { useState } from 'react'
import { Link } from 'react-router-dom'
import iconPopcorn from '../../images/Icons/popcorn_time_macos_bigsur_icon_189462.ico'
import iconInfini from '../../images/Icons/infini.png'
import iconSansPublicite from '../../images/Icons/sans-publicité.png'
import iconOffresExclusive from '../../images/Icons/offres-exclusive.png'
import iconSupportPrenium from '../../images/Icons/support-prenium.png'
import itemOne from '../../images/items/item-1.jpg'
import itemTwo from '../../images/items/item-2.jpg'
import itemThree from '../../images/items/item-3.jpg'
import itemFour from '../../images/items/item-4.jpg'
import itemFive from '../../images/items/item-5.jpg'
import itemSix from '../../images/items/item-6.jpg'
import itemSeven from '../../images/items/item-7.jpg'
import itemEight from '../../images/items/item-8.jpg'
import itemNine from '../../images/items/item-9.jpg'
import './Home.css'

const Home = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqData = [
        {
            question: "Qu'est-ce que Movies ?",
            answer: "Movies est une plateforme qui offre un accès illimité à des films et séries en streaming. Notre objectif est de fournir une expérience cinématographique de qualité supérieure, accessible sur plusieurs appareils."
        },
        {
            question: "Comment puis-je m'inscrire ?",
            answer: "Pour vous inscrire, cliquez sur le bouton \"S'inscrire\" situé en haut de la page d'accueil. Remplissez vos informations personnelles, suivez les étapes, et vous serez prêt à utiliser notre service."
        },
        {
            question: "Est-ce que Movies est gratuit ?",
            answer: "Movies fonctionne sur un modèle d'abonnement à 5 euros par mois. Ce forfait inclut toutes nos fonctionnalités premium, telles que le téléchargement hors ligne et les recommandations personnalisées."
        },
        {
            question: "Quels appareils sont compatibles avec Movies ?",
            answer: "Movies est compatible avec : - Les ordinateurs (PC et Mac) via les navigateurs web. - Les smartphones et tablettes via notre application mobile (iOS et Android). - Certaines télévisions connectées et boîtiers de streaming."
        },
        {
            question: "Puis-je annuler mon abonnement à tout moment ?",
            answer: "Oui, vous pouvez annuler votre abonnement à tout moment directement depuis votre espace utilisateur. L’annulation prendra effet à la fin de votre période de facturation actuelle."
        },
        {
            question: "Est-ce que mes données personnelles sont en sécurité ?",
            answer: "Nous accordons une grande importance à la protection de vos données personnelles. Toutes vos informations sont stockées en toute sécurité, et nous utilisons des protocoles de cryptage avancés pour garantir leur confidentialité. Consultez notre Politique de confidentialité pour en savoir plus."
        },
        {
            question: "Que faire si je rencontre un problème technique ?",
            answer: "Si vous rencontrez un problème, veuillez consulter notre page Aide pour trouver des solutions rapides. Vous pouvez également contacter notre service client par : - E-mail : support@movies.com - Chat en direct via notre plateforme. - Téléphone : 01 23 45 67 89."
        },
        {
            question: "Quels sont les modes de paiement acceptés ?",
            answer: "Nous acceptons les paiements par : - Carte bancaire (Visa, Mastercard, American Express) - PayPal - Paiement mobile via Google Pay et Apple Pay."
        },
        {
            question: "Puis-je utiliser Movies à l'étranger ?",
            answer: "Oui, Movies est accessible depuis la plupart des pays, tant que vous disposez d'une connexion Internet. Cependant, certaines fonctionnalités ou contenus peuvent être limités en fonction de votre localisation géographique."
        },
        {
            question: "Comment puis-je donner mon avis ou des suggestions ?",
            answer: "Nous adorons entendre vos retours ! Vous pouvez nous faire part de vos suggestions ou commentaires via notre formulaire de contact ou en nous envoyant un e-mail à feedback@movies.com."
        }
    ]
    const toggleFAQ = (home) => {
        setActiveIndex(activeIndex === home ? null : home)
    }
    const currentTrends = [
    {
            id: 1,
            picture: itemOne,
            order: 1,
            status: 'Ajout récent',
    },     
    {
            id: 2,
            picture: itemTwo ,
            order: 2,
            status: 'Ajout récent',
    },   
    {
            id: 3,
            picture: itemThree,
            order: 3,
            status: 'Ajout récent',
    },  
    {
            id: 4, 
            picture: itemFour,
            order: 4,
            status: 'Ajout récent',
    },
    {
            id: 5,
            picture: itemFive,
            order: 5,
            status: 'Ajout récent',
    },
    {
            id: 6, 
            picture:  itemSix ,
            order: 6,
            status: 'Ajout récent',
    },
    {
            id: 7, 
            picture: itemSeven,
            order: 7,
            status: 'Ajout récent',
    },
    {
            id: 8, 
            picture: itemEight,
            order: 8,
            status: 'Ajout récent',
    },
    {
            id: 9, 
            picture: itemNine,
            order: 9,
            status: 'Ajout récent',
    }
    ]
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
               <div className="p-5 section-three-custom">
                    <h4>Tendance Actuelle</h4>
                    <div  className="container-card">
                        {currentTrends.map((currentTrends) => (
                            <Link to='/' key={currentTrends.id}>
                                <div
                                    style={{ width:'250px', height:'400px'}}
                                    className="bg-dark card">
                                    <img
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover', 
                                            position: 'absolute',
                                            zIndex: '0',
                                        }}
                                        src={currentTrends.picture}
                                        alt=""
                                    />
                                    <div style={{position:'relative', width: '100%', height: '100%', color:'#fff' }} className="card-info">
                                        <p style={{
                                            fontSize: '70px',
                                        }}>{currentTrends.order}</p>
                                        <p style={{
                                            position: 'relative',
                                            top: '250px',
                                            backgroundColor: 'red',
                                            margin: '10px',
                                            textAlign:'center'
                                        
                                        }}>{currentTrends.status}</p>
                                    </div>
                                </div>
                            </Link>
                        ))

                        }
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
                 <div className="px-5 section-five">
                    <h4>Foire aux questions</h4>
                    <div className="container-faq">
                        {faqData.map((item, home) => (
                            <div className="text-left d-flex flex-column justify-content-center align-items-center gap-0 items-faq-custom" key={home}>
                                <h5 className='bg-dark justify-content-between d-flex align-items-center w-100 p-3' onClick={() => toggleFAQ(home)}>
                                    {item.question} <i className="fas fa-plus"></i>
                                </h5>
                                    {activeIndex === home && <p className=' w-100 p-2  answer-custom'>{item.answer}</p>}
                                
                            </div>
                        ))}
                    </div>
                </div>
                <div className="p-5 section-six">
                   <p className='text-center'> Prêt à regarder Movies ? Saisissez votre adresse e-mail pour vous abonner ou réactiver votre abonnement.</p>
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
        </>
    )
}
export default Home  