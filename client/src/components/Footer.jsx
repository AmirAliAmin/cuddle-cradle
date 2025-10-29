import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='bg-[#A6489C] mt-10 py-10 text-[#ffffff]'>
      <div className='flex sm:flex-row flex-col justify-center items-center gap-6'>
        <p className='font-bold text-xl'>BE IN TOUCH WITH US</p>
        <div className=' bg-white flex'>
        <input type="text" className=' py-2 outline-none px-2 text-gray-500' placeholder='Enter Your Email Here' />
        <button className='text-sm bg-black py-[15px] px-3 cursor-pointer'>SUBSCRIBE</button>
        </div>
      </div>
     <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_2fr] gap-14 my-10 mt-15 text-sm mx-10'>
        <div>
            <img src={assets.logo} className='mb-5 w-32' alt="" />
            <p className='w-full md:w-2/3 text-[#ffffff]'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi nostrum tempore itaque maiores quaerat, fugit odit, doloribus at quam est praesentium ex enim eius atque? Aut dolorum harum assumenda ea.
            </p>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-[#ffffff]'>
                <Link to={'/'} className='cursor-pointer '>Home</Link>
                <Link to={''} className='cursor-pointer '>Contact</Link>
                <Link to={''} className='cursor-pointer '>Delivery</Link>
                <Link to={''} className='cursor-pointer '>Privacy Policy</Link>
            </ul>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-[#ffffff]'>
                <li>+92-3261971792</li>
                <li>aliaminamir@gmail.com</li>
               
            </ul>
        </div>
    </div>
      <p className='text-center'>© 2025,Cuddle_cardle.com - All Right Reserved.</p>
    </div>
  )
}