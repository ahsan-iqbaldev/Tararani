const initialState = {
    products: [],
    // singleProperty: null,
    isLoading: false,
  };
  
  const productsReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SET_PRODUCTS":
        return { ...state, products: action.payload };
        // case "SET_SINGLE_PROPERTIES":
        //   return { ...state, singleProperty: action.payload };
          case "SET_IS_LOADING":
          return { ...state, isLoading: action.payload };
  
      default:
        return state;
    }
  };
  
  export default productsReducer;