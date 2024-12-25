import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts, getCategoryProducts } from '../../redux/slices/productsSlice';
import ProductItem from './ProductItem';
import Loading from '../loading/Loading';
import ReactPaginate from 'react-paginate';

const Products = ({category,sorting}) => {
  const dispatch = useDispatch();
  const {products,productsStatus} = useSelector((store)=>store.products);
  
  const [itemOffset, setItemOffset] = useState(0);
  
//paginate start
  const itemsPerPage = 6
  const endOffset = itemOffset + itemsPerPage;
  
  const currentItems = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / itemsPerPage);

 
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    
    setItemOffset(newOffset);
  };
//paginate end
  useEffect(()=>{
    if(category){
      dispatch(getCategoryProducts(category))
    }else{
      dispatch(getAllProducts())
    }
    
  },[dispatch,category])
  return (
    <div>
      {
        productsStatus == "LOADİNG" ? <Loading /> :
        <>
        <div className='flex flex-wrap gap-2 mx-2 my-2'>
            {
              currentItems?.sort((a,b)=>sorting == "inc" ? a.price-b.price : sorting =="dec" ? b.price-a.price : "").map((product,i)=>(
                <ProductItem product={product} key={i}/>
              ))
            }
        </div>
        <ReactPaginate
          className='paginate'
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
        />
        </>
      }
    </div>
  )
}

export default Products