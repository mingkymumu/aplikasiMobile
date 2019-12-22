import { combineReducers } from "redux";
import data from "./dataReducer";
import configureStore from './configureStore';
const reducer = combineReducers({
  data,
})

export default reducer;
export const store = configureStore(reducer);
