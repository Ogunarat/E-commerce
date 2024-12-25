import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/slices/categoriesSlice";

const Categories = ({ setCategory }) => {
  const dispatch = useDispatch();
  const { categories } = useSelector((store) => store.categories);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  return (
    <div className="bg-gray-100 w-1/6 h-1/4 ">
      <div className="border-b p-2 font-bold text-xl">Categories</div>
      {categories?.map((category, i) => (
        <div
          onClick={()=>setCategory(category)}
          key={i}
          className="text-lg p-2  border-b cursor-pointer hover:bg-gray-300 transition-all"
        >
          {category}
        </div>
      ))}
    </div>
  );
};

export default Categories;
