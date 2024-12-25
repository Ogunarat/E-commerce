import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  categories:[],
}
export const getCategories =createAsyncThunk("getCategories",async()=>{
    const response = await axios.get("https://fakestoreapi.com/products/categories")
    return response.data
})

export const categoriesSlice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
  extraReducers:(builder)=>{
    builder.addCase(getCategories.fulfilled,(state,action)=>{
        state.categories = action.payload
    })
  }
})


export const {  } = categoriesSlice.actions

export default categoriesSlice.reducer