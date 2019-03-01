export function fetchProducts() {
    return {
        type: "FETCH_PRODUCTS"
    };
}

export function fetchProductsSuccess(products) {
    return {
        type: "FETCH_PRODUCTS_SUCCESS",
        products
    };
}

export function fetchProductsFailure(error) {
    return {
        type: "FETCH_PRODUCTS_FAYLURE",
        error
    };
}