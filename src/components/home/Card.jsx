import Image from "next/image";
import React from "react";

const priceOptions = ["regular", "medium", "large"];

function Card() {
  return (
    <div className="box">
      <div className="w-80 rounded-lg bg-white overflow-hidden dark:bg-black border-gradient">
        <div className="relative w-full h-80">
          <Image
            src="https://www.dominos.co.in/theme2/front/images/menu-images/my-vegpizza.webp"
            layout="fill"
            objectFit="cover"
            alt="pizza"
          />
        </div>
        <div className="p-4 text-gray-700 dark:text-gray-400 text-base">
          <div className="font-bold mb-2 text-xl uppercase">Pizza Name</div>
          <p className="short-description"> Description</p>
        </div>

        <div className=" flex px-4 justify-between">
          <select className="h-100  p-1 text-black hover:font-bold font-semibold cursor-pointer dark:text-gray-300  border border-black dark:border-gray-400 rounded">
            {Array.from(Array(6), (e, i) => {
              return (
                <option key={i + 1} value={i + 1}>
                  {" "}
                  {i + 1}{" "}
                </option>
              );
            })}
          </select>

          <select className="h-100  p-1 text-black hover:font-bold font-semibold cursor-pointer dark:text-gray-300  border border-black dark:border-gray-400 rounded uppercase">
            {priceOptions.map((options) => {
              return (
                <option className="" key={options} value={options}>
                  {options}
                </option>
              );
            })}
          </select>
        </div>

        <div></div>
        
      </div>
    </div>
  );
}

export default Card;
