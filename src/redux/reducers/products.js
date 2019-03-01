const initialState = {
    productsList: [],
    listConsulting: []
}

const products = (state = initialState, action) => {
    let newState;
    let newProducts;

    const { type, payload } = action;

    switch (type) {
        case 'REQUEST_POSTS': {
            newProducts = [...state.productsList];
            newProducts.push(payload);
            newState = {...state};
            newState.productsList = newProducts;
            newState.listConsulting = newProducts;
            break;
        }
        case "PRODUCT_SEARCHED":
            state = {
                ...state,
                listConsulting : action.payload
            };
            break;

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
          
export default products;