import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getCateroriesProducts } from "../store/actions/productsAction";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { getSingleCategory } from "../store/actions/categoriesAction";
import Loading from "../components/Loading";

const CategoryProducts = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { getCategoryProducts, isLoading } = useSelector(
    (state) => state.Products
  );
  const { singleCategory } = useSelector((state) => state.Categories);

  useEffect(() => {
    dispatch(getCateroriesProducts(id));
    dispatch(getSingleCategory(id));
  }, []);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="w-full bg-gray-100 py-10">
          <h2 className="font-titleFont tracking-wide text-lg md:text-2xl text-amazon_blue font-bold px-4">
            {singleCategory?.title}
          </h2>
          <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 xl:gap-4 px-10 md:px-4 mt-2">
            {getCategoryProducts?.map((item, index) => (
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
                      {item.productImages.map((image, idx) => (
                        <SwiperSlide key={idx}>
                          <img
                            src={image}
                            alt="slider"
                            className="w-80 h-64 object-contain"
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                  <div className="px-4 bg-gray-100 flex flex-col gap-1 z-10 pt-3 pb-5 flex-wrap">
                    <div className="flex items-center justify-between">
                      <h2 className="font-titleFont tracking-wide text-lg text-amazon_blue font-medium">
                        {item.title.substring(0, 20)}
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
          </div>
        </div>
      )}
    </>
  );
};

export default CategoryProducts;
