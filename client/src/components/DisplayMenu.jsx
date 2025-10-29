import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import NewItem from './NewItem'

export default function DisplayMenu({category}) {
    const {explores} = useContext(ShopContext)
    const [menu, setMenu] = useState([])

    useEffect(()=>{
        if (category === "All") {
            setMenu(explores.slice(0,8));
        }else{
            setMenu(explores)
        }
    },[category])
  return (
    <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-2 sm:mx-10 '>
      {
        menu.map((item,index)=>{
            if (category === "All" || category === item.category) {
                return <NewItem key={index} id={item.id} name={item.name} image={item.image} price={item.price} />
            }
        })
      }
    </div>
  )
}