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

export const getTopSellingProducts = () => {
  return async (dispatch) => {
    try {
      dispatch(setIsLoading(true));
      firebase
        .firestore()
        .collection("products")
        .onSnapshot((snapshot) => {
          const topSellingProducts = [];
          snapshot.forEach((doc) => {
            const data = doc.data();
            if (data.topSelling === true) {
              topSellingProducts.push({ ...data, id: doc.id });
            }
          });
          dispatch({
            type: "SET_TOP_SELLING_PRODUCTS",
            payload: topSellingProducts,
          });
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

export const addOrder = (formData, onSuccess) => async (dispatch) => {
  try {
    console.log(formData, "formDataformDataformData");
    const curLocation = formData?.curLocation ? formData.curLocation : null;
    const email = formData?.email ? formData.email : null;

    const payload = {
      firstName: formData?.firstName,
      lastName: formData?.lastName,
      email:  email,
      phoneNumber: formData?.phoneNumber,
      selectedState: formData?.selectedState,
      selectedCity: formData?.selectedCity,
      address: formData?.address,
      productId: formData?.productId,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      curLocation: curLocation,
      price: formData?.price,
      status: "pending",
    };
    console.log(payload, "payload");
    await firebase.firestore().collection("orders").add(payload);
    onSuccess();
  } catch (error) {
    console.log(error);
  }
};

export const setIsLoading = (val) => async (dispatch) => {
  dispatch({
    type: "SET_IS_LOADING",
    payload: val,
  });
};
