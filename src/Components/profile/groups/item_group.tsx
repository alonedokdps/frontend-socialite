/* eslint-disable max-len */
/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react'
import { IMAGE_GROUP } from '@assets'

const Item = () => (

     <div className="flex items-center flex-col md:flex-row justify-center p-4 rounded-md shadow hover:shadow-md md:space-x-4">
         <a href="#" className="w-16 h-16 flex-shrink-0 overflow-hidden rounded-full relative">
           <img src={IMAGE_GROUP} className="absolute w-full h-full inset-0 "/>
         </a>
         <div className="flex-1">
           <a href='#' className='text-sm font-semibold capitalize'>Graphic Design </a>
           <div className="text-xs text-gray-500"> 54 mutual friends </div>
         </div>
         <button className="bg-gray-100 font-semibold py-2 px-3 rounded-md text-sm md:mt-0 mt-3">Following</button>
     </div>
                  
)

export default Item
