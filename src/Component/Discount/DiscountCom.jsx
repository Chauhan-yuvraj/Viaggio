import React from 'react'
import bag from '../../assets/bagFront.png'
import { NavLink } from 'react-router-dom'

const DiscountCom = () => {
  return (
    <div>
      <div className=" sm:h-fit flex justify-center  mt-52  px-10 sm:mt-96 xl:mt-56 xl:mb-0 ">
                <div className="p-20 sm:p-10 bg-[#e9ecef] rounded-3xl mb-20  hover:drop-shadow-[20px_20px_6px_rgba(0,0,0,0.25)] duration-150 hover:scale-[1.005] w-[90%]  md:w-full">
                    <div className="flex justify-center items-center">
                        <div className="flex flex-col-reverse lg:flex-row lg:h-56 lg:items-center text-black">
                            <div className=" font-inter flex flex-col justify-center gap-6">
                                <div className="font-bold text-black text-2xl sm:text-lg md:text-xl ">SUMMER 2024</div>
                                <div className="text-5xl font-extrabold sm:text-2xl md:text-4xl">-30% Discount</div>
                                <div className="text-xl sm:text-sm md:text-xl">We know how large objects will act, but things on a small scale.</div>
                                <div className="">
                                    <NavLink to='/product'>
                                    <input type="button" value="Get Now" className="py-2 px-4 border-gray-200 border-2 rounded-3xl hover:border-black cursor-pointer hover:bg-white hover:text-black  duration-300 active:text-white active:border-black" />
                                    </NavLink>
                                </div>
                            </div>
                            <div className="">
                                <img src={bag} alt="bag" className='sm:w-auto  drop-shadow-[20px_20px_6px_rgba(0,0,0,0.25)] duration-150'   />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default DiscountCom
