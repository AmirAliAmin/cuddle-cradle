import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import {motion} from 'framer-motion'


export default function Contact() {
  return (
    <div className="mx-10">
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img
          className="w-full md:max-w-[480px]"
          src={assets.contact_img}
          alt=""
        />
        <motion.div
        initial={{ opacity: 0, x: 200 }}
        transition={{ duration: 1}}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-[#A6489C]">Our Store</p>
          <p className="text-gray-500">
            548 Gulbarge <br /> Lahore, Pakistan
          </p>
          <p className="text-gray-500">
            Tel: +92-3261891792 <br />
            Email: admin@cuddle_cradle.com
          </p>
          <p className="font-semibold text-xl text-[#A6489C]">
            Careers at Forever
          </p>
          <p className="text-gray-500">
            Learn more about our team and jobs openings.
          </p>
          <button className="border border-[#A6489C] cursor-pointer px-8 py-4 text-sm hover:bg-[#A6489C] hover:text-white transition-all duration-500">
            Explore jobs
          </button>
          <p className="text-gray-600 ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis atque ex iusto quas a eveniet, earum accusantium soluta distinctio pariatur mollitia assumenda et unde sequi ullam harum esse, architecto necessitatibus?</p>
        </motion.div>
      </div>
     
    </div>
  );
}
