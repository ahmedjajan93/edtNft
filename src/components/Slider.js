import React from "react";
import Carousel from "react-carousel-light";
import Item from "./Item";
import { Avtar, User1, Eth, Avatar2, Avatar3, User2 } from "../assets";

const Slider = () => {
  return (
    <>
      <div>
      <Carousel>
        <Item mainImage={Avtar} ethImage={Eth} userImage={User1} />
        <Item mainImage={Avatar2} ethImage={Eth} userImage={User1} />
        <Item mainImage={Avtar} ethImage={Eth} userImage={User1} />
        <Item mainImage={Avatar3} ethImage={Eth} userImage={User2} />
        <Item mainImage={Avatar2} ethImage={Eth} userImage={User1} />
        <Item mainImage={Avatar3} ethImage={Eth} userImage={User2} />
      </Carousel>
      </div>
      <button className="p-2 text-white rounded-full w-48 border text-[24px] mb-48 mt-[-200px] border-gray-500">see more</button>
    </>
  );
};

export default Slider;
