import { legacy_createStore as createstore } from "redux";
import { useReducer } from "./user/useReducer";
const store = createstore(useReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export {store}