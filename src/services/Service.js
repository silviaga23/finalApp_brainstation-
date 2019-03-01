//endpoint to API
const APISTORE = 'http://localhost:8080/v1/user' ;

export const login = (data) => fetch(APISTORE + '/login', {
    method: 'post',
    headers: {
        'Content-Type':'application/json',
    },
    body: JSON.stringify(data)    
  }).then((response) => response.json())
    .then((res) => {
        console.log(res)
        if(res!==""){
          window.sessionStorage.setItem('customer',res.email)
          window.sessionStorage.setItem('username',res.name)
          sessionStorage.setItem('token',res.token)
        } 
  });

export const register = (data) => 
    fetch(APISTORE +'/register', {
    method: 'post',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
    
  }).then(res => {
        console.log('success' + res)
  }).catch(err => err)


export const purchase = (data) => fetch(APISTORE +'/purchase', {
    method: 'post',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  }).then(res => {
        console.log('success' + res)
  }).catch(err => err)
