import firebase from "../../config/firebase"

export const getProducts = () => {
    return async (dispatch) => {
      try {
        dispatch(setIsLoading(true));
        firebase
          .firestore()
          .collection("products")
          .limit(8)
          .onSnapshot((snapshot) => {
            const products = [];
            snapshot.forEach((doc) =>
                products.push({ ...doc.data(), id: doc.id })
            );
            dispatch({ type: "SET_PRODUCTS", payload: products });
            dispatch(setIsLoading(false));
          });
      } catch (error) {
        console.log(error);
        dispatch(setIsLoading(false));
      }
    };
  };

  export const setIsLoading = (val) => async (dispatch) => {
    dispatch({
      type: "SET_IS_LOADING",
      payload: val,
    });
  };