import React from 'react'
import { assets } from '../assets/assets'

export default function FAQs() {
  return (
    <div className='mt-10 sm:mx-1 mx-10'>
      <h1 className='text-center text-4xl font-medium mb-10 text-[#E1430A]'>Why Choose Cuddle Cradle?</h1>
      <div className='sm:flex flex-col sm:flex-row sm:mx-20 justify-between gap-10'>
        <div>
          <img src={assets.FAQ} className='w-full' alt="" />
        </div>
        <div className='mt-6'>
          <h1 className='text-xl font-bold mb-5 text-[#A6489C]'>Premium Quality & Comfort</h1>
          <p>Our clothes are made with ultra-soft, skin-friendly fabrics that keep your child cozy all day. No itchy tags or rough seams—just pure comfort designed with your little one in mind.</p>
          <h1 className='text-xl font-bold mb-5 mt-10 text-[#A6489C]'>Safe, Durable & Parent-Approved</h1>
          <p>Our clothing is tested for durability and safety. Stain-resistant, easy to wash, and built to last—perfect for your active kids everyday adventures!</p>
          <h1 className='text-xl font-bold mb-5 mt-10 text-[#A6489C]'>Unique Styles, Made Just for Them</h1>
          <p>From vibrant prints to name-personalized outfits, MYK brings trendsetting fashion to your little ones wardrobe. Customize colors, characters, and more — because every kid deserves to stand out in style.</p>
        </div>
      </div>
    </div>
  )
}