const initialState = {
    categories: [],
    allCategories: [],
    singleCategory: null,
    isLoading: false,
  };
  
  const categoriesReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SET_CATEGORIES":
        return { ...state, categories: action.payload };
        case "SET_ALL_CATEGORIES":
          return { ...state, allCategories: action.payload };
        case "GET_SINGLE_CATEGORY":
          return { ...state, singleCategory: action.payload };
          case "SET_IS_LOADING":
          return { ...state, isLoading: action.payload };
  
      default:
        return state;
    }
  };
  
  export default categoriesReducer;