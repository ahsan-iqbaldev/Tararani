import React, { useEffect } from "react";
import Banner from "../components/Banner";
import Products from "../components/Products";
const Home = () => {
  return (
    <div>
      <Banner />
      <div className="w-full bg-gray-100 -mt-16 lgl:-mt-24 xl:-mt-48 pb-10">
        <Products />
      </div>
    </div>
  );
};

export default Home;
