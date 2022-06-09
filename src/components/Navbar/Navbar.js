import React from 'react'
import { FaHome } from 'react-icons/fa';
import { FaSuitcase } from 'react-icons/fa';
import { BsFillPersonFill } from 'react-icons/bs';
import { IoMdCall } from 'react-icons/io';
import CustomLink from '../CustomLink/CustomLink';
import { Outlet } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className=''>
            <div className='max-w-xs mx-auto bg-secondary shadow-xl rounded-b-lg'>
                <div className='flex justify-between items-center text-accent p-4'>
                    <CustomLink to='/'>
                        <FaHome className='text-2xl'></FaHome>
                    </CustomLink>
                    <CustomLink to='/about'>
                        <BsFillPersonFill className='text-2xl'></BsFillPersonFill>
                    </CustomLink>
                    <CustomLink to='/portfolio'>
                        <FaSuitcase className='text-2xl'></FaSuitcase>
                    </CustomLink>
                    <CustomLink to='/contact'>
                        <IoMdCall className='text-2xl'></IoMdCall>
                    </CustomLink>
                </div>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    )
}

export default Navbar