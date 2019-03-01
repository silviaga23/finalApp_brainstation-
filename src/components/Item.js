import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import footer from '../assets/img/07.jpg'
import {Link} from 'react-router-dom';

import './style/css/Item.css';
import banner from '../assets/img/banner1c.png';

class Item extends Component {

    addToCart(item){
        let itemA = {
            product : item,
            quantity: 1
        }
        this.props.addToCart(itemA);       
    }

    render(){
        const item = this.props.products.filter((item) => item.id === parseInt(this.props.match.params.itemId,10))[0];
        console.log('props'+ item.name);
        return (
            <div className="divItem" autoFocus >
                <div className="divItem__catTitle ">
                    <img  src={banner} alt="banner" width="100%" className=""></img>
                </div>
                <section className="divItem__sectionHeader animated fadeInUp delay-1s">
                    <div className="divItem__sectionHeader__title">
                        <h1 className="divItem__sectionHeader__h1">{item.serie}</h1>
                        <h2>{item.brand}</h2>
                    </div >
                    <div className="divItem__sectionHeader__divImg">
                        <img className="divImg__img" src={item.images[0].url} alt={item.name} />    
                    </div>  
                </section>
                <section className="divItem__sectionOverview"> 
                    <div className="divItem__sectionOverview__features">
                        <h2 className="">{item.name}</h2>
                        <p>{item.description}</p>
                        <audio src={item.sound} controls className="divItem__sectionOverview__features__audio"> 
                            Your browser does not support the <code>audio</code> element.
                        </audio>
                        <button className="features__button" onClick={() => this.addToCart(item)}> ${item.price} But Now</button>
                    </div>  
                </section> 
                <section className="divItem__sectionSpecification">   
                    <div className="sectionSpecification__specification">
                        <h2>Specification</h2>
                        <p>{item.feature}</p>
                        
                    </div> 
                </section>
                <section className="divItem__sectionOverview__video">
                    <div className="divItem__sectionOverview__video__video">
                        <iframe className="video__iframe" title="synth" src={item.video} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </section>
                <section className="divItem__sectionFooter">
                    <div className="sectionFooter__p">
                        <p>
                        {item.name}
                        </p>
                    </div>
                    <div>
                        <img  src={footer} alt="banner" width="100%" className=""></img>
                    </div>
                </section>
                <footer>
                    <div className="sectionFooter__divInfo">
                        <div>
                            <p>© 2019 Beat Store</p>
                        </div>
                        <div>
                            <p>SHOP AND SERVICE</p>
                            <p className="freeSFooter"><i className="far fa-check-circle "></i> FREE SHIPPING</p>
                        </div>
                        <div>
                            <p>CONNECT WITH US</p>
                            <p><i className="fab fa-facebook-f footerIcon"></i> <i className="fab fa-soundcloud footerIcon"></i></p>
                        </div>
                        
                    </div>
                </footer>
                
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        products : state.products.productsList[0],
        cart : state.cart
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (product) => {
            dispatch({type : 'ADD', payload: product })
        }
    }
}
  
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Item));