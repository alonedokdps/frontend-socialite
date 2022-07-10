/* eslint-disable max-len */
/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react'
import {useHistory} from 'react-router-dom';

import { AVATAR } from '@assets'
import {_GROUP} from '@assets'
import {TRAVEL} from '@assets'
import { IMAGE_GROUP } from '@assets'

const CARD_MEDIA = () => (

  <li className=' mr-2'>
  <div className="card">
     <div className="card-media h-28">
           <div className="card-media-overly"></div>
           <img src={_GROUP} />
           <div className="absolute bg-red-100 font-semibold px-2.5 py-1 rounded-lg text-red-500 text-xs top-2.5 left-2.5">Trend</div>
     </div>
     <div className="relative p-3.5">
        <a href="" className='font-semibold text-lg truncate'> Graphic Design </a>
        <div className="flex items-center flex-wrap space-x-1 mt-1 text-sm text-gray-500 capitalize">
           <a href=''><span> 232k members </span></a>
           <a href=""><span> 1.7k post a day </span></a>
        </div>
        <div className="flex mt-3.5 space-x-2">
           <div className="flex items-center -space-x-2 -mt-1">
              <img src={AVATAR} className="border-2 border-white rounded-full w-7"/>
              <img src={AVATAR} className="border-2 border-white rounded-full w-7"/>
           </div>
           <div className="flex-1 leading-5 text-sm">
              <div>
                 <strong>Johnson</strong> and 5 freind are members 
              </div>
           </div>
        </div>
        <div className="flex mt-3.5 space-x-2 text-sm font-medium">
           <a href='#' className="bg-blue-600 flex flex-1 h-8 items-center justify-center rounded-md text-white capitalize">Join</a>
           <a href='#' className="bg-gray-200 flex flex-1 h-8 items-center justify-center rounded-md capitalize">View</a>
        </div>
     </div>
  </div>
</li>
                  
)

const CARD = () => (

  <div className=' mr-2'>
  <div className="card">
     <div className="card-media h-28">
           <div className="card-media-overly"></div>
           <img src={_GROUP} />
           <div className="absolute bg-red-100 font-semibold px-2.5 py-1 rounded-lg text-red-500 text-xs top-2.5 left-2.5">Trend</div>
     </div>
     <div className="relative p-3.5">
        <a href="" className='font-semibold text-lg truncate'> Graphic Design </a>
        <div className="flex items-center flex-wrap space-x-1 mt-1 text-sm text-gray-500 capitalize">
           <a href=''><span> 232k members </span></a>
           <a href=""><span> 1.7k post a day </span></a>
        </div>
        <div className="flex mt-3 space-x-2 text-sm">
           <a href='#' className="bg-blue-600 flex flex-1 h-8 items-center justify-center rounded-md text-white capitalize">Join</a>
        </div>
     </div>
  </div>
</div>
                  
)

const CATEGORY= () =>(
  <li className='mr-2'>
  <div className="rounded-md overflow-hidden relative w-full h-36">
     <img src={TRAVEL} className="absolute w-full h-full object-cover"/>
     <div className="absolute bottom-0 w-full p-3 text-white z-20 font-semibold text-lg">Travel</div>
  </div>
</li>
)

const ITEM_GROUP= () =>(
  <div className="flex items-center flex-col md:flex-row justify-center p-4 rounded-md shadow hover:shadow-md md:space-x-4">
         <a href="#" className="w-16 h-16 flex-shrink-0 overflow-hidden  relative">
           <img src={IMAGE_GROUP} className="absolute w-full h-full inset-0 "/>
         </a>
         <div className="flex-1">
           <a href='#' className='text-sm font-semibold capitalize'>Graphic Design </a>
           <div className="text-xs text-gray-500"> 215K Member</div>
         </div>
         <button className="bg-gray-100 font-semibold py-2 px-3 rounded-md text-sm md:mt-0 mt-3">Join</button>
     </div>

)

const ITEM_SUGGES= () =>(
  <div className="flex items-center space-x-4">
         <div className="w-20 h-20 flex-shrink-0 rounded-md relative mb-3">
           <img src={IMAGE_GROUP} className="absolute w-full h-full inset-0 rounded-md object-cover shadow-sm"/>
         </div>
         <div className="flex-1 border-b pb-3">
           <a href='#' className="text-lg font-semibold capitalize"> Mountain Riders</a>
           <div className="flex space-x-2 items-center text-sm">
              <div> 23k members </div>
              <div>.</div>
              <div> 12 post a day </div>
          </div>
        <div className="flex items-center mt-2">
              <img src={AVATAR} className="border-2 border-white rounded-full w-7"/>
              <img src={AVATAR} className="border-2 border-white rounded-full w-7"/>
              <div className="text-sm text-gray-500 ml-2"> 2 friends are members</div>
        </div>
      </div>
      <a href='#' className="flex items-center justify-center h-9 px-3 rounded-md bg-blue-100 text-blue-500">
          <svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				className="w-5"
			>
				<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd"></path>
			</svg>
         <span>Follow</span>
         </a>
     </div>

)

export  { CARD_MEDIA , CATEGORY ,ITEM_GROUP, CARD, ITEM_SUGGES}
