import React from "react";
import { useLoaderData } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import ApiIcon from "@mui/icons-material/Api";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/amazonSlice";
import image6 from "../assets/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg";
import image8 from "../assets/71YXzeOuslL._AC_UY879_.jpg";
import image12 from "../assets/81QpkIctqPL._AC_SX679_.jpg";
import Recommended from "./Recommended";
import { Button } from "@mui/material";
import JustForYou from "./JustForYou";
import image5 from "../assets/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg";

const Products = () => {
  const data = useLoaderData();
  const productsData = data.data;
  const dispatch = useDispatch();

  const categories = [
    {
      name: "Wall Decoration",
      image: image5,
    },
    {
      name: "Accesriess",
      image: image6,
    },
    {
      name: "Business",
      image: image8,
    },
    {
      name: "Wallpapers",
      image: image12,
    },
  ];

  return (
    <div>
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 xl:gap-4 px-4">
        {categories.map((item, index) => (
          <div className="bg-white h-auto border-[1px] border-gray-200 pt-6 z-30 hover:border-transparent shadow-none hover:shadow-testShadow duration-200 relative flex flex-col gap-4 rounded-xl">
            <div className="w-full h-auto flex items-center justify-center relative group">
              <img src={item?.image} className="w-80 h-64 object-contain" />
            </div>
            <div className="px-4 bg-gray-100 flex flex-col gap-1 z-10 pt-3 pb-5">
              <div className="flex items-center justify-center">
                <h2 className="font-titleFont tracking-wide text-lg text-amazon_blue font-medium">
                  {item?.name}
                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full text-center pt-6">
        <button className="w-60 py-3 bg-yellow-400 rounded-md font-semibold cursor-pointer hover:bg-yellow-500 active:bg-yellow-700 ">
          Show All Collections
        </button>
      </div>

      <h2 className="mt-8 md:mt-5 font-titleFont tracking-wide text-lg md:text-2xl text-amazon_blue font-bold px-4">
        Top Selling Products
      </h2>
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 xl:gap-4 px-4 mt-2">
        <Recommended />
      </div>
      <h2 className="mt-5 font-titleFont tracking-wide text-lg md:text-2xl text-amazon_blue font-bold px-4">
        Just For You
      </h2>
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 xl:gap-4 px-4 mt-2">
        <JustForYou />
      </div>
      <div className="w-full text-center pt-6">
        <button className="w-60 py-3 bg-yellow-400 rounded-md font-semibold cursor-pointer hover:bg-yellow-500 active:bg-yellow-700 ">
          Show More
        </button>
      </div>
    </div>
  );
};

export default Products;
