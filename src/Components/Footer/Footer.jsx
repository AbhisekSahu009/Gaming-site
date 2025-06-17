import React from 'react';
import FooterCss from './../Footer/Footer.module.css'


function Footer() {
    return (
        <section className={FooterCss.footer}>
            <div className={FooterCss.footer_logo}>
                <a href="#">Zex<span>Ora</span></a>
            </div>

            <div className={FooterCss.footer_menu}>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Highlights</a></li>
                <li><a href="#">Contact</a></li>
            </div>
            <div className={FooterCss.footer_inputs}>
                <input type="text" placeholder="Your Email"/>
                <i className="ri-mail-line"/>
            </div>

            <div className={FooterCss.footer_social}>
                <i className="ri-facebook-line"/>
                <i className="ri-twitter-line"/>
                <i className="ri-linkedin-line"/>
                <i className="ri-google-line"/>
                <i className="ri-youtube-line"/>
            </div>
        </section>
    )
}

export default Footer