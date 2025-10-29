import { createContext, useState } from "react";
import { explores, products } from "../assets/assets";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (prop) => {
  const delivery_fee = 200
  const [filterProduct, setFilterProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [cartItem, setCartItem] = useState({});
  const [search,setSearch] = useState("")
  const[showSearch, setShowSearch] = useState(false)
  const navigate = useNavigate()


  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };
  
  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productCopy = products.slice();
    if (search && setSearch) {
      productCopy = productCopy.filter((item)=>item.name.toLowerCase().includes(search.toLowerCase()))
    }
    if (category.length > 0) {
      productCopy = productCopy.filter((item) =>
        category.includes(item.category)
      );
    }
    if (subCategory.length > 0) {
      productCopy = productCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }
    setFilterProduct(productCopy);
  };

  const addToCart = async (itemId, size) => {
    let cartData = structuredClone(cartItem);
    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    setCartItem(cartData);
  };
  const cartCount = ()=>{
    let totalCount = 0;
    for(const items in cartItem){
      for(const item in cartItem[items]){
        try {
          if (cartItem[items][item]>0) {
            totalCount += cartItem[items][item]
            
          }
        } catch (error) {
          console.log(error)
        }
      }
    }
    return totalCount
  }
   const updateQuantity = async (itemId, size, quantity) => {
        let cartData = structuredClone(cartItem);
        cartData[itemId][size] = quantity;

        setCartItem(cartData)
        
    }

  const getCartAmount = ()=>{
    let totalAmount =0;
    for(const items in cartItem){
      let itemInfo = products.find((product)=>product._id === items)
      for(const item in cartItem[items]){
        try {
          if (cartItem[items][item]>0) {
            totalAmount += itemInfo.price * cartItem[items][item]
          }
        } catch (error) {
          console.log(error)
        }
      }
    }
    return totalAmount
  }
  const value = {
    delivery_fee,
    products,
    explores,
    filterProduct,
    setFilterProduct,
    category,
    setCategory,
    subCategory,
    setSubCategory,
    toggleCategory,
    toggleSubCategory,
    applyFilter,
    addToCart,
    cartItem,navigate,
    getCartAmount,cartCount,updateQuantity,
    search,setSearch,
    showSearch, setShowSearch
  };
  return (
    <ShopContext.Provider value={value}>{prop.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;