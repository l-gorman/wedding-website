import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..

export default function HomePage(){

    AOS.init();


    return(
        <>
       
        <h1 className="small-header"
        >Let's party</h1>
        <h1 className="header">Leo and Max</h1>
        <h1 className="small-header">are getting married!</h1>
        <h1 className="small-header">dd/mm/yyyy</h1>


        <div className="text-boxes"
            
        >
            <p className="box-header">Ceremony</p>
            <p className="box-header-medium">11am - 1pm</p>
            <p className="box-header-small">Turbo Island</p>
            <p className="box-header-small">Stokes Croft</p>
            <p className="box-header-small">BS1 3QU</p>
            <a rel='noopener noreferrer' href='https://www.google.com/maps/place/Turbo+Island,+Jamaica+St,+Bristol+BS1+3QU/@51.4626689,-2.592369,17z/data=!3m1!4b1!4m5!3m4!1s0x48718e7380f032af:0xbfa2a2e70163ad43!8m2!3d51.462698!4d-2.5901071' target='_blank'><p className="box-link">Maps</p></a>
        </div>

        <div className="text-boxes"
        data-aos="fade-in"
        data-aos-delay="0.1"
        data-aos-duration="1000"
        data-aos-once="true">
        <p className="box-header">Reception</p>
            <p className="box-header-medium">2pm - never</p>
            <p className="box-header-small">Blue Mountain</p>
            <p className="box-header-small">Stokes Croft</p>
            <p className="box-header-small">BS1 3PR</p>
            <a rel='noopener noreferrer' href='https://www.google.com/maps/place/Blue+Mountain+Club/@51.4606853,-2.592988,17z/data=!3m1!4b1!4m5!3m4!1s0x48718e740f584e6f:0x7bd97fd78cd0f0c9!8m2!3d51.4606901!4d-2.5908207' target='_blank'><p className="box-link">Maps</p></a>



        </div>
        
       
    </>)
}

