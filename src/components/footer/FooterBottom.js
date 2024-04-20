import React from "react";
import { footerBottomItem } from "../../constants";

const FooterBottom = () => {
  return (
    <div className="w-full bg-footerBottom py-8">
      {/* ======================= Top start here ====================== */}
      <div className="max-w-5xl mx-auto">
        <div className="w-full grid grid-cols-3 md:grid-cols-5 lgl:grid-cols-7 gap-3 px-6 place-content-center items-start text-gray-400">
          {footerBottomItem.map((item) => (
            <div key={item._id} className="group cursor-pointer">
              <h3 className="footerBottomTitle">{item.title}</h3>
              <p className="footerBottomText">{item.des}</p>
            </div>
          ))}
        </div>
      </div>
      {/* ======================= Top End here ======================== */}
      {/* ======================= Bottom Start here =================== */}
      <div className="flex flex-col justify-center items-center px-4">
        <div>
          <ul className="text-gray-300 text-sm gap-2 md:gap-4 py-2 mt-4 flex">
            <li className="font-normal text-[12px] hover:underline cursor-pointer text-[#DDD] leading-3">
              Conditions of Use
            </li>
            <li className="font-normal text-[12px] hover:underline cursor-pointer text-[#DDD] leading-3">
              Privacy Notice
            </li>
            <li className="font-normal text-[12px] hover:underline cursor-pointer text-[#DDD] leading-3">
              Your Ads Privacy Choices
            </li>
          </ul>
        </div>
        <div>
          <p className="font-normal text-[12px] text-[#DDD] leading-3">
            © 1996-2022, Amazon.com, Inc. or its affiliates
          </p>
        </div>
      </div>
      {/* ======================= Bottom End here ===================== */}
      {/* ============ Top Start here ================== */}
      {/* ============ Top End here ==================== */}
      {/* ============ Bottom Start here =============== */}
      {/* ============ Bottom End here ================= */}
    </div>
  );
};

export default FooterBottom;
