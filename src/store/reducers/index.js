import { combineReducers } from "redux";
import categoriesReducer from "./categoriesReducer";
import productsReducer from "./productsReducer";

const rootReducer = combineReducers({
    Categories:categoriesReducer,
    Products: productsReducer,
})
export default rootReducer