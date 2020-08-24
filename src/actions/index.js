import * as Types from './../constants/ActionType';
import callApi from '../utils/apiCaller';

export const fetchAllProducts = (products) => {
    return {
        type: Types.FETCH_ALL_PRODUCTS,
        products
    };
}

export const fetchAllProductsRequest = () => {
    return dispatch => {
        return callApi('products','GET',null).then(res => {
            dispatch(fetchAllProducts(res.data))
        });
    };
}

export const deleteProduct = (id) => {
    return {
        type: Types.DELETE_PRODUCT,
        id
    }
}

export const deleteProductRequest = (id) => {
    return dispatch => {
        return callApi(`products/${id}`,'DELETE',null).then(res => {
           if(res.status === 200) // ok
           {
               dispatch(deleteProduct(id))
           }
        })
    }
}

export const addProduct = (product) => {
    return {
        type: Types.ADD_PRODUCT,
        product
    }
}

export const addProductRequest = (product) => {
    return dispatch => {
        return callApi('products','POST',product).then(res => {
            dispatch(addProduct(res.data))
        })
    }
}

export const editProduct = product => {
    return {
        type: Types.EDIT_PRODUCT,
        product
    }
}

export const editProductReuest = id => {
    return dispatch => {
        return callApi(`products/${id}`, 'GET', null).then(res => {
            dispatch(editProduct(res.data))
        })
    }
}

export const editProductItem = product => {
    return {
        type: Types.EDIT_PRODUCT,
        product
    }
}

export const editProductItemRequest = (product) => {
    return dispatch => {
        return callApi(`products/${product.id}`,'PUT',product).then(res => {
            dispatch(editProductItem(res.data))
        })
    }
}