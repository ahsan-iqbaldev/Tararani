import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCaterories } from "../store/actions/categoriesAction";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";

const AllCategories = () => {
  const dispatch = useDispatch();
  const { allCategories, isLoading } = useSelector((state) => state.Categories);

  useEffect(() => {
    dispatch(getAllCaterories());
  }, []);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="w-full bg-gray-100 py-10">
          <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 xl:gap-4 px-10 md:px-4 mt-2">
            {allCategories?.map((item, index) => (
              <Link to={`/category-product/${item?.id}`}>
                <div
                  key={index + 100}
                  className="bg-white h-auto border-[1px] border-gray-200 pt-6 z-30 hover:border-transparent shadow-none hover:shadow-testShadow duration-200 relative flex flex-col gap-4 rounded-xl"
                >
                  <div className="w-full h-auto flex items-center justify-center relative group">
                    <img
                      src={item?.Categoryimage}
                      alt="categoryImage"
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
        </div>
      )}
    </>
  );
};

export default AllCategories;
