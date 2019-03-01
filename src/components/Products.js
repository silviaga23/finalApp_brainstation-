import React from 'react';
import { Link } from 'react-router-dom';

import './style/css/Product.css';

function RenderCard ({item,addCart}) {
    return (
        
        <div className="divProduct__divCard">
            <Link to={`/items/${item.id}`} >
                <figure className="divCard__figure">
                    <img alt={item.name} src={item.images[0].url} className="divImgProd__img"/>
                </figure>
            </Link>
            <div className="divCard__divInfo">
                <h4>{item.brand}</h4>
                <p>${item.price}</p>
                <button onClick={addCart} className="divProduct__form__input__button"> Add to cart</button>
            </div>
        </div>
    );
}
const Products = (props) => {
    const menu = props.list.map((item) => {
        return (
            <RenderCard item={item} key={item.id} 
            addCart={()=> props.addCart(item)}/>
        );
    }); 

    return (
        <div className="divProduct">
            {menu}
        </div>
    );
}

export default Products;