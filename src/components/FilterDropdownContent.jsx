import React, { useState } from 'react';
import close from '../assets/close.svg';
import { Select } from './Input';
import Chip from './Chip';

const FilterDropdownContent = ({ selectedFilter, setSelectedFilter, onclose }) => {
    const handleCategoryChange = (category) => {
        const updatedCategories = [...selectedFilter.category];
        if (updatedCategories.includes(category)) {
            updatedCategories.splice(updatedCategories.indexOf(category), 1);
        } else {
            updatedCategories.push(category);
        }
        setSelectedFilter({ ...selectedFilter, category: updatedCategories });
    };

    
    const handleDurationChange = (duration) => {
        const updatedDuration = [...selectedFilter.duration];
        if (updatedDuration.includes(duration)) {
            updatedDuration.splice(updatedDuration.indexOf(duration), 1);
        } else {
            updatedDuration.push(duration);
        }
        setSelectedFilter({ ...selectedFilter, duration: updatedDuration });
    };

    const handleInvestmentTypeChange = (investmentType) => {
        const updatedInvestmentTypes = [...selectedFilter.investmentType];
        if (updatedInvestmentTypes.includes(investmentType)) {
            updatedInvestmentTypes.splice(updatedInvestmentTypes.indexOf(investmentType), 1);
        } else {
            updatedInvestmentTypes.push(investmentType);
        }
        setSelectedFilter({ ...selectedFilter, investmentType: updatedInvestmentTypes });
    };

    const handleChange = (event) => {
        setSelectedFilter({ ...selectedFilter, investmentAvailability: event.target.value });
    };



    return (
        <div className='flex flex-col gap-[24px] py-[24px]'>
            <header className='relative px-[24px]'>
                <h3 className='text-[20px] font-[600] text-[#101828]'>Filters</h3>
                <p className='text-[16px] font-[400] text-[#475467]'>Apply filters to investments</p>
                <img src={close} alt='close filter' onClick={onclose} className='absolute top-[0] right-[26px]' />
            </header>

            <Select onChange={handleChange} />

            <div className='px-[24px]'>
                <label className='block text-[#344054] text-[14px] font-[500]'>Investment availability</label>
                <div className='mt-2'>
                    <div className='flex items-center'>
                        <input
                            type='radio'
                            id='open'
                            name='open'
                            value='open'
                            checked={selectedFilter.investmentAvailability === 'open'}
                            onChange={handleChange}
                            className='focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300'
                        />
                        <label htmlFor='open' className='ml-2 block text-sm text-gray-800'>
                            Open
                        </label>
                    </div>
                    <div className='flex items-center mt-2'>
                        <input
                            type='radio'
                            id='paid out'
                            name='paid out'
                            value='paid out'
                            checked={selectedFilter.investmentAvailability === 'paid out'}
                            onChange={handleChange}
                            className='focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300'
                        />
                        <label htmlFor='paid out' className='ml-2 block text-sm text-gray-800'>
                            Paid Out
                        </label>
                    </div>
                </div>
            </div>

            <div className='px-[24px]'>
                <label className='block text-[#344054] text-[14px] font-[500]'>Category</label>
                <div className='space-y-2 mt-[16px]'>
                    {['SME Investing', 'Real Estate', 'Startup Investing'].map((category) => (
                        <label key={category} className='flex items-center'>
                            <input
                                type='checkbox'
                                checked={selectedFilter.category.includes(category)}
                                onChange={() => handleCategoryChange(category)}
                                className='mr-2'
                            />
                           {category}
                        </label>
                    ))}
                </div>
            </div>

            <div className='px-[24px]'>
                <label className='block text-[#344054] text-[14px] font-[500]'>Investment Type</label>
                <div className='space-y-2 mt-[16px]'>
                    {['Commodities', 'Real Estate', 'Transportation', 'Agriculture', 'Equity', 'Fixed Deposit'].map((type) => (
                        <label key={type} className='flex items-center'>
                            <input
                                type='checkbox'
                                checked={selectedFilter.investmentType.includes(type)}
                                onChange={() => handleInvestmentTypeChange(type)}
                                className='mr-2'
                            />
                            <Chip text={type} />
                        </label>
                    ))}
                </div>
            </div>

            <div className='px-[24px]'>
                <label className='block text-[#344054] text-[14px] font-[500]'>Duration</label>
                <div className='space-y-2 mt-[16px]'>
                    {['1-3 years', '4-7 years', '8 years above'].map((duration) => (
                        <label key={duration} className='flex items-center'>
                            <input
                                type='checkbox'
                                checked={selectedFilter.duration.includes(duration)}
                                onChange={() => handleDurationChange(duration)}
                                className='mr-2'
                            />
                            {duration}
                        </label>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FilterDropdownContent;
