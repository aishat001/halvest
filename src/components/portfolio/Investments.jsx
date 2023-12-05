import React, { useEffect, useState } from 'react'
import Tabs from '../Tabs'
import Search from '../Input'
import filter from '../../assets/filter.svg'
import Chip from '../Chip'
import Progress from '../Progress'
import Pagination from '../Pagination'
import FilterDropdownContent from '../FilterDropdownContent'
import { setInvestments } from '../../redux/store'
import { useDispatch, useSelector } from 'react-redux'


const Investments = () => {
    const [isopenFilter, setIsOpenFilter] = useState(false);
    const [page, setPage] = useState(0);
    const [filteredData, setFilteredData] = useState([]);
    const [tabIndex, setTabIndex] = useState(0);
    const [selectedFilter, setSelectedFilter] = useState({
        investmentAvailability: '',
        duration: [],
        category: [],
        investmentType: [],
    });
    const investments = useSelector((state) => state.investments);
    const dispatch = useDispatch();

    console.log(investments)
    useEffect(() => {
        const fetchInvestmentData = async () => {
            try {
                const response = await fetch('https://mocki.io/v1/c438ad2c-429a-4eaf-b1da-82831cde36df');
                const data = await response.json();
                console.log(data.investmentData);
                dispatch(setInvestments(data.investmentData));
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchInvestmentData();
    }, [dispatch]);


    let filteredInvestments;

    useEffect(() => {
        filteredInvestments =
            tabIndex === 0
                ? investments
                : tabIndex === 1
                    ? investments.filter((item) => item.status.toLowerCase() === 'open')
                    : investments.filter((item) => item.status.toLowerCase() === 'paid out');

        setFilteredData(filteredInvestments);



    }, [tabIndex, selectedFilter, investments]);


    const applyFilter = () => {
        const newfilteredData = investments.filter((item) => {
            const isAvailabilityMatch =
                selectedFilter.investmentAvailability === '' ||
                item.status.toLowerCase() === selectedFilter.investmentAvailability.toLowerCase();


            const isDurationMatch =
                selectedFilter.duration.length === 0 ||
                selectedFilter.duration.some((duration) => {
                    const timelineToDuration = {
                        1: '1-3 years',
                        2: '1-3 years',
                        3: '1-3 years',
                        4: '4-7 years',
                        5: '4-7 years',
                        6: '4-7 years',
                        7: '4-7 years',
                        8: '8 years above',
                        9: '8 years above',
                        10: '8 years above',
                    };

                    console.log(duration)
                    return (
                        item.timeline in timelineToDuration &&
                        timelineToDuration[item.timeline].toLowerCase().includes(duration)
                    );
                });



            const isCategoryMatch =
                selectedFilter.category.length === 0 || selectedFilter.category.includes(item.category);

            const isInvestmentTypeMatch =
                selectedFilter.investmentType.length === 0 ||
                selectedFilter.investmentType.includes(item.investmentType);

            return isAvailabilityMatch && isDurationMatch && isCategoryMatch && isInvestmentTypeMatch;
        });

        setFilteredData(newfilteredData);
        console.log(filteredData)

    };

    console.log(selectedFilter.duration)

    const rowsPerPage = 6;
    const startIndex = page * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    const currentPageData = filteredData?.slice(startIndex, endIndex);


    return (
        <section className='text-start'>
            <header className='text-[18px] text-[#101828] font-[600] mt-[24px] mb-[32px] text-start'>My Investments</header>
            <div className='flex flex-col lg:flex-row gap-4'>
                <Tabs setTabIndex={setTabIndex} tabIndex={tabIndex} />

                <div className='relative flex flex-col lg:flex-row ml-0 lg:ml-auto gap-[12px]'>
                    <Search className={'w-[320px] '} />

                    <div
                        onClick={() => setIsOpenFilter(!isopenFilter)}
                        className='w-[max-content] border h-[40px] border-[#D0D5DD] rounded-[8px] px-[14px] py-[10px] flex flex-row gap-[6px]'
                        style={{ boxShadow: 'hadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05)' }}
                    >
                        <img src={filter} alt='filter' />
                        Filter
                    </div>
                    {isopenFilter && (
                        <div className='border absolute top-[50px] w-full bg-white z-40'>
                            <FilterDropdownContent
                                selectedFilter={selectedFilter}
                                setSelectedFilter={setSelectedFilter}
                                onclose={() => setIsOpenFilter(false)}
                            />
                            <div className='px-[24px] flex flex-row gap-[12px] w-full items-center pb-[24px]'>
                                <span className='text-[14px] text-[#128591] '>Save filter</span>
                                <button
                                    onClick={() => setIsOpenFilter(false)}
                                    className='border border-[#D0D5DD] rounded-[8px] px-[14px] py-[10px] w-[max-content] ml-auto'
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={applyFilter}
                                    className='bg-[#159AA8] rounded-[8px] text-white px-[14px] py-[10px] w-[max-content]'
                                >
                                    Apply
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <hr className='w-full my-[20px]' />



            <div className='grid sm:grid-cols-2 xl:grid-cols-3 gap-[30px]'>


                {
                    currentPageData?.map(item => (


                        <div className='border rounded-[16px] min-w-[300px]'>
                            <div className='w-[100%] h-[240px] relative'>
                                <img src={item.image} alt='image' className='w-[100%] h-[100%] rounded-t-[16px]' />
                                <div className='text-[12px] font-[500] text-[#344054] absolute top-[13px] right-[8px] px-[6px] py-[2px] bg-[white] rounded-[6px] border border-[#D0D5DD] flex justify-center items-center' style={{ boxShadow: ' 0px 1px 2px 0px rgba(16, 24, 40, 0.05)' }}>
                                    {item.category}
                                </div>
                            </div>

                            <div className='p-[24px] flex flex-col gap-[24px]'>
                                <div className='flex flex-row gap-[8px]'>
                                    <Chip text={item.status} />
                                    <Chip text={item.investmentType} />
                                </div>

                                <div>
                                    <h3 className='text-[20px] font-[600] text-[#101828]'>GoldFingers Farms</h3>
                                    <p className='text-[16px] font-[400] text-[#475467]'>Rare access to institutional grade proper...</p>
                                </div>

                                <div className='flex flex-col gap-[12px]'>

                                    <div className='flex justify-between'>
                                        <p className='text-[#475467] text-[14] font-[500]'>Projected Annual Returns:</p>
                                        <p className='text-[14px] text-[#101828] font-[700]'>{item.projectedReturns}</p>
                                    </div>
                                    <div className='flex justify-between'>
                                        <p className='text-[#475467] text-[14] font-[500]'>Projected Timeline:</p>
                                        <p className='text-[14px] text-[#101828] font-[700]'>{item.timeline}</p>
                                    </div>
                                    <div className='flex justify-between'>
                                        <p className='text-[#475467] text-[14] font-[500]'>Payment Frequency::</p>
                                        <p className='text-[14px] text-[#101828] font-[700]'>{item.paymentFrequency}</p>
                                    </div>
                                    <div className='flex justify-between'>
                                        <p className='text-[#475467] text-[14] font-[500]'>Risk Profile:</p>
                                        <p className='text-[14px] text-[#101828] font-[700]'>{item.riskProfile}</p>
                                    </div>
                                    <div className='flex justify-between'>
                                        <p className='text-[#475467] text-[14] font-[500]'>Tax Benefits:</p>
                                        <p className='text-[14px] text-[#101828] font-[700]'>{item.taxBenefits}</p>
                                    </div>
                                    <div className='flex justify-between'>
                                        <p className='text-[#475467] text-[14] font-[500]'>Minimum Investment:</p>
                                        <p className='text-[14px] text-[#101828] font-[700]'>{item.minInvestment}</p>
                                    </div>
                                </div>

                                <div>
                                    <hr />
                                    <Progress value={1787121} range={15000000} raised={item.raisedAmount} total={item.totalAmount} height={8} />
                                    <div className='flex flex-row my-[16px] gap-1'>
                                        <p className='text-[14px] font-[600] text-[#101828]'>
                                            ₦{item.raisedAmount.toLocaleString()} Raised
                                        </p>
                                        <p className='text-[14px] font-[500] text-[#667085]'>
                                            of ₦{item.totalAmount.toLocaleString()}
                                        </p>
                                    </div>

                                    <div className='p-[4px] border border-[#D0D5DD] flex justify-between rounded-[10px]' style={{ boxShadow: ' 0px 1px 2px 0px rgba(16, 24, 40, 0.05)' }}>
                                        <div className='rounded-[6px] border font-[500] border-[#D0D5DD] px-[6px] py-[2px] text-[#344054] text-[12px]'>Campaign Due Date</div>
                                        <p className='text-[14px] text-[#101828] font-[600]'>23 NOV 2023</p>
                                    </div>
                                </div>

                            </div>


                        </div>
                    ))
                }
            </div>

            <div className=' mt-[40px]'>
                {
                    investments?.length > 0 && (
                        <>
                            <hr className='mb-[16px]' />
                            <Pagination
                                page={page}
                                dataLength={filteredData?.length}
                                setPage={setPage}
                                rowsPerPage={rowsPerPage}
                            />
                        </>
                    )}

            </div>

        </section>)
}

export default Investments



