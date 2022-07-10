/* eslint-disable max-len */
/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react'

import { AVATAR } from '@assets'
import {_GROUP} from '@assets'
import {TRAVEL} from '@assets'
import { IMAGE_GROUP } from '@assets'

const ITEM_JOB = () => (

   <div className="flex items-start flex-wrap p-7 sm:space-x-6 border-b">
      <a href='#' className='w-14 h-14 relative mt-1 order-1'>
         <img src={IMAGE_GROUP} className="rounded-md" />
      </a>
      <div className="flex-1 sm:order-2">
          <h4 className="text-base text-gray-500 font-medium mb-2">Phaseout </h4>
          <a href="#">
            <h3 className="text-xl font-medium mb-4"> Technical Event Support Specialist </h3>
          </a>
          <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
              sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
              wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper ..
          </p>
          <div className="job-tags mt-5 mb-2 space-x-2.5 space-y-2">
            <a href="" className="border px-3 py-1.5 rounded-md text-sm inline-block">Wordpress</a>
            <a href="" className="border px-3 py-1.5 rounded-md text-sm inline-block">Design</a>
            <a href="" className="border px-3 py-1.5 rounded-md text-sm inline-block">Joomla</a>
          </div>
      </div>
  </div>
                  
)



export default ITEM_JOB 
