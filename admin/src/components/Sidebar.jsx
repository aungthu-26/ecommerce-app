import React from 'react'
import { NavLink } from 'react-router-dom';
import AddIcon from '../assets/add_icon.png';
import OrderIcon from '../assets/order_icon.png';

const Sidebar = () => {
    return (
        <div className='w-[18%] min-h-screen border-r-2'>
            <div className='flex flex-col gap-4 pt-6 pl-[20%] text-[15px] '>
                <NavLink className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rouded-lg' to='/add'>
                    <img className='w-5 h-5' src={AddIcon} alt="add-icon" />
                    <p className='hidden md:block'>Add Items</p>
                </NavLink>
            </div>

            <div className='flex flex-col gap-4 pt-6 pl-[20%] text-[15px] '>
                <NavLink className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rouded-lg' to='/list'>
                    <img className='w-5 h-5' src={OrderIcon} alt="add-icon" />
                    <p className='hidden md:block'>List Items</p>
                </NavLink>
            </div>

            <div className='flex flex-col gap-4 pt-6 pl-[20%] text-[15px] '>
                <NavLink className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rouded-lg' to='/orders'>
                    <img className='w-5 h-5' src={OrderIcon} alt="add-icon" />
                    <p className='hidden md:block'>Orders</p>
                </NavLink>
            </div>
        </div>
    )
}

export default Sidebar