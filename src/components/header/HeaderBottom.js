import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import SideNavContent from "./SideNavContent";
import { useSelector } from "react-redux";
import { allItems } from "../../constants";
import SearchIcon from "@mui/icons-material/Search";
import {
  menImage,
  womenImage,
  headphoneImage,
  mouseImage,
} from "../../assets/index";

const HeaderBottom = () => {
  const userInfo = useSelector((state) => state.amazonReducer.userInfo);
  const products = useSelector((state) => state.amazonReducer.products);
  const ref = useRef();
  const [sidebar, setSidebar] = useState(false);
  const [showAll, setShowAll] = useState(false);
  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (e.target.contains(ref.current)) {
        setSidebar(false);
        showAll && setShowAll(false);
      }
    });
  }, [ref, sidebar, showAll]);

  // useEffect(() => {
  //   document.body.addEventListener("click", (e) => {
  //     if (e.target.contains(ref.current)) {
  //       showAll && setShowAll(false);
  //     }
  //   });
  // }, [ref, showAll]);
  return (
    <div className="w-full px-4 h-[50px] bg-amazon_light text-white flex items-center sm:justify-between md:justify-center pt-0 md:pt-3">
      {/* ======================= List Items Start here ======================== */}
      <div className="w-[20%] md:hidden">
        <ul className="flex items-center gap-2 text-sm tracking-wide sm:block md:hidden">
          <li
            onClick={() => setSidebar(true)}
            className="flex items-center gap-1 headerHover"
          >
            <MenuIcon />
            All
          </li>
        </ul>
      </div>
      <nav className="hidden md:block">
        <div className="container">
          <ul className="desktop-menu-category-list">
            <li className="menu-category">
              <a href="#" className="menu-title">
                Home
              </a>
            </li>

            <li className="menu-category">
              <a href="#" className="menu-title">
                Collections
              </a>

              <div className="dropdown-panel">
                <ul className="dropdown-panel-list">
                  <li className="menu-title">
                    <a href="#">Electronics</a>
                  </li>

                  <li className="panel-list-item">
                    <a href="#">Desktop</a>
                  </li>

                  <li className="panel-list-item">
                    <a href="#">Laptop</a>
                  </li>

                  <li className="panel-list-item">
                    <a href="#">Camera</a>
                  </li>

                  <li className="panel-list-item">
                    <a href="#">Headphone</a>
                  </li>

                  <li className="panel-list-item">
                    <a href="#">Tablet</a>
                  </li>

                  <li className="panel-list-item">
                    <a href="#">
                      <img
                        src={headphoneImage}
                        alt="headphone collection"
                        width="250"
                        height="119"
                      />
                    </a>
                  </li>
                </ul>

                <ul className="dropdown-panel-list">
                  <li className="menu-title">
                    <a href="#">Men's</a>
                  </li>

                  <li className="panel-list-item">
                    <a href="#">Formal</a>
                  </li>

                  <li className="panel-list-item">
                    <a href="#">Casual</a>
                  </li>

                  <li className="panel-list-item">
                    <a href="#">Sports</a>
                  </li>

                  <li className="panel-list-item">
                    <a href="#">Jacket</a>
                  </li>

                  <li className="panel-list-item">
                    <a href="#">Sunglasses</a>
                  </li>

                  <li className="panel-list-item">
                    <a href="#">
                      <img
                        src={menImage}
                        alt="men's fashion"
                        width="250"
                        height="119"
                      />
                    </a>
                  </li>
                </ul>

                <ul className="dropdown-panel-list">
                  <li className="menu-title">
                    <a href="#">Women's</a>
                  </li>

                  <li className="panel-list-item">
                    <a href="#">Formal</a>
                  </li>

                  <li className="panel-list-item">
                    <a href="#">Casual</a>
                  </li>

                  <li className="panel-list-item">
                    <a href="#">Perfume</a>
                  </li>

                  <li className="panel-list-item">
                    <a href="#">Cosmetics</a>
                  </li>

                  <li className="panel-list-item">
                    <a href="#">Bags</a>
                  </li>

                  <li className="panel-list-item">
                    <a href="#">
                      <img
                        src={womenImage}
                        alt="women's fashion"
                        width="250"
                        height="119"
                      />
                    </a>
                  </li>
                </ul>

                <ul className="dropdown-panel-list">
                  <li className="menu-title">
                    <a href="#">Electronics</a>
                  </li>

                  <li className="panel-list-item">
                    <a href="#">Smart Watch</a>
                  </li>

                  <li className="panel-list-item">
                    <a href="#">Smart TV</a>
                  </li>

                  <li className="panel-list-item">
                    <a href="#">Keyboard</a>
                  </li>

                  <li className="panel-list-item">
                    <a href="#">Mouse</a>
                  </li>

                  <li className="panel-list-item">
                    <a href="#">Microphone</a>
                  </li>

                  <li className="panel-list-item">
                    <a href="#">
                      <img
                        src={mouseImage}
                        alt="mouse collection"
                        width="250"
                        height="119"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li className="menu-category">
              <a href="#" className="menu-title">
                About Us
              </a>
            </li>

            <li className="menu-category">
              <a href="#" className="menu-title">
                Contact Us
              </a>
            </li>

            <li className="menu-category">
              <a href="#" className="menu-title">
                Our Policies
              </a>

              <ul className="dropdown-list">
                <li className="dropdown-item">
                  <a href="#">Privacy Policy</a>
                </li>

                <li className="dropdown-item">
                  <a href="#">Shipping Policy</a>
                </li>

                <li className="dropdown-item">
                  <a href="#">Terms Services</a>
                </li>

                <li className="dropdown-item">
                  <a href="#">Refund Policy</a>
                </li>
              </ul>
            </li>

            {/* <li className="menu-category">
              <a href="#" className="menu-title">
                PERFUME
              </a>

              <ul className="dropdown-list">
                <li className="dropdown-item">
                  <a href="#">Clothes</a>
                </li>

                <li className="dropdown-item">
                  <a href="#">Deodorant</a>
                </li>

                <li className="dropdown-item">
                  <a href="#">Flower</a>
                </li>

                <li className="dropdown-item">
                  <a href="#">Air Freshener</a>
                </li>
              </ul>
            </li> */}
          </ul>
        </div>
      </nav>

      {/* ======================= List Items End here ========================== */}
      {/* ======================= SideBar Start here =========================== */}
      {sidebar && (
        <div className="w-full h-screen text-black fixed top-0 left-0 bg-amazon_blue bg-opacity-50">
          <div className="w-full h-full relative">
            <motion.div
              ref={ref}
              initial={{ x: -500, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-[290px] md:w-[350px] h-full bg-white border border-black"
            >
              <div className="w-full bg-amazon_light text-white py-2 px-6 flex items-center gap-4">
                {userInfo ? (
                  <img
                    className="w-10 h-10 rounded-full"
                    src={userInfo.image}
                    alt="UserImg"
                  />
                ) : (
                  <AccountCircleIcon />
                )}
                <h3 className="font-titleFont font-bold text-lg tracking-wide">
                  Hello, Sign In
                </h3>
              </div>
              {/* ============================ Content & Devices Start here ================ */}
              <SideNavContent
                title="Digital Content & Devices"
                one="Amazon Music"
                two="Kindle E-readers & Books"
                three="Amazon Appstore"
              />
              <SideNavContent
                title="Shop By Department"
                one="Electronics"
                two="Computers"
                three="Smart Home"
              />
              <SideNavContent
                title="Programs & Features"
                one="Gift Cards"
                two="Amazon live"
                three="International Shopping"
              />
              <SideNavContent
                title="Help & Settings"
                one="Your Account"
                two="Customer Service"
                three="Contact us"
              />
              {/* ============================ Content & Devices End here ================ */}
              <span
                onClick={() => setSidebar(false)}
                className="cursor-pointer absolute top-0 left-[300px] md:left-[360px] w-10 h-10 text-black flex items-center justify-center border bg-gray-200 hover:bg-red-500 hover:text-white duration-300"
              >
                <CloseIcon />
              </span>
            </motion.div>
          </div>
        </div>
      )}

      <div className="w-[80%] inline-flex h-10 rounded-md relative overflow-hidden sm:justify-end md:hidden">
        {/* <span
          onClick={() => setShowAll(!showAll)}
          className="w-16 h-full bg-gray-200 hover:bg-gray-300 border-2 cursor-pointer duration-300 text-sm text-amazon_blue font-titleFont flex items-center justify-center rounded-tl-md rounded-bl-md"
        >
          <span>
            <ArrowDropDownOutlinedIcon />
          </span>
        </span> */}
        {/* {showAll && (
          <div>
            <ul
              ref={ref}
              className="absolute w-56 h-80 top-10 left-0 overflow-y-scroll overflow-x-hidden bg-white border-[1px] border-amazon_blue text-black p-2 flex flex-col gap-1 z-50"
            >
              {allItems.map((item) => (
                <li
                  className="text-sm tracking-wide font-titleFont border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200"
                  key={item._id}
                >
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
        )} */}

        <input
          className="h-full text-base rounded-l-md text-amazon_blue outline-none border-none px-2"
          type="text"
        />
        <span className="w-12 h-full flex items-center justify-center bg-amazon_yellow hover:bg-[#f3a847] duration-300 text-amazon_blue cursor-pointer rounded-tr-md rounded-br-md">
          <SearchIcon />
        </span>
      </div>
      {/* ======================= SideBar End here ============================= */}
      {/* ============ ListItems Start here ============ */}
      {/* ============ ListItems End here ============== */}
      {/* ============ sideNav Start here ============== */}
      {/* ============ sideNav End here ================ */}
    </div>
  );
};

export default HeaderBottom;
