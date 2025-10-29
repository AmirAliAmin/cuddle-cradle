import React from 'react'

export default function Title({text1, text2}) {
  return (
    <div className='inline-flex items-center mb-3 gap-2'>
        <p className='text-[#E1430A]'>{text1} <span className='text-[#A6489C] font-medium'>{text2}</span></p>
        <p className='w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700 dark:bg-white'></p>
      
    </div>
  )
}