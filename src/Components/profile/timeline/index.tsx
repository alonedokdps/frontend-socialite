/* eslint-disable max-len */
/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react'
import CreatePost from '@components/profile/CreatePost'
import PostList from '@components/profile/Postlist'
import About from '@components/profile/about'

const TimeLine = () => (

      <div className="md:flex md:space-x-6 lg:mx-16 uk-active" >
         <div className="space-y-5 flex-shrink-0 md:w-7/12">
              <CreatePost/>
              <PostList/>
         </div>
         <div className="w-full space-y-6">
              <About/>
         </div>
      </div>

)

export default TimeLine
