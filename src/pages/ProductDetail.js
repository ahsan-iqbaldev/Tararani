import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleProduct } from "../store/actions/productsAction";
import { useDispatch, useSelector } from "react-redux";
import CashOnDeliveryModal from "../components/CashOnDelivaryModal";
import axios from "axios";
import Loading from "../components/Loading";
import OrderOnWhatsapp from "../components/OrderOnWhatsapp";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { singleProduct, isLoading } = useSelector((state) => state.Products);
  const [selectedColor, setSelectedColor] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [country, setCountry] = useState(null);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const openModal2 = () => {
    setIsModalOpen2(true);
  };

  const closeModal2 = () => {
    setIsModalOpen2(false);
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get("https://api.ipify.org");
      const ipAddress = response.data;

      const countryDetail = await axios.get(
        `https://ipinfo.io/${ipAddress}/json?token=5a6086648352e7`
      );
      const { city } = countryDetail.data;
      setCountry(city);
    } catch (error) {
      console.error("Error fetching IP data:", error);
    }
  };

  const handleCart = (payload) => {
    // Add the product to cart logic here
  };

  useEffect(() => {
    dispatch(getSingleProduct(id));
  }, [id, dispatch]);

  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <section className="text-gray-700 body-font overflow-hidden bg-white">
      <div className="container px-2 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex gap-8 flex-wrap justify-center">
          <img
            alt="ecommerce"
            className="lg:w-1/3 md:w-full rounded border border-gray-200 h-[300px] md:h-[450px]"
            src={singleProduct?.productImages[0]}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {singleProduct?.title}
            </h1>
            <div className="flex mb-4">
              <span className="flex items-center">
                {[...Array(4)].map((_, i) => (
                  <svg
                    key={i}
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-yellow-400"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                ))}
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-yellow-400"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <span className="text-gray-600 ml-3">4 Reviews</span>
              </span>
              <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                <span className="title-font font-medium text-2xl text-gray-900 md:ml-9">
                  Rs.{singleProduct?.price}
                </span>
                <span className="title-font font-medium text-1xl text-gray-900 md:ml-2 md:mt-1 line-through">
                  Rs.{singleProduct?.comparePrice}
                </span>
              </span>
            </div>
            <div className="leading-relaxed">
              <div
                dangerouslySetInnerHTML={{
                  __html: `<p className="text-sm">${singleProduct?.description}</p>`,
                }}
              />
            </div>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
              <div className="flex">
                <span className="mr-3">Color</span>
                <button
                  className={`border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none ${
                    singleProduct?.color
                      ? selectedColor === "white"
                        ? "bg-white"
                        : ""
                      : "cursor-not-allowed"
                  }`}
                  onClick={() => {
                    if (singleProduct?.color) {
                      handleColorSelect("white");
                    } else {
                      alert(
                        "Custom colors are not available for this product."
                      );
                    }
                  }}
                >
                  {selectedColor === "white" && singleProduct?.color && (
                    <svg
                      className="w-4 h-4 text-green-500 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                </button>

                <button
                  className={`border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none ${
                    singleProduct?.color
                      ? selectedColor === "black"
                        ? "bg-black"
                        : ""
                      : "cursor-not-allowed"
                  }`}
                  onClick={() => {
                    if (singleProduct?.color) {
                      handleColorSelect("black");
                    } else {
                      alert(
                        "Custom colors are not available for this product."
                      );
                    }
                  }}
                >
                  {selectedColor === "black" && singleProduct?.color && (
                    <svg
                      className="w-4 h-4 text-green-500 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                </button>
              </div>
              <div className="flex ml-6 items-center">
                <span className="mr-3">Size</span>
                <div className="relative">
                  <select
                    className={`rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10 ${
                      singleProduct?.size ? "" : "cursor-not-allowed"
                    }`}
                    disabled={!singleProduct?.size}
                  >
                    {["SM", "M", "L", "XL"].map((size) => (
                      <option key={size}>{size}</option>
                    ))}
                  </select>
                  <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-between flex-col md:flex-row gap-3">
              <button
                onClick={openModal}
                className="w-full md:w-60 py-3 bg-yellow-400 rounded-md font-semibold cursor-pointer hover:bg-yellow-500 active:bg-yellow-700"
              >
                Cash on Delivery
              </button>
              <div className="flex justify-center align-middle">
                <button
                  onClick={openModal2}
                  className="w-full md:w-60 py-3 whatsapp-button rounded-md font-semibold cursor-pointer"
                >
                  <i className="fa fa-whatsapp my-float"></i>
                  <span className="">Order on WhatsApp</span>
                </button>
                {/* <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <CashOnDeliveryModal
          onClose={closeModal}
          storeProductData={singleProduct}
          currentCity={country}
        />
      )}
         {isModalOpen2 && (
        <OrderOnWhatsapp
          onClose={closeModal2}
          storeProductData={singleProduct}
          currentCity={country}
        />
      )}
    </section>
  );
};

export default ProductDetail;
