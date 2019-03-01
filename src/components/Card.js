import React from "react";
import {Link} from 'react-router-dom';

export const Card = (props) => {

    return (
        <div className="div__cards_item">
            <Link to={`/items/${props.item.id}`} >
            <div  className="cards__img">
                <img alt={props.item.name} src={props.item.images[0].url}/> 
            </div>
            </Link>
            <div className="">
                <h4>Card{props.item.brand}</h4>
                <p className=""><span> <i className="far fa-clock"></i></span></p>
                <p className=""><span> <i className="far fa-calendar-alt"></i></span> </p>

            </div>
            <div className="">
                <button  className="card__button__location"><i className="fas fa-map-marked"></i> See details</button>
            </div>
        </div> 
    );
}
