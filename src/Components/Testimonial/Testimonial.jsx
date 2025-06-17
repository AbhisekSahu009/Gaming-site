import React from 'react';
import TestimonialCss from './../Testimonial/Testimonial.module.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import clientImg1 from './../../assets/hero.jpg'
import clientImg2 from './../../assets/hero.jpg'
import clientImg3 from './../../assets/hero.jpg'
import clientImg4 from './../../assets/hero.jpg'
import TeamCss from "../Team/Team.module.css";

function Testimonial() {
    return (
        <section className={TestimonialCss.testimonial}>
            <div className='Headings'>
                <h2>Testimonials</h2>
                <h1>WHAT PEOPLE ARE SAYING ABOUT US</h1>
            </div>


            <Swiper className={TestimonialCss.tetsSlider}
                    slidesPerView={3}
                    spaceBetween={30}
                    loop={true}
                    breakpoints={{
                        1400:{slidesPerView: 3},
                        1200:{slidesPerView: 3},
                        900:{slidesPerView: 2},
                        500:{slidesPerView: 1}
                    }}>


                <SwiperSlide>
                    <div className={TestimonialCss.test_box}>
                        <div className={TestimonialCss.test_card}>
                            <div className={TestimonialCss.test_info}>
                                <h2>Nick Davis</h2>
                                <h5>UI/UX Designer</h5>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</p>

                        </div>
                        <div className={TestimonialCss.client_img}>
                            <img src={clientImg1} alt=""/>
                        </div>
                    </div>
                </SwiperSlide>





                <SwiperSlide>
                    <div className={TestimonialCss.test_box}>
                        <div className={TestimonialCss.test_card}>
                            <div className={TestimonialCss.test_info}>
                                <h2>Nick Davis</h2>
                                <h5>UI/UX Designer</h5>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</p>

                        </div>
                        <div className={TestimonialCss.client_img}>
                            <img src={clientImg2} alt=""/>
                        </div>
                    </div>
                </SwiperSlide>




                <SwiperSlide>
                    <div className={TestimonialCss.test_box}>
                        <div className={TestimonialCss.test_card}>
                            <div className={TestimonialCss.test_info}>
                                <h2>Nick Davis</h2>
                                <h5>UI/UX Designer</h5>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</p>

                        </div>
                        <div className={TestimonialCss.client_img}>
                            <img src={clientImg3} alt=""/>
                        </div>
                    </div>
                </SwiperSlide>





                <SwiperSlide>
                    <div className={TestimonialCss.test_box}>
                        <div className={TestimonialCss.test_card}>
                            <div className={TestimonialCss.test_info}>
                                <h2>Nick Davis</h2>
                                <h5>UI/UX Designer</h5>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</p>

                        </div>
                        <div className={TestimonialCss.client_img}>
                            <img src={clientImg4} alt=""/>
                        </div>
                    </div>
                </SwiperSlide>






            </Swiper>
        </section>
    )
}

export default Testimonial