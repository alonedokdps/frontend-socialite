/* eslint-disable max-len */
/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react'
import { BrowserRouter, NavLink, Route, useHistory } from "react-router-dom";

import { PROFILE_COVER } from '@assets'
import { AVATAR } from '@assets'
import { Wrapper } from './styled'
import Friend from './friends'
import Photoes from './photoes'
import Pages from './pages'
import Groups from './groups'
import Videos from './video'
import TimeLine from './timeline'


const ProfileScreen = () => (

      <div className="basis-4/5 block " style={{background:'white'}} >
        <div className="p-4 block ">
          <div className="profile user-profile">
              <div className="profiles_banner">
                <img src={PROFILE_COVER} alt="profile_cover"/>
              </div>
              <div className='profiles_content'>
                 <div className="profile_avatar">
                     <div className="profile_avatar_holder">
                        <img src={AVATAR} alt="profile_cover"/>
                     </div>
                     <div className="user_status status_online"></div>
                 </div>
                 <div className="profile_info">
                    <h1>Jonny</h1>
                    <p> Everything ^.^ <a href="#">Edit</a></p>
                 </div>
              </div>
              <hr className='w-0 lg:w-full mt-[20px]'/>
              <div className="flex flex-col-reverse lg:flex-row justify-between">
                <nav className="responsive-nav pl-3">
                  <ul className="lst-nav flex flex-row overflow-x-auto font-bold py-5" >
                    <li className="active">
                    <NavLink to="/timeline" activeClassName="active" exact><a href="#"className="px-6">TimeLine</a></NavLink>
                    </li>
                    <li className="active">
                    <NavLink to="/friend" activeClassName="active" exact> <a href="#" className="px-6">Friend<span>1,271</span></a></NavLink>
                    </li>
                    <li className="active">
                    <NavLink to="/photo" activeClassName="active" exact> <a href="#" className="px-6">Photoes</a></NavLink>
                    </li>
                    <li className="active">
                    <NavLink to="/page" activeClassName="active" exact><a href="#" className="px-6">Pages</a></NavLink>
                    </li>
                    <li className="active">
                    <NavLink to="/group" activeClassName="active" exact><a href="#" className="px-6">Groups</a></NavLink>
                    </li>
                    <li className="active">
                    <NavLink to="/video" activeClassName="active" exact><a href="#" className="px-6">Videos</a></NavLink>
                    </li>
                  </ul></nav>
                  <div className='nav-button flex items-center justify-center mb-2 lg:pr-4 relative gap-2'>
                      <a className='flex items-center justify-center h-10 px-5 rounded-md bg-blue-600 text-white space-x-1.5 hover:text-white'>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className='block w-[110px]'>Add Your Story</span>
                      </a>
                      <a className='flex items-center justify-center h-10 w-10 rounded-md bg-gray-100'>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                          </svg>
                      </a>
                      <a className='flex items-center justify-center h-10 w-10 rounded-md bg-gray-100'>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                              </svg>
                      </a>
                  </div>
              </div>
          </div>
            <div className="mcontainer ">
            <Route path="/timeline" exact><TimeLine/></Route>
            <Route path="/friend" exact><Friend/></Route>
            <Route path="/photo" exact><Photoes/></Route>
            <Route path="/page" exact><Pages/></Route>
            <Route path="/group" exact><Groups/></Route>
            <Route path="/video" exact><Videos/></Route>
            </div>
				</div>
      </div>

)

export default ProfileScreen
