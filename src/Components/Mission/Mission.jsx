import React from 'react';
import MissionCss from './../Mission/Mission.module.css'
import skullImg from './../../assets/skullImg.webp'

function Mission() {
    return (
        <section className={MissionCss.our_mission}>
            <div className={MissionCss.mission_head}>
                <div className={MissionCss.skullImg}>
                    <img src={skullImg} alt=""/>
                </div>
                <h2>Our Mission</h2>
            </div>
            <div className={MissionCss.mission_infos}>
                <div className={MissionCss.info_box}>
                    <h1>We are here to help you</h1>
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</h2>
                </div>
                <div className={MissionCss.info_box}>
                    <h1>We are here to help you</h1>
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</h2>
                </div>
                <div className={MissionCss.info_box}>
                    <h1>We are here to help you</h1>
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</h2>
                </div>
                <div className={MissionCss.info_box}>
                    <h1>We are here to help you</h1>
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</h2>
                </div>
            </div>
        </section>
    )
}

export default Mission