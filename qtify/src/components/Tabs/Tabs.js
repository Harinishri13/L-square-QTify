import React, { useState } from "react";

const Tabs = ({ tabs, onTabClick }) => {
  const [active, setActive] = useState(tabs[0]);

  return (
    <div className="flex gap-4 px-6 py-4">
      {tabs.map((tab, idx) => (
        <button
          key={idx}
          onClick={() => {
            setActive(tab);
            onTabClick(tab);
          }}
          className={`px-4 py-2 rounded-lg ${
            active === tab
              ? "bg-green-500 text-white"
              : "bg-gray-800 text-gray-300"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
