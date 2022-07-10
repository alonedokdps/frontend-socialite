/* eslint-disable max-len */
/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react'
import {useHistory} from 'react-router-dom';

import { AVATAR } from '@assets'

const CARD = () => (

  <li className=' mr-2'>
  <div className="card profile user-profile ">
     <div >
           <img src={AVATAR} className="h-44 object-cover rounded-t-md shadow-sm w-full"/>
     </div>
     <div className="p-4">
       <h4 className="text-base font-semibold mb-1"> James Lewis </h4>
       <p className="font-medium text-sm">483K Following</p>
     </div>
  </div>
</li>
                  
)
 
const ITEM = () => (
   <div className="flex items-center space-x-4 rounded-md -mx-2 p-2 hover:bg-gray-50">
      <a className='w-12 h-12 flex-shrink-0 overflow-hidden rounded-full relative'>
        <img src={AVATAR} className="absolute w-full h-full inset-0 " />
      </a>
      <div className="flex-1">
         <a className="text-base font-semibold capitalize"> Stella Johnson </a>
         <div className="text-sm text-gray-500 mt-0.5">84K Following</div>
      </div>
      <a href='' className="flex items-center justify-center h-8 px-3 rounded-md text-sm border font-semibold">Follow</a>
   </div>
   )


export {CARD, ITEM}
