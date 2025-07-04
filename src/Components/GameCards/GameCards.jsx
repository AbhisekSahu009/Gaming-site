// import React from 'react';
// import GameCardsCss from './../GameCards/GameCards.module.css'
// import {Swiper, SwiperSlide} from 'swiper/react'
// import 'swiper/css'
// import GameCardImg1 from './../../assets/cod.webp'
// import GameCardImg2 from './../../assets/gta-card.webp'
// import GameCardImg3 from './../../assets/rdr-card.webp'
// import GameCardImg4 from './../../assets/game-card4.jpg'
//
//
// function GameCards() {
//     return (
//         <Swiper className={GameCardsCss.GameSlider}
//         slidesPerView={4}
//         loop={true}
//         breakpoints={{
//             1400:{slidesPerView: 4},
//             1200:{slidesPerView: 4},
//             900:{slidesPerView: 2},
//             500:{slidesPerView: 1},
//             400:{slidesPerView: 1},
//             300:{slidesPerView: 1},
//             200:{slidesPerView: 1}
//         }}>
//
//             <SwiperSlide>
//                 <div className={GameCardsCss.gameCard}>
//                     <div className={GameCardsCss.game_img}>
//                         <img src={GameCardImg1} alt=""/>
//                     </div>
//                     <button>DOWNLOAD
//                         <i className={'ri-arrow-right-s-line'}></i>
//                         <span></span>
//                         <span></span>
//                         <span></span>
//                         <span></span>
//                     </button>
//                 </div>
//             </SwiperSlide>
//
//
//
//             <SwiperSlide>
//                 <div className={GameCardsCss.gameCard}>
//                     <div className={GameCardsCss.game_img}>
//                         <img src={GameCardImg2} alt=""/>
//                     </div>
//                     <button>DOWNLOAD
//                         <i className={'ri-arrow-right-s-line'}></i>
//                         <span></span>
//                         <span></span>
//                         <span></span>
//                         <span></span>
//                     </button>
//                 </div>
//             </SwiperSlide>
//
//
//
//             <SwiperSlide>
//                 <div className={GameCardsCss.gameCard}>
//                     <div className={GameCardsCss.game_img}>
//                         <img src={GameCardImg3} alt=""/>
//                     </div>
//                     <button>DOWNLOAD
//                         <i className={'ri-arrow-right-s-line'}></i>
//                         <span></span>
//                         <span></span>
//                         <span></span>
//                         <span></span>
//                     </button>
//                 </div>
//             </SwiperSlide>
//
//
//
//             <SwiperSlide>
//                 <div className={GameCardsCss.gameCard}>
//                     <div className={GameCardsCss.game_img}>
//                         <img src={GameCardImg4} alt=""/>
//                     </div>
//                     <button>DOWNLOAD
//                         <i className={'ri-arrow-right-s-line'}></i>
//                         <span></span>
//                         <span></span>
//                         <span></span>
//                         <span></span>
//                     </button>
//                 </div>
//             </SwiperSlide>
//
//             <SwiperSlide>
//                 <div className={GameCardsCss.gameCard}>
//                     <div className={GameCardsCss.game_img}>
//                         <img src={GameCardImg2} alt=""/>
//                     </div>
//                     <button>DOWNLOAD
//                         <i className={'ri-arrow-right-s-line'}></i>
//                         <span></span>
//                         <span></span>
//                         <span></span>
//                         <span></span>
//                     </button>
//                 </div>
//             </SwiperSlide>
//
//
//         </Swiper>
//     )
// }
//
// export default GameCards






import React from 'react';
import GameCardsCss from './../GameCards/GameCards.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import GameCardImg1 from './../../assets/cod.webp';
import GameCardImg2 from './../../assets/gta-card.webp';
import GameCardImg3 from './../../assets/rdr-card.webp';
import GameCardImg4 from './../../assets/game-card4.jpg';

const GameCards = () => {
    const handleDownload = (image, filename) => {
        const link = document.createElement('a');
        link.href = image;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const slides = [
        { image: GameCardImg1, filename: 'cod.webp' },
        { image: GameCardImg2, filename: 'gta-card.webp' },
        { image: GameCardImg3, filename: 'rdr-card.webp' },
        { image: GameCardImg4, filename: 'game-card4.jpg' },
        { image: GameCardImg2, filename: 'gta-card.webp' }, // duplicate for extra slide
    ];

    return (
        <Swiper
            className={GameCardsCss.GameSlider}
            slidesPerView={4}
            loop={true}
            breakpoints={{
                1400: { slidesPerView: 4 },
                1200: { slidesPerView: 4 },
                900: { slidesPerView: 2 },
                500: { slidesPerView: 1 },
                400: { slidesPerView: 1 },
                300: { slidesPerView: 1 },
                200: { slidesPerView: 1 },
            }}
        >
            {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                    <div className={GameCardsCss.gameCard}>
                        <div className={GameCardsCss.game_img}>
                            <img src={slide.image} alt={`Game ${index + 1}`} />
                        </div>
                        <button onClick={() => handleDownload(slide.image, slide.filename)}>
                            DOWNLOAD
                            <i className={'ri-arrow-right-s-line'}></i>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default GameCards;
