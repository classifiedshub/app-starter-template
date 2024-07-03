import { configureStore } from "@reduxjs/toolkit";
import OnboardSlice from "./slices/OnboardSlice";

export const store = configureStore({
  reducer: {
    onboard: OnboardSlice,
  },
});
