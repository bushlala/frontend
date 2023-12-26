
import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./Auth";

const reducer = combineReducers({
  auth: authReducer,
});

const StoreData = configureStore({ reducer });

export default StoreData;
