// import { configureStore } from '@reduxjs/toolkit';
import { createStore } from "redux";
import rootReducer from "./reducers";

export const store = createStore(rootReducer);
