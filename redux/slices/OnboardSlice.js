import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentStep: 1,
    onboardFormData: {},
  };
  
  const onboardSlice = createSlice({
    name: "onboard",
    initialState,
    reducers: {
      setCurrentStep: (state, action) => {
        state.currentStep = action.payload;
      },
      updateOnboardFormData: (state, action) => {
        state.onboardFormData = {
          ...state.onboardFormData,
          ...action.payload,
        };
      },
    },
  });
  
  export const { setCurrentStep, updateOnboardFormData } = onboardSlice.actions;
  export default onboardSlice.reducer;
  