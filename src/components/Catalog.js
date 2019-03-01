import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Products from './Products'
// First way to import
import { FadeLoader } from 'react-spinners';
import { css } from '@emotion/core';

import './style/css/Catalog.css';

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

const APIPRODUCTS = 'http://localhost:8080/v1/product';

class Catalog extends Component {

    constructor(props) {
        super(props);
        this.state = {
          loading: true
        }
      }

    componentDidMount(){
        fetch(APIPRODUCTS, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
        }).then((response)=>response.json())
            .then((res) => {
                this.props.requestProducts(res)
        })
        .catch((error) => {
            console.error(error);
        });
    }

    addToCart(item){
        let product = {
            product : item,
            quantity: 1
        }
        this.props.addToCart(product);      
    }

    
    onHandleSearch = e =>{
        const wroteValue= e.target.value

        if(wroteValue === ''){
            this.props.requestConsult(this.props.products); 
        }else{
             
            const products = this.props.products;
            const list  = products.filter( product => {
                return product.serie.toLowerCase().indexOf(wroteValue.toLowerCase()) !== -1 
            })
            console.log('consulting',list)
            this.props.requestConsult(list)
        }       
    }

    render(){
        if(this.props.products !== undefined ){
            return(
                <div className="divCatalog">
                    <div className="divCatalog__pHeader">
                        <p className="catalog__p">Products</p>
                        {/* <div className="SearchBarContainer">
                            <div className="">
                                <input onChange={(e) => this.onHandleSearch(e)} type="text" placeholder="Category" className="searchBarContainer__row__input"></input>
                                <i className="fas fa-search SearchBarContainer--icon"></i>
                            </div>
                        </div> */}
                    </div>
                    <Products list={this.props.products}
                    addCart={(item)=> this.addToCart(item)}/>  
                </div> 
            );
        }else{
            return(
                <div className="divCatalog">
                    <div className='sweet-loading'>
                        <FadeLoader
                        css={override}
                        sizeUnit={"px"}
                        size={150}
                        color={'#123abc'}
                        loading={this.state.loading}
                        />
                    </div>  
                </div> 
            );
        }
    }
}

const mapStateToProps = state => {
    return {
      products : state.products.productsList[0],
      productsActive : state.products.listConsulting[0],
      cart : state.cart,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        requestProducts: (result) => {
            dispatch({type: 'REQUEST_POSTS',payload: result})
        },
        requestConsult: (query) => {
            dispatch({type: 'PRODUCT_SEARCHED',payload: query})
        },
        addToCart: (item) => {
            dispatch({type : 'ADD', payload: item })
        },
        removeFromCart: (item) => {
            dispatch({type : 'REMOVE', payload: item })
        },
    }
}
  
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Catalog));