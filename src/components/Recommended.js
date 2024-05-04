import React from "react";
import { Link } from "react-router-dom";
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
import image1 from "../assets/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg";
import image2 from "../assets/51eg55uWmdL._AC_UX679_.jpg";
import image3 from "../assets/61IBBVJvSDL._AC_SY879_.jpg";
import image4 from "../assets/61U7T1koQqL._AC_SX679_.jpg";
import image5 from "../assets/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg";
import image6 from "../assets/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg";
import image7 from "../assets/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg";
import image8 from "../assets/71YXzeOuslL._AC_UY879_.jpg";
import image9 from "../assets/71kWymZ+c+L._AC_SX679_.jpg";
import image10 from "../assets/71li-ujtlUL._AC_UX679_.jpg";
import image11 from "../assets/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg";
import image12 from "../assets/81QpkIctqPL._AC_SX679_.jpg";
import image13 from "../assets/81XH0e8fefL._AC_UY879_.jpg";
import image14 from "../assets/81Zt42ioCgL._AC_SX679_.jpg";
import image15 from "../assets/81fPKd-2AYL._AC_SL1500_.jpg";

const Recommended = () => {
  const dispatch = useDispatch();

  const recProducts = [
    {
      id: 617631898,
      name: "Mens Casual Premium",
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley pSlim-fitting style, contrast raglan long sleeve, three-button henley p",
      price: 300,
      images: [image1, image8, image4, image1, image9],
    },
    {
      id: 7672637,
      name: "Mens Casual Premium",
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley pSlim-fitting style, contrast raglan long sleeve, three-button henley p",
      price: 300,
      images: [image5, image2, image8, image11, image4],
    },
    {
      id: 61742423,
      name: "Mens Casual Premium",
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley pSlim-fitting style, contrast raglan long sleeve, three-button henley p",
      price: 300,
      images: [image13, image12, image10, image9, image8],
    },
    {
      id: 617242343,
      name: "Mens Casual Premium",
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley pSlim-fitting style, contrast raglan long sleeve, three-button henley p",
      price: 300,
      images: [image15, image8, image2, image9, image10],
    },
  ];

  return (
    <>
      {recProducts.map((item, index) => (
    <Link to={`/product-detail/${item?.id}`} key={index + 100}>
          <div className="bg-white h-auto border-[1px] border-gray-200 pt-6 z-30 hover:border-transparent shadow-none hover:shadow-testShadow duration-200 relative flex flex-col gap-4 rounded-xl">
            <div className="w-full h-auto flex items-center justify-center relative group">
              <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
              >
                {item.images.map((image, idx) => (
                  <SwiperSlide key={idx}>
                    <img src={image} className="w-80 h-64 object-contain" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="px-4 bg-gray-100 flex flex-col gap-1 z-10 pt-3 pb-5">
              <div className="flex items-center justify-between">
                <h2 className="font-titleFont tracking-wide text-lg text-amazon_blue font-medium">
                  {item.name.substring(0, 20)}
                </h2>
                <p className="text-md text-gray-600 font-semibold">
                  Rs.{item.price}
                </p>
              </div>
              <div>
                <p className="text-sm">{item.description.substring(0, 70)}</p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default Recommended;
