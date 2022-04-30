import { ActionTypes } from "../contants/action-type"

export const setProducts = (products) => {
    return{
        type:ActionTypes.SET_PRODUCTS,
        payload: products,
    }
}

export const selectedProducts = (product) => {
    return{
        type:ActionTypes.SELECTED_PRODUCTS,
        payload: product,
    }
}
export const removeSelectedProducts = (product) => {
    return{
        type:ActionTypes.REMOVE_SELECTED_PRODUCTS,
    }
}