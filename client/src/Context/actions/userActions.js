export const setUserData = (userData) => ({
  type: 'SET_USER_DATA',
  payload: userData,
});

export const addToCart = (item_id) => {
  return {
    type: 'ADD_TO_CART',
    payload: item_id,
  };
};
