import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Animal = {
    name: string,
    type: string,
    img: string
}

interface AnimalStateType {
    animals: Animal[],
    loading: boolean
  }
  

  // Define the initial state using that type
  // Te tiek dota sākotnētja vērtība [līdzīgi kā setState]
const initialState: AnimalStateType = {
    animals: [],
    loading: false
}

const animalSlice = createSlice({
  name: 'animal',
  initialState,
  reducers: {
    setAllAnimals: (state, action: PayloadAction<Animal[]>) => {
        state.animals=action.payload
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
        state.loading = action.payload
    },

    // add: (state, action: PayloadAction<Animal>) => {

    // },

    // remove: (state, action: PayloadAction<Animal>) => {

    // },

    // edit: (state, action: PayloadAction<Animal>) => {
  
    // },
  
  },
})

export const { setAllAnimals, setLoading } = animalSlice.actions

export default animalSlice.reducer