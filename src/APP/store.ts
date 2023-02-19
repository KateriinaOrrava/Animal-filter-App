import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../COUNTER/CounterSlice'
import animalReducer from '../ANIMALS/AnimalSlice'

const store = configureStore({
  reducer: {
    counterValue: counterReducer,
    animal: animalReducer
  }
})

export default store

// Infer the `RootState` and `AppDispatch` types from the store itself
// tips visam lielajam objektam
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState
// definēts tips dispatčiem
export type AppDispatch = typeof store.dispatch



