import { ADD_TO_CART, REMOVE_FROM_CART } from "../constants/cartConstants"

export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const item = action.payload;
            console.log(item)
            console.log(state.cartItems)
            const exist = state.cartItems.find(product => product.id === item.id)
            console.log(exist)
            return { ...state, cartItems: [...state.cartItems, item] }
        case REMOVE_FROM_CART:
            return { ...state, cartItems: state.cartItems.filter(product => product != action.payload) }
        default:
            return state
    }
}