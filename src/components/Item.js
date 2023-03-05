import React from "react";

const Item = ({ mainImage, ethImage, userImage }) => {
  return (
    <div className="w-[320px] h-[380px] mb-10 ml-10 shadow-inner   ">
      <div className="relative mx-auto w-full">
        <a
          href="#"
          className="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full"
        >
          <div className="shadow p-4 rounded-lg bg-[#3F2973] opacity-80 ">
            <div>
              <img src={mainImage} alt="" className="rounded-lg w-[300px] h-48 object-cover "  />
            </div>

            <div className="mt-4 flex items-center space-x-6 ">
              <img src={userImage} alt="" className="w-10 h-10 rounded-lg " />

              <div className="flex flex-col space-y-1 justify-center ">
                <h1 className="text-[16px] text-white">CryptoPunk 3D #13</h1>
                <p className="text-[13px] text-white">3D cryptopunk</p>
              </div>
              <img src={ethImage} alt="" className="w-10 h-10" />
            </div>

            <div className="flex items-center mt-5 space-x-8">
              <div className="text-white ">
                <p className=" font-semibold mb-1">9.61 ETH</p>
                <p>latest Bid</p>
              </div>
              <div className="text-white">
                <p className=" font-semibold mb-1">4.12 ETH</p>
                <p>from</p>
              </div>
              <div>
                <p className=" text-white font-semibold mb-1">$103,025</p>
                <p className="text-[#DC0916]">-2.25%</p>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Item;
