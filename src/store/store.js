

import { configureStore } from '@reduxjs/toolkit'
import  CounterSlice  from './reducers/counterreducer'
export const store = configureStore({
  reducer: {
    counter:CounterSlice
},
})