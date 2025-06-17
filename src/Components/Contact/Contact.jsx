import React from 'react';
import ContactCss from './../Contact/Contact.module.css'


function Contact() {
    return (
        <section className={ContactCss.contact}>
            <div className={ContactCss.contact_head}>
                <h1>CONTACT US</h1>
                <div className={ContactCss.contact_head_text}>
                    <div className={ContactCss.line}></div>
                    <h1>HAVE A PROJECT?</h1>
                </div>
            </div>



            <div className={ContactCss.contact_container}>
                <div className={ContactCss.contact_form}>
                    <div className={ContactCss.contact_form_head}>
                        <h2>WHAT CAN WE DO FOR YOU?</h2>
                        <div className={ContactCss.contact_btns}>
                            <button className={ContactCss.contact_btn}>Design</button>
                            <button className={ContactCss.contact_btn}>Development</button>
                            <button className={ContactCss.contact_btn}>Animation</button>
                            <button className={ContactCss.contact_btn}>Other</button>
                        </div>
                    </div>
                    <div className={ContactCss.contact_inputs}>
                        <div className={ContactCss.contact_inputs_head}>
                            <div className={ContactCss.inputs}>
                                <input type="text" placeholder='Your Name'/>
                                <i className='ri-user-3-line'/>
                            </div>
                            <div className={ContactCss.inputs}>
                                <input type="text" placeholder='Your Email'/>
                                <i className='ri-mail-open-line'/>
                            </div>

                        </div>

                        <div className={ContactCss.textarea}>
                            <textarea name=""  id=""   placeholder='Project Description'/>
                            <i className='ri-pencil-fill'/>
                        </div>

                    </div>

                    <button>Working with Us
                        <i className={'ri-arrow-right-s-line'}></i>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>

                <div className={ContactCss.contact_content}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</p>
                    <div className={ContactCss.socials}>
                    <i className={'ri-facebook-fill'}></i>
                    <i className={'ri-twitter-fill'}></i>
                    <i className={'ri-instagram-line'}></i>
                    <i className={'ri-github-fill'}></i>
                    <i className={'ri-google-fill'}></i>


                    </div>
                </div>
            </div>






        </section>
    )
}

export default Contact