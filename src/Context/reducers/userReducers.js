const initialState = {
  userData: [],
  cart: {
    id: [],
    quantity: []
  }
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER_DATA':
      return {
        ...state,
        userData: action.payload,
      };
    case 'ADD_TO_CART':
      if (!state.cart.id.includes(action.payload)) {
        return {
          ...state,
          cart: {
            ...state.cart,
            id: [...state.cart.id, action.payload],
            quantity: [...state.cart.quantity, 1]
          }
        };
      }
      return state;
    default:
      return state;
  }
};

export default userReducer;
