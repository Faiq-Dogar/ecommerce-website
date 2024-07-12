const initialState = {
    items: [],
    originalItems: [],
  };
  
  const itemsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_ITEMS':
        return {
          ...state,
          items: action.payload,
          originalItems: action.payload,
        };
      case 'FILTER_ITEMS':
        return {
          ...state,
          items: state.originalItems.filter(item => item.category === action.payload),
        };
      default:
        return state;
    }
  };
  
  export default itemsReducer;