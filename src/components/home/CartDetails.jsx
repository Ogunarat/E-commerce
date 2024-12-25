import { Button } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { calculateBasket, remove } from "../../redux/slices/cartSlice";

const CartDetails = ({ cart }) => {
  const { title, image, county, price } = cart;
  const dispatch = useDispatch();

  const removeItem =(id)=>{
    dispatch(remove(id))
  }
  return (
    <div className="flex justify-center items-center gap-2 p-4 border cursor-pointer">
      <div className="w-[70px] h-[70px]">
        <img className="w-full h-full" src={image} alt="" />
      </div>
      <div className="flex gap-1 w-[450px] justify-start items-center">
        <span className="w-[200px]">{title?.substring(0, 25)}</span>
        <div className="flex gap-2 w-[30px] font-bold">
          <span>{county}</span>
          <span>x</span>
        </div>
        <span className="font-bold w-[70px]">{price?.toFixed(2)} ₺</span>
        <span className="w-[100px] font-bold">
          = {price * county?.toFixed(2)} ₺
        </span>
        <Button
        onClick={()=>removeItem(cart?.id)}
          sx={{ textTransform: "lowercase", padding: "2px 2px", width: "20px" }}
          variant="contained"
        >
          Sil
        </Button>
      </div>
    </div>
  );
};

export default CartDetails;
