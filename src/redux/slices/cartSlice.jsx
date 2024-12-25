import { createSlice } from '@reduxjs/toolkit'


const getLocalstorage =()=>{
    if(localStorage.getItem("carts")){
        return JSON.parse(localStorage.getItem("carts"))
    }return [];
}
const setLocalstorage =(data)=>{
    localStorage.setItem("carts",JSON.stringify(data))
}

const initialState = {
  carts:getLocalstorage(),
  itemCount:0,
  drawer:false,
  totalAmaount:0,
}


export const cartSlice = createSlice({
  name: 'carts',
  initialState,
  reducers: {
    addToBasket:(state,action)=>{
        const findCart = state.carts && state.carts.find((item)=>item.id === action.payload.id)
        if(findCart){
            const sameCart = state.carts.filter((item)=>item.id !== action.payload.id)
            findCart.county += action.payload.county
            state.carts = [...sameCart,action.payload]
            setLocalstorage(state.carts)
        }else{
            state.carts = [...state.carts,action.payload]
            setLocalstorage(state.carts)
        }
    },
    setDrawer:(state)=>{
        state.drawer =  !state.drawer
    },
    remove:(state,action)=>{
        state.carts = state.carts && state.carts.filter((item)=>item.id !== action.payload)
        setLocalstorage(state.carts)
    },
    clearItem:(state,action)=>{
        state.carts = state.carts && []
        setLocalstorage(state.carts)
    },
   calculateBasket:(state,action)=>{
    state.totalAmaount = 0
     state.carts && state.carts.map((cart)=>{
        state.totalAmaount += cart.price*cart.county
     })
   }
  },
  
})


export const { addToBasket,setDrawer,clearItem, calculateBasket,remove} = cartSlice.actions

export default cartSlice.reducer