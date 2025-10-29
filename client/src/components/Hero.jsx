import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { assets } from '../assets/assets';

export default function Hero() {
    var settings = {
    dots: true,
    arrows:true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:3000,
    cssEase:"ease-in-out",
    pauseOnHover:false,
    pauseOnFocus:true,

  };
  return (
    <div className='overflow-hidden  mt-2'>
      <div className='sm:block hidden'>
        <Slider {...settings}>
      <div>
        <img src={assets.slider1} className="" alt="" />
       

      </div>
      <div>
        <img src={assets.slider2} className='' alt="" />
        
      </div>
      </Slider>
      </div>
       <div className='block sm:hidden'>
        <Slider {...settings}>
      <div>
      
        <img src={assets.slider2M} className='' alt="" />

      </div>
      <div>
      
        <img src={assets.slider2M} className='' alt="" />
      </div>
      </Slider>
      </div>
    </div>
  )
}