import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Recommended from "./Recommended";
import JustForYou from "./JustForYou";
import { getCaterories } from "../store/actions/categoriesAction";
import { Link } from "react-router-dom";
import { getProducts } from "../store/actions/productsAction";

const Products = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.Categories);
  const { products } = useSelector((state) => state.Products);

  useEffect(() => {
    dispatch(getCaterories());
    dispatch(getProducts());
  }, []);

  return (
    <div>
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 xl:gap-4 px-10 md:px-4">
        {categories?.map((item, index) => (
          <Link to={`/category-product/${item?.id}`}>
            <div
              key={index + 100}
              className="bg-white h-auto border-[1px] border-gray-200 pt-6 z-30 hover:border-transparent shadow-none hover:shadow-testShadow duration-200 relative flex flex-col gap-4 rounded-xl"
            >
              <div className="w-full h-auto flex items-center justify-center relative group">
                <img
                  src={item?.Categoryimage}
                  alt="Categoryimage"
                  className="w-80 h-64 object-contain"
                />
              </div>
              <div className="px-4 bg-gray-100 flex flex-col gap-1 z-10 pt-3 pb-5">
                <div className="flex items-center justify-center">
                  <h2 className="font-titleFont tracking-wide text-lg text-amazon_blue font-medium">
                    {item?.title}
                  </h2>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="w-full text-center pt-6">
        <Link to="/categories">
          <button className="w-60 py-3 bg-yellow-400 rounded-md font-semibold cursor-pointer hover:bg-yellow-500 active:bg-yellow-700 ">
            Show All Collections
          </button>
        </Link>
      </div>

      <h2 className="mt-8 md:mt-5 font-titleFont tracking-wide text-lg md:text-2xl text-amazon_blue font-bold px-4">
        Top Selling Products
      </h2>
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 xl:gap-4 px-10 md:px-4 mt-2">
        <Recommended />
      </div>
      <h2 className="mt-5 font-titleFont tracking-wide text-lg md:text-2xl text-amazon_blue font-bold px-4">
        Just For You
      </h2>
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 xl:gap-4 px-10 md:px-4 mt-2">
        <JustForYou />
      </div>
      <div className="w-full text-center pt-6">
        {products.length < 4 ? (
          ""
        ) : (
          <button className="w-60 py-3 bg-yellow-400 rounded-md font-semibold cursor-pointer hover:bg-yellow-500 active:bg-yellow-700 ">
            Show More
          </button>
        )}
      </div>
    </div>
  );
};

export default Products;
