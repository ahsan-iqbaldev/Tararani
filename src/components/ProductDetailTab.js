import React, { useState } from "react";

const ProductDetailTab = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="w-[80%] mx-auto pb-10">
      <div className="border-b border-gray-200 dark:border-gray-700 mb-4">
        <ul className="flex flex-wrap -mb-px" id="myTab" role="tablist">
          <li className="mr-2" role="presentation">
            <button
              className={`inline-block hover:text-yellow-500 hover:border-yellow-500 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 ${
                activeTab === "profile"
                  ? "text-black border-black"
                  : "text-gray-500"
              } ${
                activeTab === "profile" &&
                "dark:text-yellow-500 dark:border-yellow-500"
              }`}
              onClick={() => setActiveTab("profile")}
              id="profile-tab"
              type="button"
              role="tab"
              aria-controls="profile"
              aria-selected={activeTab === "profile"}
            >
              Related Items
            </button>
          </li>
          <li className="mr-2" role="presentation">
            <button
              className={`inline-block hover:text-yellow-500 hover:border-yellow-500 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 ${
                activeTab === "dashboard"
                  ? "text-black border-black"
                  : "text-gray-500"
              }  ${
                activeTab === "dashboard" &&
                "dark:text-yellow-500 dark:border-yellow-500"
              }`}
              onClick={() => setActiveTab("dashboard")}
              id="dashboard-tab"
              type="button"
              role="tab"
              aria-controls="dashboard"
              aria-selected={activeTab === "dashboard"}
            >
              Reviews
            </button>
          </li>
          <li className="mr-2" role="presentation">
            <button
              className={`inline-block hover:text-yellow-500 hover:border-yellow-500 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 ${
                activeTab === "settings"
                  ? "text-black border-black"
                  : "text-gray-500"
              } ${
                activeTab === "settings" &&
                "dark:text-yellow-500 dark:border-yellow-500"
              }`}
              onClick={() => setActiveTab("settings")}
              id="settings-tab"
              type="button"
              role="tab"
              aria-controls="settings"
              aria-selected={activeTab === "settings"}
            >
              Description
            </button>
          </li>
        </ul>
      </div>
      <div id="myTabContent">
        <div
          className={`bg-gray-50 p-4 rounded-lg dark:bg-gray-800 ${
            activeTab !== "profile" ? "hidden" : ""
          }`}
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            This is some placeholder content the{" "}
            <strong className="font-medium text-gray-800 dark:text-white">
              Profile tab's associated content
            </strong>
            . Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classes to control the content
            visibility and styling.
          </p>
        </div>
        <div
          className={`bg-gray-50 p-4 rounded-lg dark:bg-gray-800 ${
            activeTab !== "dashboard" ? "hidden" : ""
          }`}
          id="dashboard"
          role="tabpanel"
          aria-labelledby="dashboard-tab"
        >
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            This is some placeholder content the{" "}
            <strong className="font-medium text-gray-800 dark:text-white">
              Dashboard tab's associated content
            </strong>
            . Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classes to control the content
            visibility and styling.
          </p>
        </div>
        <div
          className={`bg-gray-50 p-4 rounded-lg dark:bg-gray-800 ${
            activeTab !== "settings" ? "hidden" : ""
          }`}
          id="settings"
          role="tabpanel"
          aria-labelledby="settings-tab"
        >
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            This is some placeholder content the{" "}
            <strong className="font-medium text-gray-800 dark:text-white">
              Settings tab's associated content
            </strong>
            . Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classes to control the content
            visibility and styling.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailTab;
