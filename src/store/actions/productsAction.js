import firebase from "../../config/firebase";

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

export const getCateroriesProducts = (categoryId) => {
  return async (dispatch) => {
    try {
      dispatch(setIsLoading(true));
      const data = await firebase
        .firestore()
        .collection("products")
        .where("categoryId", "==", categoryId)
        .get();

      const products = data.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log(products, " data");

      dispatch({ type: "GET_CATEGORIES_PRODUCTS", payload: products });
      dispatch(setIsLoading(false));
    } catch (error) {
      console.log(error);
      dispatch(setIsLoading(false));
    }
  };
};

export const getSingleProduct = (id) => async (dispatch) => {
  dispatch(setIsLoading(true));
  const data = firebase
    .firestore()
    .collection("products")
    .doc(id)
    .onSnapshot(async (query) => {
      if (query.data()) {
        dispatch({
          type: "GET_SINGLE_PRODUCT",
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
