import {
  PRODUCTS,
  SEND_CATEGORY,
  SEND_CURRENCY,
  ADD_TO_CART,
  LOAD_CURRENT_ITEM,
  REMOVE_FROM_CART,
  CHANGE_ATTRIBUTE,
} from '../actions';
import {
  addItemToCart,
  changeAttribute,
  removeItemFromCart,
} from './cart.utils';

const INITIAL_STATE = {
  products: [],
  cart: [],
  input: '',
  category: '',
  currentItem: [],
  index: 0,
  currency: 0,
};

function cart(state = INITIAL_STATE, action) {
  switch (action.type) {
    case PRODUCTS:
      return {
        ...state,
        products: action.state,
      };
    case ADD_TO_CART:
      return {
        ...state,
        cart: addItemToCart(state.cart, action.payload),
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: removeItemFromCart(state.cart, action.payload),
      };
    case LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    case SEND_CURRENCY:
      return {
        ...state,
        currency: action.state,
      };
    case SEND_CATEGORY:
      return {
        ...state,
        category: action.state,
      };
    case CHANGE_ATTRIBUTE:
      return {
        ...state,
        cart: changeAttribute(state.cart, action.payload),
      };
    default:
      return state;
  }
}

export default cart;
