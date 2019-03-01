import React, { Component } from 'react'
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import './style/css/Register.css'
import {register} from '../services/Service';

class Register extends Component {

    constructor(props){
        super(props)
        this.state = {
            input__name: '',
            input__lastName: '',
            input__email: '',
            input__birthdate: '',
            input__password: '',
            input__passwordConfirm: ''
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

    onHandleSubmit (e){
        e.preventDefault();
        if(this.state.name !== '' && this.state.email !=='' && this.state.password !=='' ){
            const user = {
                "email": this.state.input__email,
                "name": this.state.input__name,
                "lastName": this.state.input__lastName,
                "password": this.state.input__password,
                "phone": 85663322,
                
            }
            console.log(user.name, user.lastName,user.birthdate, user.password,user.email);
            if(register(user) != null){
                debugger
                this.props.setNewUser(user)
            }else{
                console.log('null')
            }
        }else{
            console.log('incorrecto')
        }
    }
    
    render() {
        return (
            <div className="divRegister">
                <div className="divRegister__divForm">
                    <h1>REGISTER</h1>
                    <form className="divForm__form">
                        <div className="form__inputName">
                            <input className="form__inputName__name" type="text" placeholder="Name" required name="input__name" onChange={(e)=> this.handleInputChange(e)} />
                            <input className="form__inputName__lastName" type="text" placeholder="LastName" name="input__lastName" onChange={(e)=> this.handleInputChange(e)}  />
                        </div>
                        <input className="divForm__form__input" type="email" placeholder="Email" required name="input__email" onChange={(e)=> this.handleInputChange(e)} />
                        <input className="divForm__form__input" type="date" placeholder="Birthdate" required name="input__birthdate" onChange={(e)=> this.handleInputChange(e)} />
                        <input className="divForm__form__input" type="password" placeholder="Password" required name="input__password" onChange={(e)=> this.handleInputChange(e)} />
                        <input className="divForm__form__input" type="password" placeholder="Confirm Password" required name="input__passwordConfirm" onChange={(e)=> this.handleInputChange(e)} />
                        <input type="button" className="containerLogin__form__input__button divForm__form__input " value="Submit" onClick={(e) =>this.onHandleSubmit(e)} />
                    </form>
                </div>
            </div>
        );
    }
}
    
const mapDispatchToProps = (dispatch,props) => {
    return {
        setNewUser: (user) => {
            dispatch({type : 'REGISTER', payload: user })
            let url = '/login'
            props.history.push(url); 
        }
    };
}

export default withRouter(connect(null,mapDispatchToProps)(Register)); 