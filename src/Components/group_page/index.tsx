/* eslint-disable max-len */
/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react'
import {CARD_MEDIA} from './card_group'
import {CATEGORY} from './card_group'
import {ITEM_GROUP} from './card_group'
import {CARD} from './card_group'
import { ITEM_SUGGES } from './card_group'

import SwiperCore, { A11y, Navigation,Scrollbar,Virtual } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/scss';

SwiperCore.use([Navigation,Scrollbar,A11y])

const Group_Page = () => (
      <div >
           <div className="flex justify-between items-center relative md:mb-4 mb-3">
               <div className="flex-1">
                  <h2 className="text-xl font-bold">Groups</h2>
                  <nav className="responsive-nav border-b md:m-0 -mx-4">
                     <ul className="lst-nav flex flex-row overflow-x-auto font-bold py-5" >
                     <li className="active">
                        <a href="#" className="lg:px-2">Suggestions</a>
                     </li>
                     <li className="active">
                        <a href="#" className="lg:px-2">Newest</a>
                     </li>
                     <li className="active">
                        <a href="#" className="lg:px-2">My group</a>
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
                        <Swiper
                           slidesPerView={4}
                           spaceBetween={0}
                           navigation
                           onSlideChange={() => console.log('slide change')}
                           >
                           <SwiperSlide><CARD_MEDIA/></SwiperSlide>
                           <SwiperSlide><CARD_MEDIA/></SwiperSlide>
                           <SwiperSlide><CARD_MEDIA/></SwiperSlide>
                           <SwiperSlide><CARD_MEDIA/></SwiperSlide>
                           <SwiperSlide><CARD_MEDIA/></SwiperSlide>
                           <SwiperSlide><CARD_MEDIA/></SwiperSlide>
                     </Swiper>
                     </ul>
                  </div>
               </div>
               <div className="sm:my-6 my-3 flex items-center justify-between border-b pb-3">
                   <div>
                        <h2 className="text-xl font-bold">Categories</h2>
                        <p className="font-medium text-gray-500 leading-6"> Find a group by browsing top categories. </p>
                   </div>
                    <a href='#' className="text-blue-500 sm:block hidden">See all</a>
               </div>
               <div className="relative uk-slider" uk-slider="finite: true">
                  <div className="uk-slider-container px-1 py-3">
                     <ul className='relative flex-nowrap flex '>
                        <Swiper
                           slidesPerView={5}
                           spaceBetween={0}
                           navigation
                           onSlideChange={() => console.log('slide change')}
                           >
                           <SwiperSlide><CATEGORY/></SwiperSlide>
                           <SwiperSlide><CATEGORY/></SwiperSlide>
                           <SwiperSlide><CATEGORY/></SwiperSlide>
                           <SwiperSlide><CATEGORY/></SwiperSlide>
                           <SwiperSlide><CATEGORY/></SwiperSlide>
                           <SwiperSlide><CATEGORY/></SwiperSlide>
                           <SwiperSlide><CATEGORY/></SwiperSlide>
                           <SwiperSlide><CATEGORY/></SwiperSlide>
                     </Swiper>
                     </ul>
                  </div>
               </div>
               <div className="lg:flex lg:space-x-12">
                  <div className="lg:w-3/4">
                     <h2 className="text-xl font-bold">Groups</h2>
                     <nav className='h-10 border-b flex'>
                        <ul className="flex flex-wrap font-bold " >
                        <li className="active">
                           <a href="#" className="lg:px-2">All Group<span>1,271</span></a>
                        </li>
                        <li className="active">
                           <a href="#" className="lg:px-2">Recently added</a>
                        </li>
                        <li className="active">
                           <a href="#" className="lg:px-2">Family</a>
                        </li>
                        <li className="active">
                           <a href="#" className="lg:px-2">University</a>
                        </li>
                        <li className="active">
                           <a href="#" className="lg:px-2">More</a>
                        </li>
                        </ul>
                     </nav>
                     <div className="grid md:grid-cols-2 divide divide-gray-200 gap-x-4 mt-4">
                        <ITEM_GROUP/> <ITEM_GROUP/> <ITEM_GROUP/> <ITEM_GROUP/> <ITEM_GROUP/> <ITEM_GROUP/> <ITEM_GROUP/> <ITEM_GROUP/> <ITEM_GROUP/> <ITEM_GROUP/>
                     </div>
                  </div>
                  <div className="lg:w-1/4 flex-shrink-0 space-y-5">
                     <h2 className="text-xl font-semibold mt-7"> Suggested For You </h2>
                     <CARD/>  <CARD/>
                  </div>
               </div>
               <div className="sm:my-6 my-3 flex items-center justify-between border-b pb-3">
                   <div>
                        <h2 className="text-xl font-bold">Suggestions</h2>
                        <p className="font-medium text-gray-500 leading-6">  Find a groups You Might Be Interested In.  </p>
                   </div>
                    <a href='#' className="text-blue-500 sm:block hidden">See all</a>
               </div>
               <div className="grid md:grid-cols-2 divide divide-gray-200 gap-x-6 gap-y-4">
                   <ITEM_SUGGES/> <ITEM_SUGGES/> <ITEM_SUGGES/> <ITEM_SUGGES/> <ITEM_SUGGES/> <ITEM_SUGGES/>
               </div>
          </div>
       
      

)

export default Group_Page
