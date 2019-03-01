import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import hom4 from '../assets/img/hom1.jpg';
import hom6 from '../assets/img/hom4.jpg';
import hom7 from '../assets/img/New folder/h5.jpg';
import hom9 from '../assets/img/hom7.jpg';


export default () =>  ( 
    
        <Carousel autoPlay showIndicators={false} showThumbs={false} showStatus={false} infiniteLoop={true}>
            <div className="div__carousel">
                <img src={hom4} alt="hom" height="100%" width="100%" />
                
            </div>
            <div>
                <img src={hom6} alt="hom" height="100%" width="100%"/>
            
            </div>
            <div>
                <img src={hom7} alt="hom" height="100%"  width="100%"/>
            
            </div>

        </Carousel>    
);
