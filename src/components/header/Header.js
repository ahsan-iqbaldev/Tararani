import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SearchIcon from "@mui/icons-material/Search";
import LogoutIcon from "@mui/icons-material/Logout";
import { allItems } from "../../constants";
import { logo } from "../../assets/index";
import HeaderBottom from "./HeaderBottom";
import { Link } from "react-router-dom";

const Header = () => {
  // const products = useSelector((state) => state.amazonReducer.products);
  // const userInfo = useSelector((state) => state.amazonReducer.userInfo);
  const ref = useRef();
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (e.target.contains(ref.current)) {
        showAll && setShowAll(false);
      }
    });
  }, [ref, showAll]);

  return (
    <div className="sticky top-0 z-50">
      <div className=" w-full bg-amazon_blue text-white px-4 py-3 flex justify-between items-center">
        <div>
          <Link to="/">
            <div className="headerHover mr-0 md:mr-2">
              <img className="w-28 md:w-50 mt-2" src={logo} alt="logoImage" />
            </div>
          </Link>
        </div>
        <div className="hidden lgl:inline-flex h-10 rounded-md flex-grow relative">
          <span
            onClick={() => setShowAll(!showAll)}
            className="w-14 h-full bg-gray-200 hover:bg-gray-300 border-2 cursor-pointer duration-300 text-sm text-amazon_blue font-titleFont flex items-center justify-center rounded-tl-md rounded-bl-md"
          >
            All{" "}
            <span>
              <ArrowDropDownOutlinedIcon />
            </span>
          </span>
          {showAll && (
            <div>
              <ul
                ref={ref}
                className="absolute w-56 h-80 top-10 left-0 overflow-y-scroll overflow-x-hidden bg-white border-[1px] border-amazon_blue text-black p-2 flex flex-col gap-1 z-50"
              >
                {allItems.map((item) => (
                  <li
                    className="text-sm tracking-wide font-titleFont border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200"
                    key={item._id}
                  >
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <input
            className="h-full text-base text-amazon_blue flex-grow outline-none border-none px-2"
            type="text"
          />
          <span className="w-12 h-full flex items-center justify-center bg-amazon_yellow hover:bg-[#f3a847] duration-300 text-amazon_blue cursor-pointer rounded-tr-md rounded-br-md">
            <SearchIcon />
          </span>
        </div>
        <div className="flex">
          <Link to="/cart">
            <div className="flex items-start justify-center headerHover relative ml-2">
              <ShoppingCartIcon />
              <p className="hidden mdl:inline-flex text-xs font-semibold mt-3 text-whiteText">
                Cart
              </p>
              <span className="absolute text-xs top-0 left-6 w-4 font-semibold p-1 h-4 bg-[#f3a847] text-amazon_blue rounded-full flex justify-center items-center">
                {/* {products.length > 0 ? products.length : 0} */}0
              </span>
            </div>
          </Link>
          <Link to="/cart">
            <div className="flex items-start justify-center headerHover relative">
              <FavoriteIcon />
              <p className="hidden mdl:inline-flex text-xs font-semibold mt-3 text-whiteText">
                Wish List
              </p>
              <span className="absolute text-xs top-0 left-6 w-4 font-semibold p-1 h-4 bg-[#f3a847] text-amazon_blue rounded-full flex justify-center items-center">
                {/* {products.length > 0 ? products.length : 0} */}0
              </span>
            </div>
          </Link>
        </div>
      </div>
      <HeaderBottom />
    </div>
  );
};

export default Header;
