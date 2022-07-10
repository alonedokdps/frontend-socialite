/* eslint-disable max-len */
/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react'
import {CARD_MEDIA} from './card_group'
import {CATEGORY} from './card_group'

const EVENTS = () => (

      <div >
          <div className="flex justify-between items-center relative md:mb-4 mb-3">
               <div className="flex-1">
                  <h2 className="text-xl font-bold">Events</h2>
                  <nav className="responsive-nav border-b md:m-0 -mx-4">
                   <ul className="lst-nav flex flex-row overflow-x-auto font-bold py-5" >
                     <li className="active">
                        <a href="#" className="lg:px-2">Suggestions</a>
                     </li>
                     <li className="active">
                        <a href="#" className="lg:px-2">Joined</a>
                     </li>
                     <li className="active">
                        <a href="#" className="lg:px-2">Interesting</a>
                     </li>
                     <li className="active">
                        <a href="#" className="lg:px-2">Past</a>
                     </li>
                     <li className="active">
                        <a href="#" className="lg:px-2">Coming</a>
                     </li>
                     </ul>
                  </nav>
               </div>
               <a className='flex items-center justify-center z-10 h-10 w-20 rounded-lg bg-blue-600 text-white absolute right-0'>
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 20 20"
                     fill="currentColor"
                     className="w-5"
                  >
                     <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd"></path>
                  </svg>
                  <span>Create</span>
                  </a>
                  </div>
               <div className="relative uk-slider" uk-slider="finite: true">
                  <div className="uk-slider-container px-1 py-3">
                     <ul className='relative flex-nowrap flex '>
                        <CARD_MEDIA/>
                        <CARD_MEDIA/>
                        <CARD_MEDIA/>
                        <CARD_MEDIA/>
                     </ul>
                  </div>
               </div>
               <div className="sm:my-6 my-3 flex items-center justify-between border-b pb-3">
                   <div>
                        <h2 className="text-xl font-bold">Lists You May Like</h2>
                   </div>
                    <a href='#' className="text-blue-500 sm:block hidden">See all</a>
               </div>
               <div className="relative uk-slider" uk-slider="finite: true">
                  <div className="uk-slider-container px-1 py-3">
                     <ul className='relative flex-nowrap flex '>
                        <CATEGORY/>
                        <CATEGORY/>
                        <CATEGORY/>
                        <CATEGORY/>
                        <CATEGORY/>
                     </ul>
                  </div>
               </div>
              
          </div>
       
      

)

export default EVENTS
