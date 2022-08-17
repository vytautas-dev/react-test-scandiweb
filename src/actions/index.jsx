export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const PRODUCTS = 'PRODUCTS';
export const SEND_CURRENCY = 'SEND_CURRENCY';
export const SEND_CATEGORY = 'SEND_CATEGORY';
export const LOAD_CURRENT_ITEM = 'LOAD_CURRENT_ITEM';
export const CHANGE_ATTRIBUTE = 'CHANGE_ATTRIBUTE';

export const sendProducts = (state) => ({
  type: PRODUCTS,
  state,
});

export const sendCurrency = (state) => ({
  type: SEND_CURRENCY,
  state,
});

export const sendCategory = (state) => ({
  type: SEND_CATEGORY,
  state,
});

export const addToCart = (item) => {
  return {
    type: ADD_TO_CART,
    payload: item,
  };
};

export const removeFromCart = (item) => {
  return {
    type: REMOVE_FROM_CART,
    payload: item,
  };
};

export const loadCurrentItem = (item) => {
  return {
    type: LOAD_CURRENT_ITEM,
    payload: item,
  };
};

export const changeAttribute = (attr, itemID) => {
  return {
    type: CHANGE_ATTRIBUTE,
    payload: {
      attr,
      itemID,
    },
  };
};
