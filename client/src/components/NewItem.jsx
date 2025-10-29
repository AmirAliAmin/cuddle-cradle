import { div, img, p } from 'motion/react-client'
import React, { useContext, useEffect, useState } from 'react'
import { CiShoppingCart } from "react-icons/ci";
import { motion } from 'motion/react';
import { BsPlusCircleFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';

export default function NewItem({ id, image, name ,price,sizes}) {
  const {addToCart} = useContext(ShopContext) 
    const [isFilled, setIsFilled] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [buttonHover, setButtonHover] = useState(false);
    const [selectedSize, setSelectedSize] = useState(sizes ? sizes[0] : "");
    const [amount, setAmount] = useState(1);

    const setDecrease =()=>{
       amount>1 ? setAmount(amount-1):setAmount(1)
    }
    const setIncrease =()=>{
      amount ? setAmount(amount + 1):setAmount(1)
    }
     const handleAddToCart = (e) => {
       e.preventDefault();
       if (selectedSize) {
         addToCart(id, selectedSize);
       } else {
         alert("Please select a size.");
       }
     };
  return (
    <div className='border border-gray-400 cursor-pointer '>
      <div className='group flex justify-center items-center w-full relative' onMouseEnter={()=>setIsFilled(true)} onMouseLeave={()=>setIsFilled(false)}>
        <img src={image[0]} className={`w-full object-cover  transition-opacity duration-500 ${isFilled?"opacity-0":"opacity-100 group-hover:opacity-0"}`} alt=""  />
        {image[1]?(
            <Link to={`/product/${id}`} onClick={()=>scrollTo(0,0)}>
                <img src={image[1]} alt="" className={`w-full  absolute top-0 left-0 object-cover transition-opacity duration-500 ${isFilled?"opacity-100":"opacity-0 group-hover:opacity-100"}`} />
            </Link>
        ):(
            <Link to={`/product/${id}`}>
                <img src={image[0]} alt="" className={`w-full absolute top-0 left-0 object-cover transition-opacity duration-500 ${isFilled?"opacity-100":"opacity-0 group-hover:opacity-100"}`} />
            </Link>
        )
        }
        {
            image[1]&&(

        <div className='absolute bottom-3 right-auto md:opacity-0 md:translate-x-5 md:group-hover:opacity-100 md:group-hover:translate-0'>
            <button className='  w-10 h-10 cursor-pointer text-4xl rounded-full shadow hover:text-[#A6489C] ' onClick={()=>setIsHovered(true)}><BsPlusCircleFill /></button>
        </div>
            )
        }
      </div>
      <div className='py-4'>
      <p className='font-medium border-t border-t-gray-400 text-center'>{name.substring(0,37)}</p>
      <p className='text-gray-500 flex justify-center'>Rs. {price}.00</p>

      </div>

      {
        isHovered && image[1] && (
            <div className='relative' onMouseLeave={()=>setIsHovered(false)}>
            <motion.div
            initial={{
              opacity: 0,
              y: 100,
            }}
            transition={{
              duration: 0.3,
              delay: 0.2,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            className="absolute z-2 bottom-0 sm:top-[-280px]  h-50  top-[-300px] right-0 left-0 bg-white "
           
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
                  <span onClick={()=>setDecrease()}>-</span>
                  <span className=""> {amount} </span> <span onClick={()=>setIncrease()}>+</span>
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
 
        )
      }
    </div>
  )
}