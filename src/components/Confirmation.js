import React, { Component } from 'react'
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
//import {purchase} from '../services/Service';
const APISTORE = 'http://localhost:8080/v1/user' ;

class Confirmation extends Component {

  confirmationOrder(e){
    e.preventDefault();
    const user = {
      email : this.props.users.user.email, 
      listPurchases : [{
        "user": this.props.users.user,
        "date": new Date(),
        "amount": this.props.cart.order.subtotal,
        "productPurchase": this.props.cart.cart,
        "address" : this.props.cart.order.address,
        "payment" : this.props.cart.order.payment,
      }]
    }
    console.log(user)
    fetch(APISTORE +'/purchase', {
      method: 'post',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(user)
    }).then(res => {
        if(res!==null){
          console.log(res);
        } 
    }).catch(err => err)
  } 

  render() {
    return (
      <div>
          <div className="breadcrumb"><p className="noSelected"><span className="spanCircle">1</span> DELIVERY DETAILS</p><p className="noSelected"><span className="spanCircle">2</span> PAY </p><p className="pageSelected"><span className="spanCircle">3</span>ORDER PLACED</p> </div>
          <hr className="hr__order"></hr>
          <div className="divConfirmation">
            <div className="divOrderConfirmation">
              <h3>ORDER SUMMARY</h3>
              <div className="divOrderConfirmation__div">
                  <p>{this.props.cart.quantity} PRODUCTS</p>
                  <hr className="divOrderConfirmation__hr"></hr>
                  <p>Product Total <span className="sumaryDiv__span">${this.props.cart.subtotal}</span> </p>
                  <hr className="divOrderConfirmation__hr"></hr>
                  <p>Delivery <span className="sumaryDiv__span">FREE</span></p>
                  <hr className="divOrderConfirmation__hr"></hr>
                  <p>Sales Tax <span className="sumaryDiv__span">0</span> </p>
                  <hr className="divOrderConfirmation__hr"></hr>
                  <p className="sumaryDiv__spanTotal">Total <span className="sumaryDiv__span ">{this.props.cart.subtotal}</span>$ </p>
              </div>
            </div>
          </div>
          <div className="divConfirmation__inputBut">
            <input type="button" className="divForm__divButton btn-confirmation" onClick={(e) => this.confirmationOrder(e)} value="Accept"/>
          </div>
          <div className="confirmOrder">

          </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    cart : state.cart,
    users : state.users
  }
}

const mapDispatchToProps = (dispatch,props) => {
  return {
      setPayment: (payment) => {
          dispatch({type : 'SET_PAYMENT', payload: payment })
          props.history.push('/confirmation');
      },
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Confirmation));
