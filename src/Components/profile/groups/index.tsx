/* eslint-disable max-len */
/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react'

import { AVATAR } from '@assets'
import Item from './item_group'

const Groups = () => (

      <div className="basis-4/5 " style={{background:'white'}} >
        <div className="mx-16">
          <div className="profile user-profile p-4">
             <div className="flex justify-between items-start relative md:mb-4 mb-3">
               <div className="w-full">
                  <h2 className="text-xl font-bold">Groups</h2>
                  <nav className='responsive-nav h-10 border-b flex'>
                     <ul className="lst-nav flex flex-row overflow-x-auto font-bold py-5" >
                     <li className="active">
                        <a href="#" className="px-6">Joined<span>230</span></a>
                     </li>
                     <li className="active">
                        <a href="#" className="px-6">My Groups</a>
                     </li>
                     <li className="active">
                        <a href="#" className="px-6">Discover</a>
                     </li>
                     </ul>
                  </nav>
                </div>
                <a className='flex items-center justify-center z-10 h-10 w-20 rounded-full bg-blue-600 text-white absolute right-0'>Create</a>
               </div>
               <div className="grid md:grid-cols-2  grid-cols-2 gap-x-2 gap-y-4 mt-3">
                 <Item/>
                 <Item/>
                 <Item/>
                 <Item/>
                 <Item/>
                 <Item/>
                 <Item/>
                 <Item/>
               </div>
               <div className='flex justify-center mt-6'>
                  <a className="bg-white font-semibold my-3 px-6 py-2 rounded-full shadow-md dark:bg-gray-800 dark:text-white">Load more...</a>
               </div>
          </div>
        </div>
      </div>

)

export default Groups
