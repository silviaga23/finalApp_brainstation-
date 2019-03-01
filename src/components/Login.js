import React from 'react'
import { withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import './style/css/Login.css'
import {Link} from 'react-router-dom';

//endpoint to API
const APISTORE = 'http://localhost:8080/v1/user' ;

class Login extends React.Component {

    constructor(props){
      super(props)
      this.state = {
        input__email : '',
        input__password : ''
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

    onHandleSubmit(event) {
      event.preventDefault();
      if(this.state.email !== '' && this.state.password !==''){
        const user = {
          "email": this.state.input__email,
          "password": this.state.input__password
        }
        fetch(APISTORE + '/login', {
          method: 'post',
          headers: {
              'Content-Type':'application/json',
          },
          body: JSON.stringify(user)    
        }).then((response) => response.json())
          .then((res) => {
              console.log(res)
              if(res!==null){
                window.sessionStorage.setItem('customer',res.email)
                this.props.setLogin(res)
              } 
        });
      }else{
        console.log('incorrecto')
      }
    }
  
    render() {
      return (
        <div className="div_containerLogin" >
          <div className="containerLogin">
            <form className="containerLogin__form">
                <h2>LOG IN</h2>
                <div className="containerLogin__form__input">
                  <input type="text" placeholder="E-mail" name="input__email" onChange={(e)=> this.handleInputChange(e)} />
                </div>
                <div className="containerLogin__form__input" >
                  <input type="password" placeholder="Password"name="input__password" onChange={(e)=> this.handleInputChange(e)} />
                </div>
                <div className="containerLogin__form__input" >
                  <input className="containerLogin__form__input__button" type="button" value="Submit" onClick={(e)=> this.onHandleSubmit(e)} />
                </div>
                <li className="containerLogin__anchorRegister">Are you new? <Link to="/register" > Register </Link> </li>
            </form>
          </div>
        </div>
      );
    }
  }
  
const mapStateToProps = (state) => {
  return {
      user : state.user
  };
};

const mapDispatchToProps = (dispatch,props) => {
    return {
      setLogin: (user)=> {
            dispatch({type : 'LOGIN', payload: user })
            let url = '/catalog'
            props.history.push(url)
      }
    };
};
    
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Login));
