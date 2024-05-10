const initialState = {
    categories: [],
    // singleProperty: null,
    isLoading: false,
  };
  
  const categoriesReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SET_CATEGORIES":
        return { ...state, categories: action.payload };
        // case "SET_SINGLE_PROPERTIES":
        //   return { ...state, singleProperty: action.payload };
          case "SET_IS_LOADING":
          return { ...state, isLoading: action.payload };
  
      default:
        return state;
    }
  };
  
  export default categoriesReducer;