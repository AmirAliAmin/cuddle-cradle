import React from 'react'
import Title from './Title'
import { menu_list } from '../assets/assets'
import { div } from 'motion/react-m'

export default function ExploreMore({category, setCategory}) {
  return (
    <div className='mt-10'>
      <div className="text-center text-xl sm:text-4xl font-bold">
            <Title text1={"EXPLORE"} text2={"MORE"} />
        </div>
        <div className='sm:w-full w-[95%] flex justify-between items-center sm:gap-0 gap-3 mt-5 overflow-auto'>
            {menu_list.map((item,index)=>{
                return(
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name? "All": item.menu_name)} key={index} className='cursor-pointer px-5 sm:w-full'>
                        <img src={item.menu_image} className='sm:w-32 rounded-full border border-gray-400 hover:scale-110 transition ease-in-out' alt="" />
                        <p className='text-center'>{item.menu_name}</p>
                    </div>
                )
            })
            }
        </div>
    </div>
  )
}