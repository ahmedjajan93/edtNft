import React from "react";
import { Connect, HearoImage } from "../assets/index";

const Hearo = () => {
  return (
    <div className="flex  items-center container mx-auto">
      <div className="flex flex-col space-y-10">
        <h1 className="text-white text-[87px] leading-none ">
          Discover collect, & sell Extraordinary NFTs
        </h1>
        <p className="text-gray-300">
          The leading NFT Marketplace on Ethereum <br /> Home to the next
          generation of digital creators. <br /> Discover the best NFT
          collections.
        </p>
        <div className="flex items-center space-x-20">
          <button className="bg-[#2F80ED] p-2 rounded-full text-white w-36 text-[24px] ">
            Explore
          </button>
          <button className="p-2 text-white rounded-full w-36 border text-[24px] border-gray-500 ">
            Create
          </button>
        </div>
      </div>

      <div className="ml-10 mb-32 ">
        <img
          src={HearoImage}
          alt="HearoImage"
          className="w-full h-full object-cover scale-110"
        />
      </div>
      
    </div>
  );
};

export default Hearo;
