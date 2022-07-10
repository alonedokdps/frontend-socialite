/* eslint-disable max-len */
/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react'

import { AVATAR } from '@assets'

const Card = () => (

     
                  <div  className='card p-2'>
                        <a href="#">
                          <img src={AVATAR} className='h-36 object-cover rounded-md shadow-sm w-full'/>
                        </a>
                        <div className="pt-3 px-1">
                          <a href="#" className='text-base font-semibold mb-0.5'>James Lewis </a>
                          <p className='font-medium text-sm'>843K Following </p>
                          <button className="bg-blue-100 w-full flex font-semibold h-8 items-center justify-center mt-3 px-3 rounded-md text-blue-600 text-sm mb-1 fol">Following</button>
                        </div>
                  </div>
                  
)

export default Card
