import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Title from './Title'

export default function TotalCartAmount() {
    const { getCartAmount,delivery_fee} = useContext(ShopContext)
  return (
    <div className='w-full'>
      <div className='text-2xl'>
        <Title text1={"CART"} text2={"TOTALS"}/>
      </div>
      <div className='flex flex-col gap-2 mt-2 text-sm'>
        <div className='flex justify-between'>
            <p>SubTotal</p>
            <p>Rs. {getCartAmount()}.00</p>
        </div>
        <hr />
         <div className='flex justify-between'>
            <p>Shipping Fee</p>
            <p>Rs. {delivery_fee}</p>
        </div>
        <hr />
         <div className='flex justify-between'>
            <p>Total</p>
            <p>Rs. {getCartAmount() === 0 ?0: getCartAmount() + delivery_fee}.00</p>
        </div>
      </div>
    </div>
  )
}
