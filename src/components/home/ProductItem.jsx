import { Button } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const ProductItem = ({product}) => {
    const {id,title,price,image} = product;
    const navigate = useNavigate();
  return (
    <div className='flex flex-col border p-4 w-[333px] justify-center items-center gap-2 rounded-xl shadow-lg'>
        <div>
            <img src={image} alt="" className='w-[250px] h-[300px]'/>
        </div>
        <div className='flex flex-col items-center justify-center'>
            <span>{title.substring(0,20)}</span>
            <span className='text-red-500 font-bold'>{price.toFixed(2)} ₺</span>
        </div>
        <Button onClick={()=>navigate(`/product-details/${id}`)}>Detaya git</Button>
    </div>
  )
}

export default ProductItem