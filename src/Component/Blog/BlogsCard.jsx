import React, { useState } from 'react'
import bag from '../../assets/boysbag1.png'
import BlogData from './BlogData'

const BlogsCard = () => {
  return (
    <>
      <div className="">
        {BlogData.map((blog, index) => (
          <div className=" border-1  border-black my-10" key={index}>
            {/* cards */}
            <div className="border-2 border-black flex flex-col md:flex-row p-6 gap-10 bg-[#fde047] rounded-xl">
              <div className=" border-2 shadow-md border-black md:border-none h-min">
                <img src={blog.blogImage} alt="boy and bag" className='md:border-1  hover:shadow-md hover:scale-[1.01]  duration-150 md:border-black xl:max-w-52 ' />
              </div>
              <div className="flex flex-col gap-8 justify-center">
                <div className=" font-Frank text-xl  font-extrabold sm:text-2xl md:text-3xl xl:text-5xl">{blog.BlogHeading}</div>
                <div className="font-Frank text-lg font-extrabold sm:text-xl xl:text-2xl "> {blog.BlogAuther} </div>
                <div className="text-sm font-Frank font-bolder ">{blog.Blogdec}</div>
                <div className="">
                  <a href= {blog.BlogReDirect}>
                  <input type="button" value="Read more" className='py-2 px-4 border-gray-100  text-black  border-2 rounded-3xl hover:text-black hover:border-gray-600 duration-150 cursor-pointer active:bg-black active:text-white' />
                </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default BlogsCard
