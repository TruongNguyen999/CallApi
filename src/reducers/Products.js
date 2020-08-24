import * as Types from './../constants/ActionType';

const initialState = [
    {
        id: '',
        txtName: '',
        txtPrice: '',
        chkbStatus: false
    }
];

const findIndex = (products, id) => {
    let result = -1;
    products.forEach((product, index) => {
        if (product.id === id) {
            result = index;
        }
    });
    return result;
}

const Products = (state = initialState, action) => {
    let index;
    switch(action.type){
        case Types.FETCH_ALL_PRODUCTS:
            state = action.products;
            return [...state];
        case Types.DELETE_PRODUCT:
            index = findIndex(state, action.id);
            if(index !== -1){
                state.splice(index, 1);
            }
            return [...state];
        case Types.ADD_PRODUCT:
            state.push(action.product);
            return [...state];
        case Types.EDIT_PRODUCT_ITEM:
            index = findIndex(state, action.product.id);
            state[index] = action.product;
            return [...state];
        default: return [...state]; 
    }
}

export default Products;