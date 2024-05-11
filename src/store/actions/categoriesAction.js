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

  export const getAllCaterories = () => {
    return async (dispatch) => {
      try {
        dispatch(setIsLoading(true));
        firebase
          .firestore()
          .collection("categories")
          .onSnapshot((snapshot) => {
            const categories = [];
            snapshot.forEach((doc) =>
                categories.push({ ...doc.data(), id: doc.id })
            );
            dispatch({ type: "SET_ALL_CATEGORIES", payload: categories });
            dispatch(setIsLoading(false));
          });
      } catch (error) {
        console.log(error);
        dispatch(setIsLoading(false));
      }
    };
  };

  export const getSingleCategory = (id) => async (dispatch) => {
    dispatch(setIsLoading(true));
    const data = firebase
      .firestore()
      .collection("categories")
      .doc(id)
      .onSnapshot(async (query) => {
        if (query.data()) {
          dispatch({
            type: "GET_SINGLE_CATEGORY",
            payload: { id: query.id, ...query.data() },
          });
        }
  
        dispatch(setIsLoading(true));
      });
    console.log("firebase", data);
  };

  export const setIsLoading = (val) => async (dispatch) => {
    dispatch({
      type: "SET_IS_LOADING",
      payload: val,
    });
  };