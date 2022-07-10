/* eslint-disable max-len */
/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react'

import { IMAGE_PHOTO } from '@assets'

const Image = () => (

            <div >
               <div className="bg-green-400 max-w-full lg:h-44 h-36 rounded-lg relative overflow-hidden shadow uk-transition-toggle  ">
                  <img src={IMAGE_PHOTO} className="w-full h-full absolute object-cover inset-0 img-photo"/>
                  <div className="absolute bottom-0 w-full p-3 text-white uk-transition-slide-bottom-small img-photo-hover">
                      <div className='text-base'> Image description </div>
                      <div className='flex justify-between text-xs'>
                          <a href='#'>Like</a>
                          <a href='#'>Comment</a>
                          <a href='#'>Share</a>
                      </div>
                  </div>
               </div>
            </div>       
)

export default Image
