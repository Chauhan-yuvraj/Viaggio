import React, { useEffect, useState } from 'react'
import BlogsCard from './BlogsCard'



const Blog = () => {

  return (
    <>
      <div className="">
        <div  className=" flex flex-col items-center font-Frank gap-5 h-[60svh] justify-center sticky top-20 -z-10  ">
          <div className="  font-extrabold text-8xl ">Insights</div>
          <div className=" font-bold text-4xl mx-10">Perspectives, opinions, and reflections from leaders</div>
        </div>
        <div className="flex flex-col mx-10 lg:mx-36 ">

          {/* blogs */}
          <div className="font-Frank text-5xl font-bold my-20">The state of product development</div>
          <div className="flex flex-col gap-10 my-20">
            <BlogsCard />
          </div>
        </div>
      </div>
    </>
  )
}

export default Blog
