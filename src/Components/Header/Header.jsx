import React from 'react';
import HeaderCss from './../Header/Header.module.css'
import HeroImg from './../../assets/hero.jpg'
import {Typewriter} from "react-simple-typewriter";



function Header() {
    return (

        <header>
            <div className={HeaderCss.hero_content}>
                <h1 className={HeaderCss.hero_title}>
                    {/*<div>*/}
                    {/*    Code-<span>x</span>-Novas*/}
                    {/*</div>*/}
                    {/*<div>*/}
                    {/*<span> GAMING</span>*/}
                    {/*</div>*/}
                    
                    
                    {/*<Typewriter words={['Code-x-Novas GAMING']}*/}

                    {/*            typeSpeed={100}*/}
                    {/*            deleteSpeed={50}*/}
                    {/*            cursorColor="white"*/}
                    {/*            cursorBlink={true}*/}
                    {/*            hideCursorAfterText="true"*/}
                    {/*            startDelay={1000}*/}
                    {/*            delaySpeed={1000}*/}
                    {/*            cursorStyle='❚'*/}

                    {/*/>*/}


                    <span className={HeaderCss.typingText}>
                      <Typewriter
                          words={['Code-x-Novas GAMING']}
                          loop={0}
                          cursor
                          cursorStyle='❚'
                          typeSpeed={90}
                          deleteSpeed={40}
                          delaySpeed={1000}
                      />
                    </span>
                </h1>






                <div className={HeaderCss.hero_boxes}>
                    <p> Welcome to the electrifying realm of Code X Novas Gaming! </p>
                    <div className={HeaderCss.hero_social}>
                        <i className={`${HeaderCss.hero_icon} ri-facebook-fill`}></i>
                        <i className={`${HeaderCss.hero_icon} ri-twitter-fill`}></i>
                        <i className={`${HeaderCss.hero_icon} ri-behance-fill`}></i>
                        <i className={`${HeaderCss.hero_icon} ri-youtube-fill`}></i>
                    </div>
                </div>

                <div className={HeaderCss.hero_bottom}>
                    <div className={HeaderCss.hero_content}>
                        <h2>SOME COOL & DROP CHARACTERS</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</p>
                        <button>NEXT CAN BE YOU
                        <i className={'ri-arrow-right-s-line'}></i>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                    <div className={HeaderCss.hero_img}>
                        <img src={HeroImg} alt=""/>
                    </div>
                    <div className={HeaderCss.shape}></div>
                    <div className={HeaderCss.shape2}></div>
                </div>
            </div>
        </header>

    )
}

export default Header