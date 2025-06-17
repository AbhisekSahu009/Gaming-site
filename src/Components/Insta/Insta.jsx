import React from 'react';
import InstaCss from './../Insta/Insta.module.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import InstImg1 from './../../assets/hero.jpg'
import InstImg2 from './../../assets/hero.jpg'
import InstImg3 from './../../assets/hero.jpg'
import InstImg4 from './../../assets/hero.jpg'
import InstImg5 from './../../assets/hero.jpg'
import InstImg6 from './../../assets/hero.jpg'
import TeamCss from "../Team/Team.module.css";


function Insta() {
    return (



        <Swiper className={InstaCss.InstaSlider}
                slidesPerView={6}
                loop={true}
                breakpoints={{
                    1400:{slidesPerView: 6},
                    1200:{slidesPerView: 5},
                    900:{slidesPerView: 3},
                    500:{slidesPerView: 1}
                }}>

            <SwiperSlide>
                <div className={InstaCss.insta_img}>
                    <img src={InstImg1} alt=""/>
                    <i className="ri-instagram-line"/>
                </div>
            </SwiperSlide>


            <SwiperSlide>
                <div className={InstaCss.insta_img}>
                    <img src={InstImg2} alt=""/>
                    <i className="ri-instagram-line"/>
                </div>
            </SwiperSlide>



            <SwiperSlide>
                <div className={InstaCss.insta_img}>
                    <img src={InstImg3} alt=""/>
                    <i className="ri-instagram-line"/>
                </div>
            </SwiperSlide>



            <SwiperSlide>
                <div className={InstaCss.insta_img}>
                    <img src={InstImg4} alt=""/>
                    <i className="ri-instagram-line"/>
                </div>
            </SwiperSlide>


            <SwiperSlide>
                <div className={InstaCss.insta_img}>
                    <img src={InstImg5} alt=""/>
                    <i className="ri-instagram-line"/>
                </div>
            </SwiperSlide>



            <SwiperSlide>
                <div className={InstaCss.insta_img}>
                    <img src={InstImg6} alt=""/>
                    <i className="ri-instagram-line"/>
                </div>
            </SwiperSlide>




            <SwiperSlide>
                <div className={InstaCss.insta_img}>
                    <img src={InstImg2} alt=""/>
                    <i className="ri-instagram-line"/>
                </div>
            </SwiperSlide>



        </Swiper>
    )
}

export default Insta