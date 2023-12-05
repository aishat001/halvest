import React, { useState } from 'react';
import { Outlet } from 'react-router';
import Menu from './Menu';
import logo from '../../assets/logo.svg'
import notification from '../../assets/notification.svg'
import menu from '../../assets/menu.svg'
import Search from '../Input';
import ToggleSwitch from '../Switch';
import { Dashboard } from '../SvgComponent';
import Breadcrumbs from '../BreadCrumbs';

const drawerWidth = 240;

const Drawer = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <div className="flex h-screen">
            {/* Mobile Drawer */}
            <div className={`lg:hidden ${mobileOpen ? 'block' : 'hidden'} z-[100]`}>
             
                <div className="fixed  inset-0 z-100  shadow-lg text-white flex-1 flex flex-col max-w-xs w-full pb-4 bg-white">
                    <div className="absolute top-2 right-0 mr-1 p-1">
                        <button
                            className="flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
                            onClick={() => setMobileOpen(false)}
                        >
                            <svg
                                className="h-6 w-6"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                    fill='white'
                                ></path>
                            </svg>
                        </button>
                    </div>
                    {/* Mobile Drawer Content */}
                    <div className="mt-5 pb-5">
                        <div className='px-[24px] pt-[15px] pb-[30px]'>
                        <img src={logo} alt='logo' className='w-[120px] h-[20px]' />
                        </div>
                        <Menu />
                    </div>
                </div>
            </div>

            {/* Desktop Drawer */}
            <div className="fixed hidden h-[100vh] lg:flex lg:flex-shrink-0">
                {/* Desktop Drawer Content */}
                <div className="flex flex-col w-64 border">
                    <div className='py-[37px] px-[24px] border-b flex justify-start items-center'><img src={logo} alt='logo' className='w-[120px] h-[20px]' /></div>
                    <Menu />
                </div>
            </div>

            {/* Main Content */}
            <div className={`lg:ml-64 flex-1 overflow-overflow-y-scroll focus:outline-none`}>

            {/* <header className='py-[24px] px-[10px] md:px-[40px] border-b bg-[#FCFCFC] flex lg:flex-row w-[100%] '> */}

            <header className='fixed top-0 left-0 lg:left-64   z-50 py-[24px] px-[10px] md:px-[40px] border-b bg-[#FCFCFC] flex lg:flex-row w-[100%] lg:w-[calc(100vw-16rem)]'>
                    <div className={`lg:hidden px-2`} onClick={() => setMobileOpen(true)}>
                        <img src={menu} alt='menu' className='w-[40px] h-[40px]' /></div>
                    <div className='flex flex-row items-center w-[100%]'>
                        <Search className={'w-[500px]'} filter/>
                        <ToggleSwitch />
                        <div className='relative ml-[46px]'>
                            <img src={notification} alt='notification' />
                            <div className='w-3 h-3 rounded-[100%] bg-[white] absolute top-[1px]  right-[0px] flex justify-center items-center'>
                                <div className='w-2 h-2 rounded-[100%] bg-[red]'>

                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <div className='mt-[68px] px-[32px] overflow-y-auto pt-[50px] pb-[100px]'>
                    <div>
                        <Breadcrumbs/>

                    </div>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Drawer;
