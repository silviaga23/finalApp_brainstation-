const initialState = {
cart: [],
quantity: 0,
subtotal: 0,
order : []
}

const cart = (state = initialState, action) => {
    
    const { type, payload } = action;
    let newState;
    let newCart;
    let newOrder;
    let exists;

    switch (type) {
        case 'ADD': 

            exists = state.cart.findIndex((item) => item.product.id == payload.product.id ) 

            if(exists === -1){
                newCart = [...state.cart];
                newCart.push(payload);
                newState = {...state};
                newState.cart = newCart;
                newState.quantity = state.quantity + 1
            }else{
                state.cart[exists].quantity  += 1 ;
                state.quantity += 1;
            }
        break;
        
        case 'REMOVE': 
            
            exists = state.cart.findIndex((item) => item.product.id == payload.id ) 
            state.quantity -= state.cart[exists].quantity;
            state.cart.splice(exists,1); 
            
        break;

        case 'CHANGE_QUANTITY_PRODUCT':
            
            console.log('payload' ,payload)
            exists = state.cart.findIndex((item) => item.product.id == payload.product.id) 
            
            newState = {...state}
            
            let quantityFinal = newState.quantity - state.cart[exists].quantity
            console.log('quanfinalsin quanti product var' , quantityFinal)
            
            newState.quantity = quantityFinal
            console.log('quanfinalsin quanti product state' , newState.quantity)


            console.log('quanti before prod' , state.cart[exists].quantity)

            state.cart[exists].quantity = payload.quantity

            console.log('quanti before prod' , state.cart[exists].quantity)

            newState.quantity = parseInt(newState.quantity) + parseInt(state.cart[exists].quantity)
            console.log('quanti after prod' , newState.quantity)
            
            
        break;

        case 'SET_ADDRESS':
            
            newOrder = {
                ...state.order, 
                address : payload
            };
            newState = {...state};
            newState.order = newOrder;

        break;

        case 'SET_PAYMENT': 
            
            newOrder = {
                ...state.order,
                payment : payload
            };
            newState = {...state};
            newState.order = newOrder;
        break;

        case 'SET_SUBTOTAL': 
            
            newOrder = {
                subtotal : payload
            };
            newState = {...state};
            newState.subtotal = payload;
            newState.order = newOrder;

        break;

        default: 
            return state;
    }

    return Object.assign(
        {},
        state,
        {
            ...newState
        }
    );

};

export default cart;