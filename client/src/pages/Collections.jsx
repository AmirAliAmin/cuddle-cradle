import React, { useContext, useEffect, useState } from "react";
import Title from "../components/Title";
import { ShopContext } from "../Context/ShopContext";
import NewItem from "../components/NewItem";
import { div } from "motion/react-client";

export default function Collections() {
  const { products,filterProduct, setFilterProduct,category,setCategory,subCategory, setSubCategory,toggleCategory,toggleSubCategory,applyFilter,search,setSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  // const [filterProduct, setFilterProduct] = useState([]);
  const [sortType, setSortType] = useState("relavent");
  // const [category, setCategory] = useState([]);
  // const [subCategory, setSubCategory] = useState([]);

  // const toggleCategory = (e) => {
  //   if (category.includes(e.target.value)) {
  //     setCategory((prev) => prev.filter((item) => item !== e.target.value));
  //   } else {
  //     setCategory((prev) => [...prev, e.target.value]);
  //   }
  // };
  // const toggleSubCategory = (e) => {
  //   if (subCategory.includes(e.target.value)) {
  //     setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
  //   } else {
  //     setSubCategory((prev) => [...prev, e.target.value]);
  //   }
  // };

  // const applyFilter = () => {
  //   let productCopy = products.slice();
  //   if (category.length > 0) {
  //     productCopy = productCopy.filter((item) =>
  //       category.includes(item.category)
  //     );
  //   }
  //   if (subCategory.length > 0) {
  //     productCopy = productCopy.filter((item) =>
  //       subCategory.includes(item.subCategory)
  //     );
  //   }
  //   setFilterProduct(productCopy);
  // };

  const sortProduct = () => {
    let pCopy = filterProduct.slice();
    if (sortType === "low-high") {
      setFilterProduct(pCopy.sort((a, b) => a.price - b.price));
    } else if (sortType === "high-low") {
      setFilterProduct(pCopy.sort((a, b) => b.price - a.price));
    } else if (sortType === "a-z") {
      setFilterProduct(pCopy.sort((a, b) => a.name.localeCompare(b.name)));
    } else if (sortType === "z-a") {
      setFilterProduct(pCopy.sort((a, b) => b.name.localeCompare(a.name)));
    } else setFilterProduct(products);
  };

  useEffect(() => {
    setFilterProduct(products);
  }, []);
  useEffect(() => {
    applyFilter();
  }, [category, subCategory,search,setSearch]);
  useEffect(() => {
    sortProduct();
  }, [sortType]);
  return (
    <div className="pt-10 sm:mx-10 mx-2">
      <div className="flex-1">
        <div className="flex flex-wrap sm:flex-nowrap gap-2 sm:gap-0 justify-between mb-4">
          <div className="text-base font-extrabold cursor-pointer sm:text-3xl">
            <Title text1={"ALL"} text2={"COLLECTIONS"} />
          </div>
          <div className="flex gap-3 border border-gray-400  items-center px-2 py-3 sm:py-0 ">
            <p>TYPE:</p>
            <div className=" flex gap-1 ">
              <p>
                <input
                  type="checkbox"
                  value={"Summer"}
                  onChange={toggleSubCategory}
                />{" "}
                Summer
              </p>
              <p>
                <input
                  type="checkbox"
                  value={"Winter"}
                  onChange={toggleSubCategory}
                />{" "}
                Winter
              </p>
            </div>
          </div>
          <div className="flex gap-3 border border-gray-400  items-center px-2 py-3 sm:py-0 ">
            <p>CATEGORIES:</p>
            <div className=" flex gap-1 ">
              <p>
                <input
                  type="checkbox"
                  value={"Boy"}
                  onChange={toggleCategory}
                />{" "}
                Boys
              </p>
              <p>
                <input
                  type="checkbox"
                  value={"Girl"}
                  onChange={toggleCategory}
                />{" "}
                Girls
              </p>
            </div>
          </div>
          <select
            onChange={(e) => setSortType(e.target.value)}
            className="border-2 border-gray-300 text-sm px-2 outline-none py-3 sm:py-0 "
          >
            <option value="relavent">Sort by: Relavent</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
            <option value="a-z">Sort by: a to z</option>
            <option value="z-a">Sort by: z to a</option>
          </select>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6  ">
          {filterProduct.map((item, index) => (
            <NewItem
              key={index}
              id={item._id}
              name={item.name}
              image={item.image}
              price={item.price}
              sizes={item.sizes}
            />
          ))}
        </div>
      </div>
    </div>
  );
}