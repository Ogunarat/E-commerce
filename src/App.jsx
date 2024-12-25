import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PageContainer from "./container/PageContainer";
import Navbar from "./components/navbar/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import Details from "./pages/Details";
import CartDetails from "./components/home/CartDetails";
import Drawer from '@mui/material/Drawer';
import { useDispatch, useSelector } from "react-redux";
import { calculateBasket, clearItem, setDrawer } from "./redux/slices/cartSlice";
import { useEffect } from "react";
import { Button } from "@mui/material";

function App() {
  const dispatch = useDispatch()
  const {carts,drawer,totalAmaount} = useSelector((store)=>store.carts)
  
  const removeAllCart=()=>{
    dispatch(clearItem())
  }
  useEffect(()=>{
    dispatch(calculateBasket())
  },[carts])
  

  return (
    <PageContainer>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product-details/:id" element={<Details />} />
          <Route path="/cart" element={<CartDetails />} />
        </Routes>
      </Router>
      <Drawer anchor="right" open={drawer} onClose={()=>dispatch(setDrawer())} >
        {
          carts && carts.map((cart ,i)=>(
            <CartDetails key={i} cart={cart}/>
          ))
        }
        <div className="flex flex-col p-5">
            <div className="flex justify-between items-center text-2xl font-bold ">
              <span>Toplam Tutar :</span>
              <span>{totalAmaount?.toFixed(2)} ₺</span>
            </div>
            <div className="flex justify-between items-center mt-5">
                <Button onClick={removeAllCart}>Hepsini Temizle</Button>
                <Button>Satın Al</Button>
            </div>
        </div>
        
      </Drawer>
    </PageContainer>
  );
}

export default App;
