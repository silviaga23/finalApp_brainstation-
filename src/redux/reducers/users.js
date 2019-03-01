const initialState = {
    users: [],
    loggedIn: false,
    googleLogin: false,
    name: '', 
    user: ''
}

const users = (state = initialState, action) => {
    const { type, payload } = action;
    let newState;
    let newUser;

    switch (type) {
        case 'REGISTER': {

            newUser = [...state.users];
            newUser.push(payload);
            newState = {...state};
            newState.users = newUser;
            
        break;
        }
        case 'LOGIN': {

            /* if (state.name === payload.username) {
                newState = { 
                    ...state,
                    isLoggedIn: true
                };
            }else { */
                newState = { ...state, 
                loggedIn: true, 
                name: payload.email,
                user: payload
                }
                storeToken(payload.token);
            /* } */
        break;
        }

        case 'LOG_OUT': {
            newState = {
                ...state,
                loggedIn: false,
                customer: '',
                user: ''
            };
            deleteToken()
        break;

        }
        default: {
            return state;
        }
    }

    return Object.assign(
        {},
        state,
        {
            ...newState
        }
    );

};


function storeToken(token) {
    sessionStorage.setItem('token', token);
    sessionStorage.setItem('token-time', new Date().getTime());
}
  
function deleteToken() {
    sessionStorage.removeItem('token');
}

function getToken() {
    return sessionStorage.getItem('token') || '';
}

export default users;