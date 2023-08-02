import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./Reducer/ProductSlice";

const Store = configureStore({
  reducer: {
    products: ProductSlice,
  },
});

export default Store;