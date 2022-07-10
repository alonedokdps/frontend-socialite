/* eslint-disable max-len */
/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react'

import { _GROUP } from '@assets'
import { IMAGE_GROUP } from '@assets'
import { AVATAR } from '@assets'
import { Wrapper } from './styled'

const PAGE_DETAIL = () => (

      <div className="basis-4/5 block" style={{background:'white'}} >
        <div className="p-4 block ">
          <div className="profile user-profile">
              <div className="profiles_banner">
                <img src={_GROUP} alt="profile_cover"/>
              </div>
              <div className='flex' style={{marginTop:'0rem', padding:'1rem'}}>
                 <div className="page_avatar">
                     <div className="page_avatar_holder">
                        <img src={IMAGE_GROUP} alt="profile_cover"/>
                     </div>
                 </div>
                 <div className="py-5" style={{flex: '1 1 0%'}}>
                   <h1 className="font-bold text-2xl"> Graphic Design </h1>
                   <p> Public group ·  12 members</p>
                 </div>
                 <div className="flex items-center space-x-4">
                      <div className="flex items-center -space-x-4">
                           <img  src ={AVATAR} className="w-10 h-10 rounded-full border-2 border-white" />
                           <img  src ={IMAGE_GROUP} className="w-10 h-10 rounded-full border-2 border-white" />
                           <img  src ={AVATAR} className="w-10 h-10 rounded-full border-2 border-white" />
                           <img  src ={IMAGE_GROUP} className="w-10 h-10 rounded-full border-2 border-white" />
                           <img  src ={AVATAR} className="w-10 h-10 rounded-full border-2 border-white" />
                           <img  src ={IMAGE_GROUP} className="w-10 h-10 rounded-full border-2 border-white" />
                           <div className="w-10 h-10 rounded-full flex justify-center items-center bg-red-100 text-red-500 font-semibold">12+</div>
                      </div>
                      <a href="#" className="flex items-center justify-center h-9 px-5 rounded-md bg-blue-600 text-white  space-x-1.5"> <span>Flow</span></a>
                 </div>
              </div>
               <nav className="responsive-nav border-t -mb-0.5 lg:pl-2">
                  <ul className="flex flex-wrap font-bold py-5 " >
                    <li className="active">
                       <a href="#"className="px-6">Home</a>
                    </li>
                    <li className="active">
                       <a href="#" className="px-6">About</a>
                    </li>
                    <li className="active">
                       <a href="#" className="px-6">Photo</a>
                    </li>
                    <li className="active">
                       <a href="#" className="px-6">Reviews</a>
                    </li>
                    <li className="active">
                       <a href="#" className="px-6">Discussion</a>
                    </li>
                    <li className="active">
                       <a href="#" className="px-6">Videos</a>
                    </li>
                  </ul></nav>
          </div>
            <div className="mcontainer ">
              
            </div>
				</div>
      </div>

)

export default PAGE_DETAIL
