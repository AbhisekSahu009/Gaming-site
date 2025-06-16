import React from 'react';
import ServiceCss from './../Services/Service.module.css'
// import ServiceImg1 from './../../assets/service1.png'
// import ServiceImg2 from './../../assets/service2.png'


function Service() {
    return (
       <section className={ServiceCss.services}>
           <div className={ServiceCss.service_head}>
               <h2>What we do</h2>
           </div>

           {/*<img src={ServiceImg1} alt="" className={ServiceCss.service_shape}/>*/}
           {/*<img src={ServiceImg2} className={`${ServiceCss.service_shape} ${ServiceCss.service_shape2}`}/>*/}


           <div className={ServiceCss.service_content}>

               <div className={ServiceCss.service_item}>
                   <span>01</span>
                   <h1>Game Server</h1>
               </div>

               <div className={ServiceCss.service_item}>
                   <span>02</span>
                   <h1>Game Testing</h1>
               </div>


               <div className={ServiceCss.service_item}>
                   <span>03</span>
                   <h1>AR/VR Integration</h1>
               </div>


               <div className={ServiceCss.service_item}>
                   <span>04</span>
                   <h1>Game Design</h1>
               </div>

               <div className={ServiceCss.service_item}>
                   <span>05</span>
                   <h1>Game Development</h1>
               </div>





           </div>
       </section>
    )
}

export default Service