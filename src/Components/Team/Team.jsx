import React from 'react';
import TeamCss from './../Team/Team.module.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import teamImg1 from './../../assets/hero.jpg'
import teamImg2 from './../../assets/hero.jpg'
import teamImg3 from './../../assets/hero.jpg'
import teamImg4 from './../../assets/hero.jpg'
import GameCardsCss from "../GameCards/GameCards.module.css";
import GameCardImg1 from "../../assets/game-card1.webp";
import GameCardImg2 from "../../assets/game-card2.webp";
import GameCardImg3 from "../../assets/game-card3.jpg";
import GameCardImg4 from "../../assets/game-card4.jpg";

function Team() {
    return (
        <section className={TeamCss.our_team}>
            <div className="Headings">
                <h2>Our Team</h2>
                <h1>OUR AVENGERS</h1>
            </div>


            <Swiper className={TeamCss.TeamSlider}
                    slidesPerView={4}
                    spaceBetween={30}
                    loop={true}
                    breakpoints={{
                        1400:{slidesPerView: 4},
                        1200:{slidesPerView: 4},
                        900:{slidesPerView: 2},
                        500:{slidesPerView: 1},
                        400:{slidesPerView: 1},
                        300:{slidesPerView: 1},
                        200:{slidesPerView: 1}
                    }}>

                <SwiperSlide>
                    <div className={TeamCss.TeamCard}>
                        <div className={TeamCss.Team_img}>
                            <img src={teamImg1} alt=""/>
                            <span>CEO</span>
                        </div>
                        <div className={TeamCss.team_det}>
                            <div className={TeamCss.team_info}>
                            <h2>James Taylor</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</p>
                            </div>

                            <div className={TeamCss.social}>
                                <i className="ri-facebook-fill"></i>
                                <i className="ri-twitter-fill"></i>
                                <i className="ri-instagram-line"></i>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>


                <SwiperSlide>
                    <div className={TeamCss.TeamCard}>
                        <div className={TeamCss.Team_img}>
                            <img src={teamImg2} alt=""/>
                            <span>CEO</span>
                        </div>
                        <div className={TeamCss.team_det}>
                            <div className={TeamCss.team_info}>
                                <h2>James Taylor</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</p>
                            </div>

                            <div className={TeamCss.social}>
                                <i className="ri-facebook-fill"></i>
                                <i className="ri-twitter-fill"></i>
                                <i className="ri-instagram-line"></i>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>


                <SwiperSlide>
                    <div className={TeamCss.TeamCard}>
                        <div className={TeamCss.Team_img}>
                            <img src={teamImg3} alt=""/>
                            <span>CEO</span>
                        </div>
                        <div className={TeamCss.team_det}>
                            <div className={TeamCss.team_info}>
                                <h2>James Taylor</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</p>
                            </div>

                            <div className={TeamCss.social}>
                                <i className="ri-facebook-fill"></i>
                                <i className="ri-twitter-fill"></i>
                                <i className="ri-instagram-line"></i>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>


                <SwiperSlide>
                    <div className={TeamCss.TeamCard}>
                        <div className={TeamCss.Team_img}>
                            <img src={teamImg4} alt=""/>
                            <span>CEO</span>
                        </div>
                        <div className={TeamCss.team_det}>
                            <div className={TeamCss.team_info}>
                                <h2>James Taylor</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</p>
                            </div>

                            <div className={TeamCss.social}>
                                <i className="ri-facebook-fill"></i>
                                <i className="ri-twitter-fill"></i>
                                <i className="ri-instagram-line"></i>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>


                <SwiperSlide>
                    <div className={TeamCss.TeamCard}>
                        <div className={TeamCss.Team_img}>
                            <img src={teamImg4} alt=""/>
                            <span>CEO</span>
                        </div>
                        <div className={TeamCss.team_det}>
                            <div className={TeamCss.team_info}>
                                <h2>James Taylor</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</p>
                            </div>

                            <div className={TeamCss.social}>
                                <i className="ri-facebook-fill"></i>
                                <i className="ri-twitter-fill"></i>
                                <i className="ri-instagram-line"></i>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>






            </Swiper>
        </section>
    )
}

export default Team