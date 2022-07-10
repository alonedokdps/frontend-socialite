/* eslint-disable max-len */
/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react'

import ITEM_JOB from './item_job'
const JOBS = () => (
      <div className=" lg:flex lg:space-x-12">
         <div className="lg:w-3/4">
            <div className=" md:mb-4 mb-3">
               <h2 className="text-2xl font-semibold">Jobs</h2>
               <nav className="responsive-nav border-b md:m-0 -mx-4">
                   <ul className="lst-nav flex flex-row overflow-x-auto font-bold py-5" >
                    <li className="active">
                       <a href="#" className="lg:px-2">Suggestions</a>
                    </li>
                    <li className="active">
                       <a href="#" className="lg:px-2">Newest</a>
                    </li>
                    <li className="active">
                       <a href="#" className="lg:px-2">My jobs</a>
                    </li>
                  </ul>
               </nav>
            </div>
            <div className=" profile user-profile card divide-y divide-gray-100 sm:m-0 -mx-4 ">
                 <ITEM_JOB/> <ITEM_JOB/> <ITEM_JOB/> <ITEM_JOB/>
            </div>
         </div>
         <div className="lg:w-1/4 w-full flex-shrink-0 ">
            <div className="lg:mt-0 mt-6 uk-sticky fixed" >
               <h2 className="text-xl font-semibold mb-2"> Recently Posted </h2>
               <ul className="-space-y-2">
                 <li>
                    <a href="#" className="hover:bg-gray-100 rounded-md p-3 -mx-3 block">
                        <h3 className="font-medium line-clamp-2">Technical Event Support and Producer Specialist</h3>
                        <div className="flex font-medium items-center mt-1 space-x-1.5 text-xs">
                           <div>Full time</div>
                           <div className="pb-1">.</div>
                           <div className="text-blue-500">100-200/day</div>
                        </div>
                    </a>
                 </li>
                 <li>
                    <a href="#" className="hover:bg-gray-100 rounded-md p-3 -mx-3 block">
                        <h3 className="font-medium line-clamp-2">Technical Event Support and Producer Specialist</h3>
                        <div className="flex font-medium items-center mt-1 space-x-1.5 text-xs">
                           <div>Full time</div>
                           <div className="pb-1">.</div>
                           <div className="text-blue-500">100-200/day</div>
                        </div>
                    </a>
                 </li>
                 <li>
                    <a href="#" className="hover:bg-gray-100 rounded-md p-3 -mx-3 block">
                        <h3 className="font-medium line-clamp-2">Technical Event Support and Producer Specialist</h3>
                        <div className="flex font-medium items-center mt-1 space-x-1.5 text-xs">
                           <div>Full time</div>
                           <div className="pb-1">.</div>
                           <div className="text-blue-500">100-200/day</div>
                        </div>
                    </a>
                 </li>
               </ul>
               <h4 className="text-lg font-semibold mb-3">Tags</h4>
               <div className="flex flex-wrap gap-2">
                  <a href="#" className="bg-gray-100 py-1.5 px-4 rounded-full">Computers</a>
                  <a href="#" className="bg-gray-100 py-1.5 px-4 rounded-full">Business</a>
                  <a href="#" className="bg-gray-100 py-1.5 px-4 rounded-full">News</a>
                  <a href="#" className="bg-gray-100 py-1.5 px-4 rounded-full">Architecher</a>
                  <a href="#" className="bg-gray-100 py-1.5 px-4 rounded-full">Technolgy</a>
                  <a href="#" className="bg-gray-100 py-1.5 px-4 rounded-full">Music</a>
               </div>
            </div>
         </div>
      </div>
)

export default JOBS
