import React from "react";
import { middleList } from "../../constants";
import FooterMiddleList from "./FooterMiddleList";
import { logo, bdFlag } from "../../assets/index";

const FooterMiddle = () => {
  return (
    <div className="w-full bg-amazon_light text-white">
      <div className="w-full border-b-[1px] border-gray-500 py-10">
        <div className="max-w-5xl mx-auto text-gray-300">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 place-items-center items-start px-6 gap-10 lgl:gap-4">
            {middleList.map((item) => (
              <FooterMiddleList
                key={item._id}
                title={item.title}
                listItem={item.listItem}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="w-full flex gap-6 items-center justify-center py-6">
        <div>
          <img className="w-50 pt-3" src={logo} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default FooterMiddle;
