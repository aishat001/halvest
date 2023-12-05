import React, { useState } from 'react'
import { Dashboard, Notifications, Opportunity, Porfolio, Support, Wallet } from '../SvgComponent'
import { Link, useLocation } from 'react-router-dom'
import Banner from '../Banner';

const Menu = () => {
    const [selected, setSelected] = useState(0);
    const [showMore, setShowMore] = useState(false);
    const location = useLocation();
    const path = location.pathname;

    const toggleMore = () => {
        setShowMore(!showMore);
    };

    const visibleMenuItems = showMore ? menuList : menuList.slice(0, 5);


    return (
        <div className=' flex flex-col px-[16px] lg:pt-[40px] gap-4 overflow-y-auto pb-[30px]'>
            {visibleMenuItems.map((item, index) => (
                <Link to={`${item.title === 'dashboard' ? '/' : item.title === 'my portfolio' ? 'portfolio' : item.title}`} onClick={() => setSelected(index)}>
                    <div className={`flex gap-[12px] ${path === item.path ? 'bg-[#E4F9FC]' : ''} px-[12px] py-[8px] rounded-[6px]`}>
                        <item.icon fill={path === item.path ? '#159AA8' : '#344054'} />
                        <p className={`${path === item.path ? 'text-[#159AA8]' : 'text-[#344054]'} font-[600] capitalize`}>{item.title}</p>
                    </div>
                </Link>
            ))}
            {menuList.length > 5 && (
                <button
                    onClick={toggleMore}
                    className={`flex gap-[12px] ${showMore ? 'border-[#159AA8]' : 'border-[#344054]'}  items-center px-[12px] py-[px]`}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="6" viewBox="0 0 20 6" fill="none">
                        <path d="M19 3C19 2.17157 18.3284 1.5 17.5 1.5C16.6716 1.5 16 2.17157 16 3C16 3.82843 16.6716 4.5 17.5 4.5C18.3284 4.5 19 3.82843 19 3Z" stroke="#344054" stroke-width="1.5" />
                        <path d="M11.5 3C11.5 2.17157 10.8284 1.5 10 1.5C9.17157 1.5 8.5 2.17157 8.5 3C8.5 3.82843 9.17157 4.5 10 4.5C10.8284 4.5 11.5 3.82843 11.5 3Z" stroke="#344054" stroke-width="1.5" />
                        <path d="M4 3C4 2.17157 3.32843 1.5 2.5 1.5C1.67157 1.5 1 2.17157 1 3C1 3.82843 1.67157 4.5 2.5 4.5C3.32843 4.5 4 3.82843 4 3Z" stroke="#344054" stroke-width="1.5" />
                    </svg>
                    <p className={`${showMore ? 'text-[#159AA8]' : 'text-[#344054]'} font-[600] capitalize`}> {showMore ? 'Hide' : 'More'}</p>
                </button>
            )}

            <Banner/>
            <hr className='w-full my-1'/>


            <div className='flex flex-row  justify-between items-center mt-2'>
                <div className='w-[40px] h-[40px] rounded-[100%] border border-[#00000014] bg-[#F2F4F7] justify-between items-center'>
                    <p className='font-[600] text-[#667085] text-center h-full w-full flex justify-center items-center'>AF</p>
                </div>

                <div className='ml-[12px] text-[13px]'>
                    <p className='text-[#344054] font-[600]'>Ahmed Fatai</p>
                    <p>Ahmed@gmail.com</p>
                </div>


                <img src='/logout.svg' alt='logout'  className='ml-auto'/>
            </div>
        </div>
    )
}

export default Menu



export const menuList = [
    {
        title: 'dashboard',
        path: '/',
        icon: Dashboard
    },
    {
        title: 'my portfolio',
        path: '/portfolio',
        icon: Porfolio
    },
    {
        title: 'opportunities',
        path: '/opportunities',
        icon: Opportunity
    },
    {
        title: 'wallet',
        path: '/wallet',
        icon: Wallet
    },
    {
        title: 'notifications',
        path: '/notifications',
        icon: Notifications
    },
    {
        title: 'support',
        path: '/support',
        icon: Support
    },
]