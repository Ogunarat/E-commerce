import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { STATUS } from '../../utils/status'

const initialState = {
  products:[],
  productsStatus : STATUS.IDLE,
  productDetails : [],
  productDetailsStatus : STATUS.IDLE,
}
export const getAllProducts =createAsyncThunk("getAllProducts",async()=>{
    const response = await axios.get("https://fakestoreapi.com/products")
    return response.data
})
export const getProductDetails =createAsyncThunk("getProductDetails",async(id)=>{
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
    return response.data
})
export const getCategoryProducts =createAsyncThunk("getCategory",async(category)=>{
    const response = await axios.get(`https://fakestoreapi.com/products/category/${category}`)
    return response.data
})

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    
  },
  extraReducers:(builder)=>{
   builder.addCase(getAllProducts.pending,(state,action)=>{
    state.productsStatus = STATUS.LOADİNG
   })
   builder.addCase(getAllProducts.fulfilled,(state,action)=>{
    state.productsStatus = STATUS.SUCCESS
    state.products = action.payload
   })
   builder.addCase(getAllProducts.rejected,(state,action)=>{
    state.productsStatus = STATUS.FAİL

   })
   builder.addCase(getProductDetails.pending,(state,action)=>{
    state.productDetailsStatus = STATUS.LOADİNG
   })
   builder.addCase(getProductDetails.fulfilled,(state,action)=>{
    state.productDetailsStatus = STATUS.SUCCESS
    state.productDetails = action.payload
   })
   builder.addCase(getProductDetails.rejected,(state,action)=>{
    state.productDetailsStatus = STATUS.FAİL

   })
   builder.addCase(getCategoryProducts.pending,(state,action)=>{
    state.productsStatus = STATUS.LOADİNG
   })
   builder.addCase(getCategoryProducts.fulfilled,(state,action)=>{
    state.productsStatus = STATUS.SUCCESS
    state.products = action.payload
   })
   builder.addCase(getCategoryProducts.rejected,(state,action)=>{
    state.productsStatus = STATUS.FAİL

   })
  }
})


export const {  } = productsSlice.actions

export default productsSlice.reducer