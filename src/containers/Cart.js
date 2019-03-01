import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import '../components/style/css/Cart.css';
import cart from '../assets/img/emtyCart.jpg';

class Cart extends Component {

  onDeleteItem(item){
    console.log('deleting' + item.id); 
    this.props.removeFromCart(item); 
  }

  onHandleSubtotal() {
    console.log('function'); 
    let subtotal = 0;

    this.props.cart.cart.forEach(item => {
      subtotal+= item.product.price * item.quantity;     
    });

    return subtotal;
  }

  onChangeQuantify(e , item){
    e.preventDefault();
    const obj = {
      product: item,
      quantity : e.target.value
    }
    this.props.setQuantity(obj)
    console.log('changing value' , e.target.value , "item" , item.id);
  }

  onHandlePayment(e){
    if(this.props.user.loggedIn){
      e.preventDefault();
      let subtotal = this.onHandleSubtotal();
      this.props.setSubtotal(subtotal); 
    }else{
      this.props.history.push('/login')
    }

  }

  onContinueShopping(e){
    e.preventDefault();
    this.props.history.push('/catalog')
  }

  render() {
      if(this.props.cart.quantity !== 0 ) {  
        const list_items = this.props.cart.cart.map((item,index) => {
          return (
            <tr key={index} >
              <td>
                <div className="table__cardProduct">
                  <Link to={`/items/${item.product.id}`} >
                      <figure className="divCart__table__tdImg">
                        <img className="tdImg__img" alt={item.product.name} src={item.product.images[0].url}/>
                      </figure>
                  </Link>
                  <div className="cardProduct__p">
                    <Link to={`/items/${item.product.id}`} className="table__tdProduct__anchor">
                    <p>{item.product.name}</p>
                  </Link>
                  </div>
                </div>
              </td>
              <td>${item.product.price}</td>
              <td>
                <select className="table__select" onChange={(e) => this.onChangeQuantify(e , item.product)} value={item.quantity}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </td>
              <td><i className="far fa-trash-alt table__trashIcon" onClick={() => this.onDeleteItem (item.product)}></i></td>
            </tr> 
          );
        });
        
        return (
          <div className="divCart">
            <div className="divCart__divTitle"><p className="divTitle__p">Cart</p></div>
            <div className="divCart__content">
              <table className="divCart__table">
                <thead className="divCart__table__header">
                  <tr>
                    <th className="table__trProduct">Product</th>
                    <th className="table__trProduct">Price</th>
                    <th className="table__trProduct">Quantity</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>{list_items}</tbody>
              </table>
              <hr className="divCart__hr" />
              <div className="divCart__divSubtotal">
                <div>
                  <p className="">Subtotal</p>
                  <p>Total without taxes</p>
                  <p>Taxes incl.</p>
                  <p>Total order</p>
                </div>
                <div>
                  <p> ${this.onHandleSubtotal()}</p>
                  <p> ${this.onHandleSubtotal()}</p>
                  <p> $0.00</p>
                  <p> ${this.onHandleSubtotal()}</p>
                </div>
              </div>
              <div className="divCart__divButtons">
                <input className="divButtons__btnContinue" type="button" onClick={(e) => this.onContinueShopping(e)}  value="Continue Shopping"/>
                <input className="divButtons__btnCheckOut" type="button" onClick={(e) => this.onHandlePayment(e)} value="Checkout Now" />
              </div>
            </div>
          </div>
        )
    }else{
      return( 
        <div className="divEmptyCart">
          <div className="divCart__divTitle"><p className="divTitle__p">Cart</p></div>
          <div className="div__emptyCart">
            <figure>
              <img className="div__emptyCart__img" alt="cart__empty" width="100%" src={cart}/>
            </figure>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    user : state.users,
    cart : state.cart
  }
}

const mapDispatchToProps = (dispatch,props) => {
  return {
      addToCart: (item) => {
        dispatch({type : 'ADD', payload: item })
      },
      removeFromCart: (item) => {
        dispatch({type : 'REMOVE', payload: item })
      },
      setQuantity: (obj) => {
        dispatch({type: 'CHANGE_QUANTITY_PRODUCT', payload: obj})
      },
      setSubtotal: (subtotal) => {
        dispatch({type: 'SET_SUBTOTAL' , payload: subtotal})
        props.history.push('/deliveryDetails')
      }
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Cart));