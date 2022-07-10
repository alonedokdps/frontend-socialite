/* eslint-disable max-len */
/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react'

import { AVATAR } from '@assets'
import Image from './image'

const Photoes = () => (

      <div className="basis-4/5 " style={{background:'white'}} >
        <div className="mx-16">
          <div className="profile user-profile p-4">
             <div className="flex justify-between items-start relative md:mb-4 mb-3">
               <div className="w-full">
                  <h2 className="text-xl font-bold">Photos</h2>
                  <nav className='responsive-nav h-10 border-b flex'>
                     <ul className="lst-nav flex flex-row overflow-x-auto font-bold py-5" >
                     <li className="active">
                        <a href="#" className="px-6">Photos of you <span>270</span></a>
                     </li>
                     <li className="active">
                        <a href="#" className="px-6">Recently added</a>
                     </li>
                     <li className="active">
                        <a href="#" className="px-6">Family</a>
                     </li>
                     <li className="active">
                        <a href="#" className="px-6">University</a>
                     </li>
                     <li className="active">
                        <a href="#" className="px-6">Albums</a>
                     </li>
                     </ul>
                  </nav>
               </div>   
                  <a className='flex items-center justify-center z-10 h-10 w-10 rounded-full bg-blue-600 text-white absolute right-0'>
                     <svg
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 20 20"
                     fill="currentColor"
                     className="w-6 h-6"
                  >
                     <path d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"></path>
                  </svg>
                  </a>
               </div>
               <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-3 mt-5">
                  <Image/>
                  <Image/>
                  <Image/>
                  <Image/>
                  <Image/>
                  <Image/>
                  <Image/>
                  <Image/>
               </div>
               <div className='flex justify-center mt-6'>
                  <a className="bg-white font-semibold my-3 px-6 py-2 rounded-full shadow-md dark:bg-gray-800 dark:text-white">Load more...</a>
               </div>
          </div>
        </div>
      </div>

)

export default Photoes
