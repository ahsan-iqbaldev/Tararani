import React, { useEffect, useState } from "react";
import { countries } from "../context/index";
import { useDispatch } from "react-redux";
import { addOrder } from "../store/actions/productsAction";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

const CashOnDelivaryModal = ({ onClose, storeProductData, currentCity }) => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    selectedState: "",
    selectedCity: "",
    address: "",
    productId: id,
    price: storeProductData?.price,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
      curLocation: currentCity,
    }));

    if (name === "selectedState") {
      const cityOptions = countries[value];
      setFormData((prevData) => ({
        ...prevData,
        selectedCity: "",
        cityOptions,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Current City:", currentCity);
    console.log("FormData before submission:", formData);
    await dispatch(
      addOrder(formData, () => {
        onClose();
        toast.success("Your order has been submitted successfully");
      })
    );
    console.log(formData, "formData");
  };

  return (
    <>
      <div
        className="main-modal fixed w-full h-full inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster "
        style={{ background: "rgba(0,0,0,.7)" }}
      >
        <div className="border border-teal-500 modal-container bg-white w-11/12 md:w-[75%] mx-auto rounded shadow-lg z-50 overflow-auto max-h-[90vh]">
          <div className="modal-content py-5 text-left px-6 md:px-10">
            <div className="flex justify-between items-center pb-3">
              <p className="text-2xl font-bold">CASH ON DELIVERY</p>
              <div
                className="modal-close cursor-pointer z-50"
                onClick={onClose}
              >
                <svg
                  className="fill-current text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                >
                  <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                </svg>
              </div>
            </div>
            <form onSubmit={handleSubmit}>
              <div class=" flex flex-col-reverse md:flex-row">
                <div class="flex-auto w-full md:w-[70%] ">
                  <div className="flex flex-wrap -mx-4">
                    <div className="w-full md:w-1/2 px-4 mb-4">
                      <label className="block text-sm font-medium text-gray-700">
                        First Name
                      </label>
                      <div className="relative input-group-alternative">
                        <input
                          type="text"
                          placeholder="First Name"
                          onChange={handleInputChange}
                          value={formData.firstName}
                          name="firstName"
                          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm form-control"
                          required
                        />
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 px-4 mb-4">
                      <label className="block text-sm font-medium text-gray-700">
                        Last Name
                      </label>
                      <div className="relative input-group-alternative">
                        <input
                          type="text"
                          placeholder="Last Name"
                          onChange={handleInputChange}
                          value={formData.lastName}
                          name="lastName"
                          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm form-control"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-4">
                    <div className="w-full md:w-1/2 px-4 mb-4">
                      <label className="block text-sm font-medium text-gray-700">
                        Email
                      </label>
                      <div className="relative input-group-alternative">
                        <input
                          type="text"
                          placeholder="Add Email (optional)"
                          onChange={handleInputChange}
                          value={formData.email}
                          name="email"
                          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm form-control"
                        />
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 px-4 mb-4">
                      <label className="block text-sm font-medium text-gray-700">
                        Phone Number
                      </label>
                      <div className="relative input-group-alternative">
                        <input
                          type="number"
                          placeholder="Phone Number"
                          onChange={handleInputChange}
                          value={formData.phoneNumber}
                          name="phoneNumber"
                          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm form-control"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-4">
                    <div className="w-full md:w-1/2 px-4 mb-4">
                      <label className="block text-sm font-medium text-gray-700">
                        Province
                      </label>
                      <div className="relative input-group-alternative">
                        <select
                          onChange={handleInputChange}
                          value={formData.selectedState}
                          name="selectedState"
                          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm form-control-select "
                          required
                        >
                          <option value="">Select Province</option>
                          {Object.keys(countries).map((state, index) => (
                            <option key={index} value={state}>
                              {state}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="w-full md:w-1/2 px-4 mb-4">
                      <label className="block text-sm font-medium text-gray-700">
                        City
                      </label>
                      <div className="relative input-group-alternative">
                        <select
                          onChange={handleInputChange}
                          value={formData.selectedCity}
                          name="selectedCity"
                          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm form-control-select"
                          required
                          disabled={!formData.selectedState}
                        >
                          <option value="">
                            Select City (Please select a Province first)
                          </option>
                          {formData.cityOptions &&
                            formData.cityOptions.map((city, index) => (
                              <option key={index} value={city}>
                                {city}
                              </option>
                            ))}
                          <option value="custom">Add Custom City</option>
                        </select>
                        {formData.selectedCity === "custom" && (
                          <input
                            type="text"
                            onChange={handleInputChange}
                            value={formData.customCity}
                            name="customCity"
                            placeholder="Enter your city name"
                            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm form-control"
                          />
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-4">
                    <div className="w-full px-4 mb-4">
                      <label className="block text-sm font-medium text-gray-700">
                        Address
                      </label>
                      <div className="relative input-group-alternative">
                        <input
                          type="textarea"
                          placeholder="e.g This rental is a perfect spot to explore..."
                          name="address"
                          onChange={handleInputChange}
                          value={formData.address}
                          required
                          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm form-control"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flex-auto w-full md:w-[30%] p-1 mb-3 md:p-6 md:mb-0">
                  <div className="priceCard">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>Rs.{storeProductData?.price}</span>
                    </div>
                    <div className="flex justify-between mt-1">
                      <span>Shipping</span>
                      <span>Free</span>
                    </div>
                    <div className="flex justify-between mt-1">
                      <span>Tax</span>
                      <span>Rs.0</span>
                    </div>
                    <hr className="mt-1" />
                    <div className="flex justify-between mt-2">
                      <span>Total</span>
                      <span>Rs.{storeProductData?.price}</span>
                    </div>
                  </div>
                  <hr className="mt-4" />
                  <div className="flex justify-between mt-3">
                    <span>{storeProductData?.title}</span>
                    <span>Rs.{storeProductData?.price}</span>
                  </div>
                  <hr className="mt-4" />
                  <h1 className="mt-4 text-lg font-bold">Shipping method</h1>
                  <div className="flex justify-between mt-2 form-control-method">
                    <span> &nbsp; &nbsp; Free Shipping</span>
                    <span>Free</span>
                  </div>
                </div>
              </div>
              <div className="w-full text-center pt-1">
                <button
                  type="submit"
                  className="w-60 py-3 bg-yellow-400 rounded-md font-semibold cursor-pointer hover:bg-yellow-500 active:bg-yellow-700 "
                >
                  Place Order
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CashOnDelivaryModal;
