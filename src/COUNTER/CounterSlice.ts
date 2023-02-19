import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CounterState {
  counterValue: number
  }
  

  // Define the initial state using that type
  // Te tiek dota sākotnētja vērtība [līdzīgi kā setState]
  const initialState: CounterState = {
    counterValue: 0,
  }

const counterSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: (state) => {
      state.counterValue += 1
    },
    decrement: (state) => {
      state.counterValue -= 1
    },
    divideByAmount: (state, action: PayloadAction<number>) => {
        state.counterValue /= action.payload
      },
    multiplyByAmount: (state, action: PayloadAction<number>) => {
      state.counterValue *= action.payload
    },
  },
})

export const { increment, decrement, divideByAmount, multiplyByAmount } = counterSlice.actions

export default counterSlice.reducer