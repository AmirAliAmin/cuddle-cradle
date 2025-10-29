import React, { useContext, useEffect, useState } from "react";
import Title from "./Title";
import { ShopContext } from "../Context/ShopContext";
import NewItem from "./NewItem";

export default function Summer() {
  const { products } = useContext(ShopContext);
  const [newProduct, setNewProduct] = useState([]);

  const summerCollection = products.filter(
    (item) => item.subCategory === "Summer"
  );
  useEffect(() => {
    setNewProduct(summerCollection);
  }, []);
  return (
    <div className="mt-15">
      <div className="text-center text-xl sm:text-4xl font-bold">
        <Title text1={"SUMMER"} text2={"COLLECTIONS"} />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:mx-10 mx-2 mt-10">
        {newProduct.map((item, index) => (
          <NewItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
            sizes={item.sizes}
          />
        ))}
      </div>
    </div>
  );
}