import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import ApiIcon from "@mui/icons-material/Api";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useDispatch, useSelector } from "react-redux";
// import { addToCart } from "../redux/amazonSlice";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { getTopSellingProducts } from "../store/actions/productsAction";

const Recommended = () => {
  const dispatch = useDispatch();
  const { topSellingItems } = useSelector((state) => state.Products);
  useEffect(() => {
    dispatch(getTopSellingProducts());
  }, []);

  return (
    <>
      {topSellingItems?.map((item, index) => (
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
                {item?.productImages?.map((image, idx) => (
                  <SwiperSlide key={idx}>
                    <img src={image} className="w-80 h-64 object-contain" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="px-4 bg-gray-100 flex flex-col gap-1 z-10 pt-3 pb-5">
              <div className="flex items-center justify-between">
                <h2 className="font-titleFont tracking-wide text-lg text-amazon_blue font-medium">
                  {item?.name?.substring(0, 20)}
                </h2>
                <p className="text-md text-gray-600 font-semibold">
                  Rs.{item.price}
                </p>
              </div>
              <div>
                <div
                  dangerouslySetInnerHTML={{
                    __html: `<p className="text-sm">${item.description.substring(
                      0,
                      70
                    )}...</p>`,
                  }}
                />
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default Recommended;
