import React from "react";
import { useLoaderData } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import ApiIcon from "@mui/icons-material/Api";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/amazonSlice";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import image1 from "../assets/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg"
import image2 from "../assets/51eg55uWmdL._AC_UX679_.jpg"
import image3 from "../assets/61IBBVJvSDL._AC_SY879_.jpg"
import image4 from "../assets/61U7T1koQqL._AC_SX679_.jpg"
import image5 from "../assets/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg"
import image6 from "../assets/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
import image7 from "../assets/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg"
import image8 from "../assets/71YXzeOuslL._AC_UY879_.jpg"
import image9 from "../assets/71kWymZ+c+L._AC_SX679_.jpg"
import image10 from "../assets/71li-ujtlUL._AC_UX679_.jpg"
import image11 from "../assets/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg"
import image12 from "../assets/81QpkIctqPL._AC_SX679_.jpg"
import image13 from "../assets/81XH0e8fefL._AC_UY879_.jpg"
import image14 from "../assets/81Zt42ioCgL._AC_SX679_.jpg"
import image15 from "../assets/81fPKd-2AYL._AC_SL1500_.jpg"


const Products = () => {
  const data = useLoaderData();
  const productsData = data.data;
  const dispatch = useDispatch();

  const images = [
    image2,image3,image4,image5,image6,image7,image8,image9,image10,image11,image12,image13,image14,image15
  ]

  return (
    <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 xl:gap-4 px-4">
      {productsData.map((item) => (
        <div
          key={item.id}
          className="bg-white h-auto border-[1px] border-gray-200 pt-6 z-30 hover:border-transparent shadow-none hover:shadow-testShadow duration-200 relative flex flex-col gap-4 rounded-xl"
        >
          {/* <span className="text-xs capitalize italic absolute top-2 right-2 text-gray-500">
            {item.category}
          </span> */}
          {/* ========== Product Image Start here ============== */}
          <div className="w-full h-auto flex items-center justify-center relative group">
            {/* <img
              className="w-52 h-64 object-contain"
              src={item.image}
              alt="ProductImg"
            /> */}
             <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          {images?.map((image, idx) => {
            return (
              <SwiperSlide key={idx}>
                <img src={image}  className="w-80 h-64 object-contain" />
              </SwiperSlide>
            );
          })}
        </Swiper>
            {/* ================== Product mini drop down Start here ============ */}
            {/* <ul className="absolute w-full h-36 bg-gray-100 -bottom-[160px] group-hover:bottom-0 duration-700 flex flex-col justify-center items-end gap-2">
              <li className="productLi">
                Compare
                <span>
                  <ApiIcon />
                </span>
              </li>
              <li className="productLi">
                Add to Cart
                <span>
                  <ShoppingCartIcon />
                </span>
              </li>
              <li className="productLi">
                View Details{" "}
                <span>
                  <ArrowCircleRightIcon />
                </span>
              </li>
              <li className="productLi">
                Add to Wish List{" "}
                <span>
                  <FavoriteIcon />
                </span>
              </li>
            </ul> */}
            {/* ================== Product mini drop down End here ============== */}
          </div>
          {/* ========== Product Image End here ================ */}
          {/* ========== Product Info Start here =============== */}
          <div className="px-4 bg-gray-100 flex flex-col gap-1 z-10 pt-3 pb-5">
            <div className="flex items-center justify-between">
              <h2 className="font-titleFont tracking-wide text-lg text-amazon_blue font-medium">
                {item.title.substring(0, 20)}
              </h2>
              <p className="text-md text-gray-600 font-semibold">
                Rs.{item.price}
              </p>
            </div>
            <div>
              <p className="text-sm">{item.description.substring(0, 70)}</p>
              {/* <div className="text-yellow-500 flex">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div> */}
            </div>
            {/* <button
              onClick={() =>
                dispatch(
                  addToCart({
                    id: item.id,
                    title: item.title,
                    description: item.description,
                    price: item.price,
                    category: item.category,
                    image: item.image,
                    quantity: 1,
                  })
                )
              }
              className="w-full py-1.5 rounded-md mt-1 font-titleFont font-medium text-base bg-gradient-to-tr from-yellow-400 to-yellow-200 border  hover:from-yellow-300 to hover:to-yellow-400 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-200"
            >
              Add to Cart
            </button>
            <button
              onClick={() =>
                dispatch(
                  addToCart({
                    id: item.id,
                    title: item.title,
                    description: item.description,
                    price: item.price,
                    category: item.category,
                    image: item.image,
                    quantity: 1,
                  })
                )
              }
              className="w-full py-1.5 rounded-md mt-1 font-titleFont font-medium text-base bg-gradient-to-tr from-yellow-400 to-yellow-200 border  hover:from-yellow-300 to hover:to-yellow-400 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-200"
            >
              Buy with COD
            </button> */}
          </div>
          {/* ========== Product Info End here ================= */}
          {/* ============ Product Image Start here ======== */}

          {/* ============ Product drop-down Start here ==== */}
          {/* ============ Product drop-down End here ====== */}

          {/* ============ Product Image End here ========== */}
          {/* ============ Product Info Start here ========= */}
          {/* ============ Product Info End here =========== */}
        </div>
      ))}
    </div>
  );
};

export default Products;
