import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface featureConfigState {
  value: number;
}

const initialState: featureConfigState = {
  value: 0,
};

export const featureConfigSlice = createSlice({
  name: "featureConfig",
  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = featureConfigSlice.actions;
export const featureConfigSelector = state => state.featureConfig;

export default featureConfigSlice.reducer;
