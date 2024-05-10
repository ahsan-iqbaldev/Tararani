import firebase from "../../config/firebase"

export const getCaterories = () => {
    return async (dispatch) => {
      try {
        dispatch(setIsLoading(true));
        firebase
          .firestore()
          .collection("categories")
          .limit(4)
          .onSnapshot((snapshot) => {
            const categories = [];
            snapshot.forEach((doc) =>
                categories.push({ ...doc.data(), id: doc.id })
            );
            dispatch({ type: "SET_CATEGORIES", payload: categories });
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