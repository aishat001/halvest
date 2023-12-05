// Breadcrumbs.js
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Dashboard } from './SvgComponent';
import dashboard from '../assets/dashboard.svg';
import { menuList } from './Drawer/Menu';

const Breadcrumbs = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    return (
        <div className="flex items-center text-gray-500 mb-4">
            {pathnames.length > 0 &&
                pathnames.map((name, index) => {
                    const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                    const isLast = index === pathnames.length - 1;
                    const isDashboard = index === 0 && name.toLowerCase() === 'dashboard';

                    const menuItem = menuList.find(item => item.path === routeTo);

                    return (
                        <div key={name} className="flex items-center">
                            {isDashboard ? (
                                <span></span>
                            ) : (
                                <div className='flex flex-row gap-2 items-center mr-2'>
                                    <Link to={'/'} className='p-3 pl-0 '>
                                        <img src={dashboard} alt='dashboard' loading='lazy' className='w-5 h-5' />
                                    </Link>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M6 12L10 8L6 4" stroke="#D0D5DD" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <Link to={routeTo} className="capitalize">
                                        {menuItem ? menuItem.title : name}
                                    </Link>
                                </div>
                            )}
                            {isLast && <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M6 12L10 8L6 4" stroke="#D0D5DD" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>}
                            
                        </div>
                    );
                })}

        </div>
    );
};

export default Breadcrumbs;
