import React from 'react'
import amzon from '../../assets/amzon.png'
import Flipkart from '../../assets/Flipkart.png'
import Messo from '../../assets/Messo.png'
const Company = () => {
  return (
    <>
      <div className="w-full ">
        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-around items-center">
            <div className="w-52">
                <img src={amzon} alt="amzon" className=' grayscale hover:grayscale-0 hover:scale-125 cursor-pointer ease-in-out duration-150 hover:drop-shadow-[20px_20px_6px_rgba(0,0,0,0.25)] ' />
            </div>
            <div className="w-52">
                <img src={Flipkart} alt="Flipkart" className=' grayscale hover:grayscale-0 hover:scale-125 cursor-pointer   ease-in-out duration-150 hover:drop-shadow-[20px_20px_6px_rgba(0,0,0,0.25)]' />
            </div>
            <div className="w-52">
                <img src={Messo} alt="Messo" className='w-20 mx-16 grayscale hover:grayscale-0 hover:scale-125 cursor-pointer ease-in-out duration-150 hover:drop-shadow-[20px_20px_6px_rgba(0,0,0,0.25)]  ' />
            </div>
         
        </div>
      </div>
    </>
  )
}

export default Company
