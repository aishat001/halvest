import React, { useState } from 'react';
import searchIcon from '../assets/search.svg'

const Search = ({filter, className}) => {
    return (
        <div className={`hidden md:flex relative flex-row  items-center bg-white rounded-[8px] py-[10px] border border-[#EAECF0] ${className}`} style={{ boxShadow: ' 0px 1px 2px 0px rgba(16, 24, 40, 0.05)' }}>
            <div className="  pl-[16px] flex items-center pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M17.5 17.5L14.5834 14.5833M16.6667 9.58333C16.6667 13.4954 13.4954 16.6667 9.58333 16.6667C5.67132 16.6667 2.5 13.4954 2.5 9.58333C2.5 5.67132 5.67132 2.5 9.58333 2.5C13.4954 2.5 16.6667 5.67132 16.6667 9.58333Z" stroke="#667085" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>
            <input
                className="w-[100%]  pl-[10px] pr-3 leading-5 text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 sm:text-sm border-none"
                type="text"
                placeholder="Search..."
                aria-label="Search"
            />
            {
                filter && (
                    <>
                        <div className="  px-[16px] flex items-center pointer-events-none">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_24_18)">
                                    <path d="M6.05998 6C6.21672 5.55444 6.52608 5.17874 6.93328 4.93942C7.34048 4.7001 7.81924 4.61262 8.28476 4.69247C8.75028 4.77232 9.17252 5.01435 9.4767 5.37568C9.78087 5.73702 9.94735 6.19435 9.94665 6.66667C9.94665 8 7.94665 8.66667 7.94665 8.66667M7.99998 11.3333H8.00665M14.6666 8C14.6666 11.6819 11.6819 14.6667 7.99998 14.6667C4.31808 14.6667 1.33331 11.6819 1.33331 8C1.33331 4.3181 4.31808 1.33333 7.99998 1.33333C11.6819 1.33333 14.6666 4.3181 14.6666 8Z" stroke="#98A2B3" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_24_18">
                                        <rect width="16" height="16" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>

                        </div>
                        <p className="  mr-[16px] border px-1 ">
                            ⌘/



                        </p>
                    </>
                )
            }

        </div>
    );
};

export default Search;




export const Select = () => {
  const [selectedSavedFilter, setSelectedSavedFilter] = useState('Select saved filter');

  const handleChange = (event) => {
    setSelectedSavedFilter(event.target.value);
  };

  return (
    <div className=" w-full relative px-[24px]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        className="absolute left-8 top-1/2 transform -translate-y-1/2 text-gray-500"
      >
        <path
          d="M5 10H15M2.5 5H17.5M7.5 15H12.5"
          stroke="#667085"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <select
        value={selectedSavedFilter}
        onChange={handleChange}
        className="border p-2 rounded pl-8 w-full"
      >
        <option value="" >
        Select saved filter
        </option>
        <option value={10}>option 1</option>
        <option value={20}>option 2</option>
      </select>
    </div>
  );
};



