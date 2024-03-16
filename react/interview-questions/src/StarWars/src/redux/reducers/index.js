import { combineReducers } from "redux";
import { accountReducer } from "./Account.reducer";

const rootReducer = combineReducers({
  accountReducer,
});

export default rootReducer;
