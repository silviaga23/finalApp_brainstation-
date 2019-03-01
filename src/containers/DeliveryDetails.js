import React, { Component } from 'react'
import {withRouter} from 'react-router-dom';
import '../components/style/css/DeliveryDetails.css'
import {connect} from 'react-redux';

class DeliveryDetails extends Component {

    constructor(props){
        super(props)
        this.state = {
            name : '',
            last_name: '',
            street: '',
            number_house: '',
            zip_code: '',
            city: '',
            country: '',
            phone_number: ''
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

    isNumberKey(evt){
        const charCode = (evt.which) ? evt.which : evt.keyCode
        if (charCode > 31 && (charCode < 48 || charCode > 57))
            return false;
        return true;
    }
    
    onContinue(e){
        e.preventDefault();
        if(this.state.name !== '' && this.state.last_name !==''){
            const address = {
                name : this.state.name,
                last_name: this.state.last_name,
                street: this.state.street,
                phoneNumber: this.state.phone_number,
                numberHouse: this.state.number_house,
                zipCode: this.state.zip_code,
                city: this.state.city,
                country: this.state.country
                
            }
            this.props.setAddress(address)
            
        }else{
            console.log('incorrecto')
        }
    }
    render() {
        return (
            <div className="divDeliveryDetails">
                
                <div className="breadcrumb"><p className="pageSelected"><span className="spanCircle">1</span> DELIVERY DETAILS</p><p className="noSelected"><span className="spanCircle">2</span> PAY </p><p className="noSelected"><span className="spanCircle">3</span>ORDER PLACED</p> </div>
                <hr className="hr__order"></hr>
                <div className="divDeliveryDetails__divDetails">
                    <div className="divForm">
                        <form className="divFormDeliveryDetails__form">
                            <h2 className="form__title">Address</h2>
                            <div>
                                <div className="">
                                    <input name="name" type="text" placeholder="Name" required className="" required onChange={(e)=> this.handleInputChange(e)}/>
                                </div>
                                <div className="">
                                    <input name="last_name" type="text" placeholder="Last Name" required className="" onChange={(e)=> this.handleInputChange(e)} />
                                </div>
                            </div>
                            <div className="">
                                <input name="street" type="text" placeholder="Street" className="" required onChange={(e)=> this.handleInputChange(e)}/>
                            </div>
                            <div className="">
                                <input name="number_house" type="text" placeholder="Number House" required className="" onChange={(e)=> this.handleInputChange(e)}/>
                            </div>
                            <div className="">
                                <input name="zip_code"  type="text" placeholder="Zip Code" className="" required onChange={(e)=> this.handleInputChange(e)}/>
                            </div>
                            <div className="">
                                <input name="city" type="text" placeholder="City" className="" required onChange={(e)=> this.handleInputChange(e)}/>
                            </div>
                            <div className="">
                                <input name="country" type="text" placeholder="Country" className="" required onChange={(e)=> this.handleInputChange(e)}/>
                            </div>
                            <div className="">
                                <input name="phone_number" type="text" placeholder="Phone Number" className="" required onChange={(e)=> this.handleInputChange(e)}/>
                            </div>
                            <div><button className="dd__input__button" onClick={(e) => this.onContinue(e)}> Continue with payments </button></div>
                        </form>
                    </div>
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
        );
    }
}

const mapStateToProps = state => {
    return {
      cart : state.cart
    }
  }
  
  const mapDispatchToProps = (dispatch,props) => {
    return {
        setAddress: (address) => {
            dispatch({type : 'SET_ADDRESS', payload: address })
            props.history.push('/payment'); 
        },
    }
  }
  
  export default withRouter(connect(mapStateToProps,mapDispatchToProps)(DeliveryDetails));
