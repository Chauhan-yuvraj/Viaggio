import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import "aos/dist/aos.css";
import AOS from 'aos';
import girl from '../../assets/girl.png';
import girl1 from '../../assets/girl1.png';
import girl3 from '../../assets/girl3.png';
import DiscountCom from '../Discount/DiscountCom';
import Company from '../CompanyLogo/Company';

const Home = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className="bg-[#fde047]">
            <div className="w-full h-screen flex justify-center items-center font-inter">
                <div className="w-[90%] h-[80%] bg-[#e9ecef] rounded-3xl hover:drop-shadow-[20px_20px_6px_rgba(0,0,0,0.25)] duration-150 hover:scale-[1.005] shadow-xl">
                    <div className="flex justify-center items-center h-full">
                        <div className="flex h-full xl:w-full flex-col  lg:flex lg:flex-row">
                            <div className="font-inter flex flex-col justify-center lg:items-baseline lg:p-20 items-center gap-6 mt-5 p-2 xl:w-[80%]">
                                <div className="font-bold text-blue-900 text-2xl">SUMMER2024</div>
                                <div className="text-3xl font-extrabold text-black xl:text-5xl">NEW COLLECTION</div>
                                <div className="text-xl justify-center text-center lg:text-justify text-gray-600">We know how large objects will act, but things on a small scale.</div>
                                <div>
                                    <NavLink to="/product">
                                        <input type="button" value="Explore" className="py-2 px-4 border-gray-600 text-gray-600 border-2 rounded-3xl hover:text-black hover:border-gray-800 duration-150 cursor-pointer" />
                                    </NavLink>
                                </div>
                            </div>
                            <div className="flex h-full justify-center lg:h-full lg:w-full">
                                <div className="w-52 h-52 sm:w-72 sm:h-72 md:h-96 md:w-96 bg-[#f8ff78] rounded-full absolute mt-[2%] -z lg:mt-[5%] lg:mr-[5%] xl:w-[30rem] xl:h-[30rem] xl:mt-[1%] z-10"></div>
                                <img src={girl} alt="excited girl" className="sm:w-[18rem] md:w- lg:scale-[1.1] xl:scale-1 xl:w-[100%] xl:mt-0 lg:w-full lg:mb-8 z-20" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div data-aos="fade-down" data-aos-anchor-placement="top-center">
                <Company />
            </div>

            <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 lg:mx-20 xl:mt-32 mx-12 mt-20 justify-center items-center font-inter">
                <div className="flex justify-center" data-aos="fade-up" data-aos-anchor-placement="top-center">
                    <div className="flex gap-2 ">
                        <img src={girl1} alt="girl1" className="w-36 sm:w-44 md:w-64 lg:w-44 xl:w-56 hover:scale-[1.005] duration-150 hover:shadow-[65px_65px_60px_-15px_rgba(0,0,0,0.3)]" />
                        <img src={girl3} alt="girl2" className="w-36 sm:w-44 md:w-64 lg:w-44 xl:w-56 hover:scale-[1.005] duration-150 hover:shadow-[65px_65px_60px_-15px_rgba(0,0,0,0.3)]" />
                    </div>
                </div>
                <div className="flex flex-col" data-aos="fade-up" data-aos-anchor-placement="top-center">
                    <div className="font-inter text-[#ffffff] mb-10 font-bold text-xl sm:text-2xl">Feature product</div>
                    <div className="font-inter text-4xl font-extrabold mb-5 sm:text-5xl">We love what we do</div>
                    <div className="text-gray-500 text-wrap text-sm mb-5">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics. Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </div>
                    <div className=" text-gray-500 text-wrap">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics. Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </div>
                </div>
            </div>
            <div className="md:w-fit m-auto" data-aos="zoom-in" data-aos-anchor-placement="top-center">
                <DiscountCom />
            </div>
        </div>
    );
};

export default Home;
