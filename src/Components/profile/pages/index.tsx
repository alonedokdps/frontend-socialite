/* eslint-disable max-len */
/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react'

import { AVATAR } from '@assets'
import Card_page from './card_page'

const Pages = () => (

      <div className="basis-4/5 " style={{background:'white'}} >
        <div className="mx-16">
          <div className="profile user-profile p-4">
               <h2 className="text-xl font-bold">Pages</h2>
               <nav className='responsive-nav h-10 border-b flex'>
                  <ul className="lst-nav flex flex-row overflow-x-auto font-bold py-5" >
                    <li className="active">
                       <a href="#" className="px-6">Following</a>
                    </li>
                    <li className="active">
                       <a href="#" className="px-6">Newest</a>
                    </li>
                    <li className="active">
                       <a href="#" className="px-6">My pages</a>
                    </li>
                    <li className="active">
                       <a href="#" className="px-6">Suggestions</a>
                    </li>
                  </ul>
               </nav>
               <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-x-2 gap-y-4 mt-3">
                  <Card_page/>
                  <Card_page/>
                  <Card_page/>
                  <Card_page/>
                  <Card_page/>
                  <Card_page/>
                  <Card_page/>
                  <Card_page/>
               </div>
               <div className='flex justify-center mt-6'>
                  <a className="bg-white font-semibold my-3 px-6 py-2 rounded-full shadow-md dark:bg-gray-800 dark:text-white">Load more...</a>
               </div>
          </div>
        </div>
      </div>

)

export default Pages