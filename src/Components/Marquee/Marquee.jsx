import React from 'react';
import MarqueeCss from './../Marquee/Marquee.module.css'
import skullImg from '../../assets/skullImg.webp'

function Marquee() {
    return (
        <marquee behaviour="scroll" direction="">
            <div className={MarqueeCss.marquee_text}>
            <h1>Gaming Community</h1>
                <img src={skullImg} alt="" className={MarqueeCss.skullImg}/>

                <h1>Gaming Community</h1>
                <img src={skullImg} alt="" className={MarqueeCss.skullImg}/>

                <h1>Gaming Community</h1>
                <img src={skullImg} alt="" className={MarqueeCss.skullImg}/>

                <h1>Gaming Community</h1>
                <img src={skullImg} alt="" className={MarqueeCss.skullImg}/>

                <h1>Gaming Community</h1>
                <img src={skullImg} alt="" className={MarqueeCss.skullImg}/>

                <h1>Gaming Community</h1>
                <img src={skullImg} alt="" className={MarqueeCss.skullImg}/>
            </div>
        </marquee>
    )
}

export default Marquee