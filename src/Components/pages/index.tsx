/* eslint-disable max-len */
/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react'

import { _GROUP } from '@assets'
import { IMAGE_GROUP } from '@assets'
import { AVATAR } from '@assets'
import { CARD, ITEM } from './card'

import SwiperCore, { A11y, Navigation,Scrollbar,Virtual } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/scss';

SwiperCore.use([Navigation,Scrollbar,A11y])


const PAGE = () => (
      <div className="lg:flex lg:space-x-10 " >
         <div className="lg:w-2/3">
            <div className="flex justify-between items-center relative md:mb-4 mb-3">
                  <div className="flex-1">
                     <h2 className="text-2xl font-semibold">Pages</h2>
                     <nav className="responsive-nav border-b md:m-0 -mx-4">
                        <ul className="lst-nav flex flex-row overflow-x-auto font-bold py-5" >
                        <li className="active">
                           <a href="#" className="px-6">Suggestion</a>
                        </li>
                        <li className="active">
                           <a href="#" className="px-6">Newest</a>
                        </li>
                        <li className="active">
                           <a href="#" className="px-6">My pages</a>
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
                  <div className="relative uk-slider" uk-slider="finite: true">
                  <div className="uk-slider-container px-1 py-3">
                     <ul className='relative flex-nowrap flex '>
                        <Swiper
                           slidesPerView={3}
                           spaceBetween={0}
                           navigation
                           onSlideChange={() => console.log('slide change')}
                           >
                           <SwiperSlide><CARD/></SwiperSlide>
                           <SwiperSlide><CARD/></SwiperSlide>
                           <SwiperSlide><CARD/></SwiperSlide>
                           <SwiperSlide><CARD/></SwiperSlide>
                           <SwiperSlide><CARD/></SwiperSlide>
                           <SwiperSlide><CARD/></SwiperSlide>
                     </Swiper>
                     </ul>
                  </div>
               </div>
               <div className="sm:my-6 my-3 flex items-center justify-between border-b pb-3">
                   <div>
                        <h2 className="text-xl font-bold">Your Friends also following</h2>
                   </div>
                    <a href='#' className="text-blue-500 sm:block hidden">See all</a>
               </div>
               <div className="relative uk-slider" uk-slider="finite: true">
                  <div className="uk-slider-container px-1 py-3">
                     <ul className='relative flex-nowrap flex '>
                        <Swiper
                           slidesPerView={3}
                           spaceBetween={0}
                           navigation
                           onSlideChange={() => console.log('slide change')}
                           >
                           <SwiperSlide><CARD/></SwiperSlide>
                           <SwiperSlide><CARD/></SwiperSlide>
                           <SwiperSlide><CARD/></SwiperSlide>
                           <SwiperSlide><CARD/></SwiperSlide>
                           <SwiperSlide><CARD/></SwiperSlide>
                           <SwiperSlide><CARD/></SwiperSlide>
                     </Swiper>
                     </ul>
                  </div>
               </div>
            </div>
            <div className="lg:w-1/3 w-full">
               <div className="card uk-sticky uk-active fixed">
                  <div className="border-b flex items-center justify-between p-4">
                     <div>
                        <h2 className="text-lg font-semibold">Top pages</h2>
                     </div>
                     <a href='' className="text-blue-500">See all</a>
                  </div>
                  <div className="p-4 -mt-1.5">
                     <ITEM /> <ITEM /> <ITEM /> <ITEM /> <ITEM /> <ITEM /> 
                  </div>
                  <a className="block text-center pb-4 font-medium text-blue-500">See all</a>
               </div>
            </div>
      </div>
)

export default PAGE
