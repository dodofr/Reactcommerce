//composant pour swiper de simages de facon plutot jolie
import React, { useEffect } from "react";
import Swiper from "swiper/bundle";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../App.css'

function SwiperA() {
    useEffect(() => {
        new Swiper(".mySwiper", {
            effect: "coverflow",
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: "auto",
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            },
            autoplay: {
                delay: 2000,
                pauseOnMouseEnter: true,
                disableOnInteraction: false,
            },
        });
    }, []);

    return (
        <>

                <div className="swiper mySwiper">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide" id="sliderUn">
                            <h2>Direction longlerie</h2>
                            <p>specialiste des chansons</p>
                            <p>specialiste des chansons</p>
                        </div>
                        <div className="swiper-slide">
                            <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt="nature-image" />
                        </div>
                        <div className="swiper-slide">
                            <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt="nature-image" />
                        </div>
                        <div className="swiper-slide">
                            <img src="https://swiperjs.com/demos/images/nature-4.jpg" alt="nature-image" />
                        </div>
                        <div className="swiper-slide">
                            <img src="https://swiperjs.com/demos/images/nature-5.jpg" alt="nature-image" />
                        </div>
                        <div className="swiper-slide">
                            <img src="https://swiperjs.com/demos/images/nature-6.jpg" alt="nature-image" />
                        </div>
                        <div className="swiper-slide">
                            <img src="https://swiperjs.com/demos/images/nature-7.jpg" alt="nature-image" />
                        </div>
                        <div className="swiper-slide">
                            <img src="https://swiperjs.com/demos/images/nature-8.jpg" alt="nature-image" />
                        </div>
                    </div>
                </div>
          

        </>
    )
}

export default SwiperA