import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-around items-center">
      <h1 className="text-xl font-semibold mr-3">Loading</h1>
      <div className="w-6 h-6 border-2 border-dashed rounded-full border-[#181818] animate-spin mb-5 mt-5"></div>
    </div>
  );
};

export default Loader;
