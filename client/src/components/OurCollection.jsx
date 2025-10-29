import React, { useContext, useEffect } from 'react'
import Title from './Title'
import { assets } from '../assets/assets'
import { ShopContext } from '../Context/ShopContext'
import { Link, useNavigate } from 'react-router-dom'

export default function OurCollection() {
  const {applyFilter,category, setCategory,subCategory, setSubCategory,toggleCategory,toggleSubCategory,} = useContext(ShopContext)
  const navigate = useNavigate()

  return (
    <div className='mt-10 relative'>
        {/* <div className='text-center text-xl sm:text-4xl font-bold'>
          <Title text1={"OUR"} text2={"COLLECTIONS"}/>
        </div> */}
        <div  className='flex items-center justify-center flex-wrap sm:flex-nowrap gap-3 sm:flex-row mt-6 mx-5'>
            <div onClick={()=>{navigate('/boys'); scrollTo(0,0)}}  className='overflow-hidden sm:w-[250px] w-[150px] h-[150px] sm:h-[250px] rounded-full border border-gray-400 cursor-pointer flex items-center'>
            <img src={assets.boys1} className=' hover:scale-107 transition ease-in-out' alt="" />
            </div>
            <div onClick={()=>{navigate('/girl');  scrollTo(0,0)}} className='overflow-hidden sm:w-[250px] w-[150px] h-[150px] sm:h-[250px] rounded-full border border-gray-400 cursor-pointer flex items-center'>
            <img src={assets.girls1} className='hover:scale-107 transition ease-in-out' alt="" />
            </div>
            <div onClick={()=>{navigate('/summer'); scrollTo(0,0)}} className='overflow-hidden sm:w-[250px] w-[150px] h-[150px] sm:h-[250px] rounded-full border border-gray-300 cursor-pointer flex'>
            <img src={assets.summer} className='hover:scale-107 transition ease-in-out' alt="" />
            </div>
            <div onClick={()=>{navigate('/winter'); scrollTo(0,0)}} className=' overflow-hidden sm:w-[250px] w-[150px] h-[150px] sm:h-[250px] rounded-full border border-gray-300 cursor-pointer flex'>
            <img  src={assets.winter} className='hover:scale-107 transition ease-in-out' alt="" />
            </div>
        </div>
    </div>
  )
}