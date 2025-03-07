import React from 'react'
import { CiHome } from "react-icons/ci";
import { CiHashtag } from 'react-icons/ci';
import { CiBookmark } from 'react-icons/ci';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { CiUser } from 'react-icons/ci';
import { AiOutlineLogout } from 'react-icons/ai';
const LeftSideBar = () => {
  return (
   <div>
    <div>
      <img className='w-[30px]' src="https://img.freepik.com/premium-vector/twitter-new-x-logo-design-vector_1340851-70.jpg?semt=ais_hybrid" alt="" />
    </div>
   <div className='my-4'>
   
    <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 rounded-full hover:cursor-pointer'>
      <CiHome size={25}/>
      <div className='font-bold text-lg ml-2'>Home</div>
    </div>
    <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 rounded-full hover:cursor-pointer'>
      <CiHashtag size={25}/>
      <div className='font-bold text-lg ml-2'>Explore</div>
    </div>
    <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 rounded-full hover:cursor-pointer'>
      <IoIosNotificationsOutline size={25}/>
      <div className='font-bold text-lg ml-2'>Notification</div>
    </div>
    <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 rounded-full hover:cursor-pointer'>
      <CiBookmark size={25}/>
      <div className='font-bold text-lg ml-2'>Bookmark</div>
    </div>
    <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 rounded-full hover:cursor-pointer'>
      <AiOutlineLogout size={25}/>
      <div className='font-bold text-lg ml-2'>Logout</div>
    </div>
    <button className='border-none px-4 py-2 text-md bg-[#1D9BF0] rounded-full w-full text-white font-bold'>Post</button>
    </div>
   </div>
  )
}

export default LeftSideBar