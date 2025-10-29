import React, { useContext, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import { CiShoppingCart } from "react-icons/ci";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

export default function ProductItem({ id, image, name, price, sizes }) {
  const { addToCart } = useContext(ShopContext);
  const [isHovered, setIsHovered] = useState(false);
  const [buttonHover, setButtonHover] = useState(false);
  
  const [selectedSize, setSelectedSize] = useState(sizes ? sizes[0] : "");

  
  const handleAddToCart = (e) => {
    e.preventDefault();
    if (selectedSize) {
      addToCart(id, selectedSize);
    } else {
      alert("Please select a size.");
    }
  };

  return (
    <Link
      className="text-gray-700 w-[100%] cursor-pointer"
      to={`/product/${id}`}
      onClick={()=>scrollTo(0,0)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? (
        <div className="relative w-[220px] h-[450px]">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.4, delay: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="overflow-hidden"
          >
            <img
              src={image[1] ? image[1] : image[0]}
              className="hover:scale-110 transition ease-in-out"
              alt={name}
             
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="absolute bottom-0 sm:top-59 top-30 right-0 left-0 bg-white"
          >
            <div className="flex w-full flex-col justify-center items-center">
              <div className="flex flex-col">
                <label
                  className="pt-3 pb-2 text-[15px] font-medium text-center"
                  htmlFor={`size-select-${id}`}
                >
                  Size
                </label>
                
                <select
                  id={`size-select-${id}`}
                  className="sm:px-10 border border-gray-400 py-1 outline-none"
                  value={selectedSize} 
                  onChange={(e) => setSelectedSize(e.target.value)} 
                  onClick={(e) => e.preventDefault()} 
                >
                  {sizes?.map((size, index) => (
                    <option key={index} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
              </div>
              <div className="py-3 w-[50%]">
                <p className="text-center text-xl flex w-full justify-between">
                  <span>-</span>
                  <span className=""> 1 </span> <span>+</span>
                </p>
              </div>
            </div>
            <p className="text-sm font-medium text-center text-red-600">
              RS.{price}.00
            </p>
            <div className="pt-2 flex justify-center items-center font-medium text-sm">
              <button
                className="flex justify-center items-center bg-[#A6489C] text-white w-30 h-10 cursor-pointer"
                onMouseEnter={() => setButtonHover(true)}
                onMouseLeave={() => setButtonHover(false)}
                onClick={handleAddToCart}
              >
                {buttonHover ? (
                  <CiShoppingCart className="font-bold text-2xl" />
                ) : (
                  "ADD TO CART"
                )}
              </button>
            </div>
          </motion.div>
        </div>
      ) : (
        <div className="w-[230px] h-[450px]">
          <div className="overflow-hidden shadow-xl">
            <img
              src={image[0]}
              className="hover:scale-110 transition ease-in-out"
              alt={name}
               
            />
          </div>
          <p className="pt-3 pb-2 text-[15px] font-medium text-center">
            {name}
          </p>
          <p className="text-sm font-medium text-center">RS.{price}.00</p>
        </div>
      )}
    </Link>
  );
}