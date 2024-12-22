import './Home.css'

const Home =()=>{
    return (
        <>
            <div className=" text-light container-home">
                <div className="section-one-custom d-flex flex-column align-items-center justify-content-center">
                    <div className="text-center d-flex  align-items-center td-custom">
                        <h4 className='fs-custom'>Films en illimité</h4>
                        <p>
                            Partir de 5,99 €. Annulable à tout moment.
                            <br/>
                            Découvrez une vaste sélection de films, disponibles à tout moment. Profitez de l&apos;expérience cinématographique ultime, où que vous soyez.
                        </p>
                        
                        <form action="" className='d-flex align-items-center justify-content-center bg-light custom'>
                        <input 
                            type="email" 
                            name="" 
                            id="" 
                            placeholder='Adresse e-mail'
                            className='border-0 bg-light input-custom'
                        />
                            <button className='py-1 px-3 d-flex border-0 btn-custom' type="submit">Commencer<i className='fas fa-chevron-right'></i></button>
                    </form>
                    </div>
                    
                </div>
                <div className="section-two">
                    <div className="top"></div>

                </div>
            </div>
        </>
    )
}
export default Home