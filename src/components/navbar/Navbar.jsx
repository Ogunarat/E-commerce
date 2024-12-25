import React, { useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import { IoHeart } from "react-icons/io5";
import { BsBasket } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import Badge from "@mui/material/Badge";
import { setDrawer } from "../../redux/slices/cartSlice";
import { FaList } from "react-icons/fa6";
import "./Navbar.css";

const Navbar = () => {
  const dispatch = useDispatch();
  const { carts } = useSelector((store) => store.carts);

  return (
    <div className="navbar flex mt-5 justify-between items-center ">
      <div className="navbar-title text-5xl font-semibold">ShoppingTime</div>
      <div className="navbar-right">
        <div className="list-menu">
          <FaList />
        </div>
        <div className="flex justify-center items-center gap-2">
          <div className="flex justify-center items-center bg-gray-300 py-2 px-4 rounded-full cursor-pointer">
            <input
              className="flex outline-none border-none bg-gray-300"
              type="text"
              placeholder="Bir şeyler ara.."
            />
            <BsSearch />
          </div>
          <IoHeart className="text-2xl hover:scale-[1.1]" />
          <div className="flex justify-center items-center gap-2 cursor-pointer relative">
            <Badge
              onClick={() => dispatch(setDrawer())}
              badgeContent={carts?.length}
              color="primary"
            >
              <BsBasket className="text-2xl" />
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
