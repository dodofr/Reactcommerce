import Header from '../components/Header';
import SwiperA from "../components/Swiper";



function Acceuil() {
   

    return (
        <>
        <Header/>
        <div className="traiDoree h-1"></div>
            <section className="sectionAcceuilHaut h-[80vh]">
                <div className="flex flex-col justify-center items-center my-5">
                    <img
                        className="logo"
                        src="images/New_Elegant_Logo1.jpg"
                        alt="logo"
                    />
                    <h1 className="h1Acceuil text-2xl">Bienvenu chez CéBeauté</h1>
                </div>
                   
        {/* <SwiperA/> */}
        </section>
        </>
    )
}

export default Acceuil