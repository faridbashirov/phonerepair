import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  authToken: null,
}

export const CounterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state,action) => {
     
      state.value += action.payload
    },
    decrement: async (state) => {
      state.value -= 1
    },  
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = CounterSlice.actions

export default CounterSlice.reducer