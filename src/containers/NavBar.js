import React, {Component } from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {SearchBar} from '../components/SearchBar.js'
import iconMix from '../assets/img/bs.png';
import iconCart from '../assets/img/cart.svg';
import iconProf from '../assets/img/profileIcon.svg';

class NavBar extends Component {

    onHandleSignOut(e){
        e.preventDefault();
        this.props.setLogOut();
    }

    render(){
        if(this.props.users.loggedIn === false){
            return(
                <div>
                    <nav className="div__NavContainer">
                        <ul className="div__NavContainer__ulLogo"> 
                             <li className="Nav__logo">
                                <Link to="/home"> <img  src={iconMix} alt="logo"  className="Nav__logo__img"></img> </Link> 
                            </li>
                        </ul>
                        <ul className="div__NavContainer__li">
                            <li><Link to="/catalog"> Catalog </Link> </li>
                            <li><Link to="/login"><i className="fas fa-user"></i> </Link> </li>
                            <li><Link to="/cart"><i className="fas fa-shopping-cart cartIcon badge" data-count={this.props.cart.quantity}></i>  </Link></li>
                        </ul>
                    </nav> 
                </div>
            );
        }else{
            return(
                <div>
                    <nav className="div__NavContainer">
                        <ul className="div__NavContainer__ulLogo"> 
                            <li className="Nav__logo">
                                <Link to="/home"> <img  src={iconMix} alt="logo" className="Nav__logo__img"></img> </Link> 
                            </li>
                        </ul>
                        <ul className="div__NavContainer__li">
                            <li><Link to="/catalog"> Catalog </Link> </li>
                            <li><Link to="/login"> Hi {this.props.users.user.name} </Link> </li>
                            <li><Link to="/cart"><i className="fas fa-shopping-cart cartIcon badge cartLogin" data-count={this.props.cart.quantity}></i>  </Link></li>
                            <li onClick={(e)=> this.onHandleSignOut(e)} className="signOut"> Sign out </li>
                        </ul>
                    </nav> 
                </div>    
            );
        }
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
      setLogOut: () => {
            dispatch({type : 'LOG_OUT'})
            let url = '/home'
            props.history.push(url)
      }
    };
};
  
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(NavBar));