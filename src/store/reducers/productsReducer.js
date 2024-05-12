const initialState = {
    products: [],
    getCategoryProducts:[],
    singleProduct: null,
    isLoading: false,
  };
  
  const productsReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SET_PRODUCTS":
        return { ...state, products: action.payload };
        case "GET_CATEGORIES_PRODUCTS":
          return { ...state, getCategoryProducts: action.payload };
          case "GET_SINGLE_PRODUCT":
            return { ...state, singleProduct: action.payload };
          case "SET_IS_LOADING":
          return { ...state, isLoading: action.payload };
  
      default:
        return state;
    }
  };
  
  export default productsReducer;