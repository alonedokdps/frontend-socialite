/* eslint-disable max-len */
/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react'
import { IMAGE_VIDEO } from '@assets'
import { PLAY_ICON } from '@assets'

const Watch = () => (
       <div>
        <a href='#' className="w-full h-36 overflow-hidden rounded-lg relative block">
          <img src={IMAGE_VIDEO} className="w-full h-full absolute inset-0 object-cover" />
          <span className="absolute bg-black bg-opacity-60 bottom-1 font-semibold px-1.5 py-0.5 right-1 rounded text-white text-xs">7:01</span>
          <img src={PLAY_ICON} className="w-12 h-12 relative top-1/3" style={{left :'40%'}}></img>
        </a>
       </div>
                  
)

export default Watch
