import React, { useContext, useEffect, useRef, useState } from "react";
import Title from "./Title";
import { ShopContext } from "../Context/ShopContext";
import ProductItem from "./ProductItem";
import { IoCaretBackOutline } from "react-icons/io5";
import { IoCaretForward } from "react-icons/io5";



const ITEM_WIDTH = 300;
export default function TopSelling() {
  const { products } =useContext(ShopContext);
  const [topSell, setTopSell] = useState([]);
  const [nextbtn,setNextbtn] = useState(false)
  const [scrollPosition,setScrollPostion] = useState(0);

  const ContainerRef = useRef();
  

  const bestItems = products.filter((item) => item.bestseller === true);
  const handleScroll =(scrollAmount)=>{
    const newScrollPosition = scrollPosition + scrollAmount;
    setScrollPostion(newScrollPosition)

    ContainerRef.current.scrollLeft = newScrollPosition;
  }

  useEffect(() => {
    setTopSell(bestItems);
  }, []);
  return (
    <div className="mt-5 relative" >
      <div className="text-center text-xl sm:text-4xl font-bold">
        <Title text1={"BEST"} text2={"SELLER"} />
      </div>
      <div className=' flash-message text-white bg-[#3b0424ea] h-30 rounded-full w-30 flex justify-center items-center absolute bottom-100 mx-5'> 
        <p className=''> sale 50% Off </p>
        </div> 
        <div onClick={()=>handleScroll(-ITEM_WIDTH)} className="absolute bottom-70 left-0 right-0 z-2 text-6xl text-[#a6489dcb] cursor-pointer"><IoCaretBackOutline /></div>
      <div className="flex gap-5 h-[470px] overflow-x-auto mx-15 mt-5 mb-10" ref={ContainerRef} style={{scrollBehavior:"smooth"}} >
        {topSell.map((items, index) => (
          <ProductItem
            key={index}
            name={items.name}
            id={items._id}
            price={items.price}
            image={items.image}
            sizes={items.sizes}
          />
        ))}
      </div>
        <div onClick={()=>handleScroll(ITEM_WIDTH)} className="absolute right-0 bottom-70 text-6xl text-[#A6489C] z-2 cursor-pointer"><IoCaretForward /></div>
        
    </div>
  );
}