import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../redux/slices/productsSlice";
import { FaMinus, FaPlus } from "react-icons/fa";
import { Button } from "@mui/material";
import Loading from "../components/loading/Loading";
import { addToBasket, calculateBasket } from "../redux/slices/cartSlice";


const Details = () => {
  const { id } = useParams();
  const { productDetails, productDetailsStatus } = useSelector(
    (store) => store.products
  );
  const [county, setCount] = useState(1);
  const dispatch = useDispatch();
  const { title, price, image, description } = productDetails;
  const increment = () => {
    setCount(county + 1);
  };
  const decrement = () => {
    if (county > 1) {
      setCount(county - 1);
    }
  };
  
  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [dispatch, id]);

  const addBasket =()=>{
    const payload = {
      id,title,description,price,county,image
    }  
    dispatch(addToBasket(payload))
    dispatch(calculateBasket())
  }
  return (
    <div>
      {productDetailsStatus == "LOADİNG" ? (
        <Loading />
      ) : (
        <div className="mt-[50px] flex">
          <div className="w-[400px] h-[500px]">
            <img src={image} alt="" className="w-full h-full" />
          </div>
          <div className="w-[600px] flex flex-col items-start ml-[50px] gap-6">
            <span className="text-3xl font-bold">{title}</span>
            <span className="text-gray-500">{description}</span>
            <span className="font-extrabold text-3xl text-red-500">
              {price?.toFixed(2)} ₺
            </span>
            <div className="flex justify-center items-center  gap-8 text-2xl">
              <span
                onClick={decrement}
                className="border p-2 text-blue-500 cursor-pointer"
              >
                <FaMinus />
              </span>
              <span>{county}</span>
              <span
                onClick={increment}
                className="border p-2 text-blue-500 cursor-pointer"
              >
                <FaPlus />
              </span>
            </div>
            <Button
              onClick={addBasket}
              sx={{ textTransform: "capitalize", width: "160px" }}
              variant="contained"
            >
              Sepete Ekle
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;
