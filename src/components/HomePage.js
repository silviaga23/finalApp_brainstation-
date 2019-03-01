import React from 'react';
import {Link} from 'react-router-dom';
import pic from '../assets/img/test1.png';
import picAmelie from '../assets/img/art1.png';
import picHacker from '../assets/img/art2.png';
import picSkillex from '../assets/img/art3.png';
import Carousel from './Carousel'

function HomePage(props) {
    return(
        <div>
            <div className="div__homePage">
                <Carousel/>
                <div className="div__homePage__div">
                    <h1 className="div__homePage__h1">BEAT STORE</h1>
                    <Link to='/catalog'>
                        <button className="div__homePage__button">BUY NOW</button>
                    </Link>
                </div>
            </div>
                    
        </div>
    );
}

export default HomePage;