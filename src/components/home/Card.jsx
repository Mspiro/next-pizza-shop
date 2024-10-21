import Image from "next/image";
import React, { useState } from "react";

function Card(props) {
  const data = props.foodData;
  const priceOptions = Object.keys(data.price);

  const [size, setSize] = useState(priceOptions[0]);
  const [qty, setQty] = useState(1);  

  const handleQty = (e) => {
    setQty(e.target.value);
  };

  const handleSize = (e) => {
    setSize(e.target.value);
  };

  let finalPrice = qty * parseInt(data.price[size]);

  return (
    <div className="box">
      <div className="w-80 rounded-lg bg-white overflow-hidden dark:bg-black border-gradient text-gray-700 dark:text-gray-400 text-base">
        <div className="relative w-full h-80">
          <Image src={data.img} layout="fill" objectFit="cover" alt="pizza" />
        </div>
        <div className="p-4 text-gray-700 dark:text-gray-400 text-base">
          <div className="font-bold mb-2 text-xl uppercase"> {data.name} </div>
          <p className="short-description"> {data.description}</p>
        </div>

        <div className=" flex px-4 justify-between">
          <select
            className="h-100  p-1 text-black hover:font-bold font-semibold cursor-pointer dark:text-gray-300  border border-black dark:border-gray-400 rounded"
            onChange={handleQty}
          >
            {Array.from(Array(6), (e, i) => {
              return (
                <option key={i + 1} value={i + 1}>
                  {" "}
                  {i + 1}{" "}
                </option>
              );
            })}
          </select>

          <select className="h-100  p-1 text-black hover:font-bold font-semibold cursor-pointer dark:text-gray-300  border border-black dark:border-gray-400 rounded uppercase" 
          onChange={handleSize}>
            {priceOptions.map((options) => {
              return (
                <option className="" key={options} value={options}>
                  {options}
                </option>
              );
            })}
          </select>
        </div>

        <div className="p-4 flex justify-between font-bold">
          <button className="border text-gray-900 dark:text-gray-100 font-bold dark:border-gray-400 border-gray-900 rounded mr-2 p-2 hover:bg-gradient-to-r from-indigo-700 via-violet-700 to-orange-700  hover:text-gray-100">
            {" "}
            Add to cart{" "}
          </button>
          <p className="p-2 text-xl">₹{finalPrice}/-</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
