
import { configureStore } from "@reduxjs/toolkit";
import countSlice from "../useSlices/countSlice";
import randomSlice from "../useSlices/randomSlice";
import thunk from "redux-thunk";
import productSlice from "../useSlices/productSlice";

export const store = configureStore({
  reducer: {
    count: countSlice,
    random: randomSlice,
    product:productSlice,
  },
middleware:[thunk],
});

