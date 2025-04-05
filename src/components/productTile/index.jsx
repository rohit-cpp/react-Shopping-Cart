import React from "react";

const ProductTile = ({ singleProductTile }) => {
  return (
    <div className="bg-[#ceb5b7] border rounded-xl p-3">
      <div className="l">
        <a className="block relative h-48 rounded overflow-hidden">
          <img
            alt="ecommerce"
            className=" object-contain h-full w-full hover:h-55 duration-200"
            src={singleProductTile?.thumbnail}
          />
        </a>
        <div className="mt-4 flex items-start justify-between">
          <h3 className="h-8 w-40 overflow-hidden text-black font-bold text-xl tracking-widest title-font mb-1">
            {singleProductTile?.title}
          </h3>
          <p className="mt-1 font-extrabold text-xl text-[#8447ff]">
            ${singleProductTile?.price}
          </p>
        </div>
        <div className="text-center">
          <button className=" mt-3 w-60 text-white bg-blue-200 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-emerald-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductTile;
