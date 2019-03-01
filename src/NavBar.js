import React, {Component } from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class NavBar extends Component {
    render(){
        return(
            <div>
                <nav className="div__NavContainer">
                    <ul className="div__NavContainer__ulLogo"> 
                        <li className="Nav__logo">
                            <Link to="/home"> <img  alt="logo" className="Nav__logo__img"></img> </Link> 
                        </li>
                    </ul>
                    <ul className="div__NavContainer__li">
                        <li><Link to="/catalog"> Catalog </Link> </li>
                        <li><Link to="/register"> Register </Link> </li>
                        <li><Link to="/login"> Login </Link> </li>
                        <li><Link to="/cart"> Cart {this.props.cart.quantity}</Link> </li>
                    </ul>
                </nav> 
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
      cart : state.cart
    }
  }
  
export default withRouter(connect(mapStateToProps)(NavBar));