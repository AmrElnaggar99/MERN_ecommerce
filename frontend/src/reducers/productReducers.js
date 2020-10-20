import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL } from '../constants/productConstants'
import { PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL } from '../constants/productConstants'

export const productListReducer = (state = { products: [] }, action) => {
    // Each reducer takes the initial state and an action to dispatch as arguments.
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return { loading: true, products: [] }
            // becase when we make the request, we need the component to know it's fetching.
        case PRODUCT_LIST_SUCCESS:
            return { lading: false, products: action.payload }
        case PRODUCT_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}


export const productDetailsReducer = (state = { product: { reviews: [] } }, action) => {
    // Each reducer takes the initial state and an action to dispatch as arguments.
    switch (action.type) {
        case PRODUCT_DETAILS_REQUEST:
            return { loading: true, ...state }
            // becase when we make the request, we need the component to know it's fetching.
        case PRODUCT_DETAILS_SUCCESS:
            return { lading: false, product: action.payload }
        case PRODUCT_DETAILS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}