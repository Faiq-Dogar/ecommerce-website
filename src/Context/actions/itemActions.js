export const setItems = (items) => ({
    type: 'SET_ITEMS',
    payload: items,
  });
  
  export const filterItems = (category) => ({
    type: 'FILTER_ITEMS',
    payload: category,
  });
  