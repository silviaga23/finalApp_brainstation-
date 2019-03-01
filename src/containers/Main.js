import React, { Component } from 'react';
import {Switch,Route,Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

//Component
import HomePage from '../components/HomePage';
import Catalog from '../components/Catalog';
import Item from '../components/Item';
import NavBar from '../containers/NavBar';
import Cart from '../containers/Cart';
import Login from '../components/Login';
import Register from '../components/Register';
import Payment from '../components/Payment';
import DeliveryDetails from '../containers/DeliveryDetails';
import Confirmation from '../components/Confirmation'

class Main extends Component {

  render() {

    return (
      <div>
        {/* <Header /> */}
          <NavBar/>
          <Switch>
              <Route exact path='/home' component={HomePage} />
              <Route exact path='/catalog' component={Catalog} />
              <Route path='/items/:itemId' component={Item} />
              <Route path='/cart' component={Cart} />
              <Route path='/login' component={Login} />
              <Route path='/register' component={Register} />
              <Route path='/payment' component={Payment} />
              <Route path='/deliveryDetails' component={DeliveryDetails} />
              <Route path='/confirmation' component={Confirmation} />
            {/* <Route exact path='/aboutus' component={About} />
              <Route exact path='/items' component={() => <Items dishes={this.props.dishes} />} />
              
              <Route exact path='/contactus' component={Contact} />} /> */}
              <Redirect to='/home'/>
          </Switch>
       {/*  <Footer /> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products
  }
}

export default withRouter(connect(mapStateToProps)(Main));