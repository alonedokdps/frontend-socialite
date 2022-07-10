/* eslint-disable max-len */
/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react'

import { AVATAR } from '@assets'
import {_GROUP} from '@assets'
import {TRAVEL} from '@assets'
import { IMAGE_GROUP } from '@assets'

const CARD_MEDIA = () => (

  <li className='w-3/12 mr-2'>
  <div className="card">
     <div className="card-media h-28">
           <div className="card-media-overly"></div>
           <img src={_GROUP} />
           <div className="absolute bg-red-100 font-semibold px-2.5 py-1 rounded-lg text-red-500 text-xs top-2.5 left-2.5">Happening now </div>
     </div>
     <div className="relative p-3.5">
        <a href="" className='font-semibold text-lg truncate'>  The global creative </a>
        <div className="text-sm font-medium mt-1">London</div>
        <div className="flex items-center space-x-2 text-sm text-gray-500 capitalize">
           <div> 15 intersted</div>
           <div>.</div>
           <div>2 going</div>
        </div>
        <div className="flex mt-2 space-x-2 text-sm">
           <a href='#' className="bg-blue-600 flex flex-1 h-8 items-center justify-center rounded-md text-white capitalize">
           <svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				className="w-5 mr-1.5"
			>
				<path fill-rule="evenodd" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" clip-rule="evenodd"></path>
			</svg>
            Intersted</a>
           <a href='#' className="bg-gray-200 flex h-8 items-center px-3 rounded-md">
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5"
               >
                  <path fill-rule="evenodd" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" clip-rule="evenodd"></path>
               </svg>
           </a>
        </div>
     </div>
  </div>
</li>
                  
)


const CATEGORY= () =>(
  <li className='w-1/5 mr-2'>
  <div className="rounded-xl overflow-hidden relative w-full h-44 cursor-pointer transform hover:scale-105 duration-300 hover:shadow-md">
     <img src={TRAVEL} className="absolute w-full h-full object-cover "/>
     <div className="absolute bottom-0 w-full p-3 text-white z-20 font-semibold text-lg">Travel</div>
  </div>
</li>
)


export  { CARD_MEDIA , CATEGORY }
