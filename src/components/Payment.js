import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import '../components/style/css/Payment.css';


class Payment extends Component {

  constructor(props){
    super(props)
    this.state = {
        input__titular_name : '',
        input__number_card : '',
        input__expiration_date : '',
        input__security_code : ''
    }
  }

  handleInputChange(event) {
      const target = event.target;
      const value = target.value;
      const name = target.name;
        
      console.log('input' + name + 'value ' + value)
      this.setState({
        [name]: value
      });
  }

  onHandlePayment(e){
      e.preventDefault();
      if(this.state.input__number_card !== '' && this.state.input__security_code !==''){
          const payment = {
            titularName : this.state.input__titular_name,
            numberCard : this.state.input__number_card,
            expirationDate : this.state.input__expiration_date,
            securityCode : this.state.input__security_code,
            type : 'visa'
          }
          this.props.setPayment(payment)
          
      }else{
          console.log('incorrecto')
      }

  }  

  render() {
    return (
      <div>
          <div className="breadcrumb"><p className="noSelected"><span className="spanCircle">1</span> DELIVERY DETAILS</p><p className="pageSelected"><span className="spanCircle">2</span> PAY </p><p className="noSelected"><span className="spanCircle">3</span>ORDER PLACED</p> </div>
          <hr className="hr__order"></hr>
          <div className="divDeliveryDetails__divDetails">
            <form className="divForm">
              <h2>Payment</h2> <img className="img-responsive pull-right" src="http://i76.imgup.net/accepted_c22e0.png" alt="payment"/>
              <div className="">
                  <input name="input__titular_name" type="text" placeholder="Titular Name" className="" onChange={(e)=> this.handleInputChange(e)}/>
              </div>
              <div className="">
                  <input name="input__number_card" type="text" placeholder="Number Card" className="" onChange={(e)=> this.handleInputChange(e)}/>
              </div>
              <div className="divForm__div__input">
                <div className="divForm__div__input__date">
                    <input name="input__expiration_date" type="date" placeholder="Expiration date" className="" onChange={(e)=> this.handleInputChange(e)}/>
                </div>
                <div className="divForm__div__input__security">
                    <input name="input__security_code" type="password" placeholder="Security code" className="" onChange={(e)=> this.handleInputChange(e)}/>
                </div>
              </div>
              <div><input className="divForm__divButton" type="button"  onClick={(e) => this.onHandlePayment(e)} value="continue"/></div>
            </form>
            <div className="divOrderSumary">
              <h3>ORDER SUMMARY</h3>
              <div className="divOrderSumary__div">
                  <p>{this.props.cart.quantity} PRODUCTS</p>
                  <hr className="divOrderSumary__hr"></hr>
                  <p>Product Total <span className="sumaryDiv__span">${this.props.cart.subtotal}</span> </p>
                  <hr className="divOrderSumary__hr"></hr>
                  <p>Delivery <span className="sumaryDiv__span">FREE</span></p>
                  <hr className="divOrderSumary__hr"></hr>
                  <p>Sales Tax <span className="sumaryDiv__span">0</span> </p>
                  <hr className="divOrderSumary__hr"></hr>
                  <p className="sumaryDiv__spanTotal">Total <span className="sumaryDiv__span ">{this.props.cart.subtotal}</span>$ </p>
              </div>
            </div>
          </div>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    cart : state.cart
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

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Payment));
