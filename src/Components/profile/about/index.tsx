import React from 'react'

const AboutUser = () => {
  return (
    <div className='w-full lg:mx-[10px] rounded-lg bg-white shadow-lg border-[1px] border-[#ccc] border-solid p-5 mb-5'>
        <h4 className='text-lg font-semibold'>About</h4>
        <ul className='text-gray-600 space-y-3 mt-3'>
            <li className='flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 bg-[#e5e7eb] rounded-full p-1 mr-3" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
                Live in <strong>&nbsp;Cario, Egypt</strong>
            </li>
            <li className='flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 bg-[#e5e7eb] rounded-full p-1 mr-3" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
                </svg>
                From <strong>&nbsp;Aden, Yemen</strong>
            </li>
            <li className='flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 bg-[#e5e7eb] rounded-full p-1 mr-3" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
                From <strong>&nbsp;Relationship</strong>
            </li>
            <li className='flex items-center'>
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 bg-[#e5e7eb] rounded-full p-1 mr-3" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 01.808 6.808c5.076-5.077 13.308-5.077 18.384 0a1 1 0 01-1.414 1.414zM14.95 11.05a7 7 0 00-9.9 0 1 1 0 01-1.414-1.414 9 9 0 0112.728 0 1 1 0 01-1.414 1.414zM12.12 13.88a3 3 0 00-4.242 0 1 1 0 01-1.415-1.415 5 5 0 017.072 0 1 1 0 01-1.415 1.415zM9 16a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
                Flowwed By <strong>&nbsp;3,240 Peole</strong>
            </li>
        </ul>
        <div className='grid grid-cols-3 mt-4 gap-3'>
            <img src="http://demo.foxthemes.net/socialitev2.2/assets/images/avatars/avatar-lg-2.jpg" className='rounded-lg object-cover col-span-full' alt="" />
            <img src="http://demo.foxthemes.net/socialitev2.2/assets/images/avatars/avatar-lg-2.jpg" className='rounded-lg' alt="" />
            <img src="http://demo.foxthemes.net/socialitev2.2/assets/images/avatars/avatar-lg-2.jpg" className='rounded-lg' alt="" />
            <img src="http://demo.foxthemes.net/socialitev2.2/assets/images/avatars/avatar-lg-2.jpg" className='rounded-lg' alt="" />
        </div>
        <a href='#' className='block text-center py-3 mt-[20px] text-[#666] bg-[#f0f2f5] rounded-lg font-semibold'>Edit</a>
    </div>
  )
}

export default AboutUser