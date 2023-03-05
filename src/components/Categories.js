import React from "react";
import CategoriesItem from "./CategoriesItem";
import Carousel from "react-carousel-light";

const Categories = () => {
  return (
    <div className="w-[900px] ml-48 text-center">
      <h1 className="mb-20  text-[42px] bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text font-semibold">Top Categories</h1>
      <Carousel>
        <CategoriesItem />
        <CategoriesItem />
        <CategoriesItem />
        <CategoriesItem />
        <CategoriesItem />
        <CategoriesItem />
      </Carousel>
      <button className="p-2 text-white rounded-full w-48 border text-[24px] mb-48 mt-[-200px] border-gray-500">
        see more
      </button>
    </div>
  );
};

export default Categories;
