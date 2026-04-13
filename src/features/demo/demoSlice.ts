import { createSlice } from '@reduxjs/toolkit'

type DemoState = {
  counter: number
}

const initialState: DemoState = {
  counter: 0,
}

const demoSlice = createSlice({
  name: 'demo',
  initialState,
  reducers: {
    increment: (state) => {
      state.counter += 1
    },
    decrement: (state) => {
      state.counter -= 1
    },
    reset: (state) => {
      state.counter = 0
    },
  },
})

export const { increment, decrement, reset } = demoSlice.actions
export default demoSlice.reducer
