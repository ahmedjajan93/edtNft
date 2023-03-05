import React, { useState } from "react";
import Button from "./Button";
import Item from "./Item";
import { Avtar, User1, Eth, Avatar2, Avatar3, User2 } from "../assets";

const Collection = () => {
  const [activeTap, setActiveTap] = useState("Art");
  return (
    <div className="container m-auto flex flex-col space-y-20 ">
      <h1 className=" text-[42px] bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text font-semibold">
        Top Collections
      </h1>
      <div className="flex items-center justify-center space-x-6">
        <Button
          text="Art"
          color="#2F80ED"
          btnWidth="36"
          activeTap={activeTap}
          setActiveTap={setActiveTap}
        />
        <Button
          text="Collectibles"
          color="#2F80ED"
          btnWidth="48"
          activeTap={activeTap}
          setActiveTap={setActiveTap}
        />
        <Button
          text="Metaverse"
          color="#2F80ED"
          btnWidth="48"
          activeTap={activeTap}
          setActiveTap={setActiveTap}
        />
        <Button
          text="Virtual Worlds"
          color="#2F80ED"
          btnWidth="48"
          activeTap={activeTap}
          setActiveTap={setActiveTap}
        />
        <Button
          text="Sports"
          color="#2F80ED"
          btnWidth="36"
          activeTap={activeTap}
          setActiveTap={setActiveTap}
        />
        <Button
          text="Music"
          color="#2F80ED"
          btnWidth="36"
          activeTap={activeTap}
          setActiveTap={setActiveTap}
        />
      </div>
      <div className="grid grid-cols-[repeat(3,minmax(100px,405px))] mt-20 ml-10 grid-rows-[repeat(2,minmax(100px,390px))]  ">
        <Item mainImage={Avtar} ethImage={Eth} userImage={User1} />
        <Item mainImage={Avatar2} ethImage={Eth} userImage={User1} />
        <Item mainImage={Avtar} ethImage={Eth} userImage={User1} />
        <Item mainImage={Avatar3} ethImage={Eth} userImage={User2} />
        <Item mainImage={Avatar2} ethImage={Eth} userImage={User1} />
        <Item mainImage={Avatar3} ethImage={Eth} userImage={User2} />
      </div>
      <div>
        <button className="p-2 text-white rounded-full w-48 border text-[24px] mb-48 border-gray-500">
          see more
        </button>
      </div>
    </div>
  );
};

export default Collection;
