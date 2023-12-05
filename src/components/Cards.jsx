import React from 'react'

const Cards = () => {
    return (
        <section className='grid sm:grid-cols-3 gap-[24px] mt-[32px] text-start'>
            <div className='w-full p-[20px] flex flex-col gap-[24px] border border-[#EAECF0] rounded-[12px]' style={{ boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)' }}>
                <div className='w-[56px] h-[56px] rounded-[100%] bg-[#2772f029] flex justify-center items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.7969 4.36064L13.5856 5.40079C14.0441 6.00549 14.7932 6.31577 15.545 6.2124L16.8382 6.0346C17.4943 5.94438 18.0553 6.50537 17.9651 7.16149L17.7873 8.45468C17.6839 9.20647 17.9942 9.95556 18.5989 10.4141L19.639 11.2028C20.1668 11.6029 20.1668 12.3963 19.639 12.7964L18.5989 13.5851C17.9942 14.0436 17.6839 14.7927 17.7873 15.5445L17.9651 16.8377C18.0553 17.4938 17.4943 18.0548 16.8382 17.9646L15.545 17.7868C14.7932 17.6834 14.0441 17.9937 13.5856 18.5984L12.7969 19.6386C12.3968 20.1663 11.6034 20.1663 11.2033 19.6386L10.4146 18.5984C9.95605 17.9937 9.20696 17.6834 8.45516 17.7868L7.16198 17.9646C6.50586 18.0548 5.94487 17.4938 6.03508 16.8377L6.21289 15.5445C6.31626 14.7927 6.00598 14.0436 5.40128 13.5851L4.36113 12.7964C3.8334 12.3963 3.8334 11.6029 4.36113 11.2028L5.40128 10.4141C6.00598 9.95556 6.31626 9.20648 6.21289 8.45468L6.03509 7.16149C5.94487 6.50537 6.50586 5.94439 7.16198 6.0346L8.45516 6.2124C9.20696 6.31577 9.95605 6.00549 10.4146 5.40079L11.2033 4.36064C11.6034 3.83291 12.3968 3.83291 12.7969 4.36064ZM9.60959 3.15224C10.8101 1.56904 13.1901 1.56904 14.3906 3.15224L15.1793 4.19239C15.2011 4.22119 15.2368 4.23596 15.2726 4.23104L16.5658 4.05324C18.5341 3.7826 20.2171 5.46556 19.9465 7.43391L19.7686 8.7271C19.7637 8.7629 19.7785 8.79857 19.8073 8.8204L20.8474 9.6091C22.4306 10.8096 22.4306 13.1896 20.8474 14.3901L19.8073 15.1788C19.7785 15.2006 19.7637 15.2363 19.7686 15.2721L19.9465 16.5653C20.2171 18.5336 18.5341 20.2166 16.5658 19.946L15.2726 19.7682C15.2368 19.7632 15.2011 19.778 15.1793 19.8068L14.3906 20.847C13.1901 22.4302 10.8101 22.4302 9.60959 20.847L8.82089 19.8068C8.79906 19.778 8.76339 19.7632 8.72759 19.7682L7.4344 19.946C5.46605 20.2166 3.78309 18.5336 4.05373 16.5653L4.23153 15.2721C4.23645 15.2363 4.22168 15.2006 4.19288 15.1788L3.15273 14.3901C1.56953 13.1896 1.56953 10.8096 3.15273 9.6091L4.19288 8.8204C4.22168 8.79857 4.23645 8.7629 4.23153 8.7271L4.05373 7.43391C3.78309 5.46556 5.46605 3.7826 7.4344 4.05324L8.72759 4.23104C8.76339 4.23596 8.79906 4.22119 8.82089 4.19239L9.60959 3.15224ZM9 10C9 10.5523 9.44772 11 10 11C10.5523 11 11 10.5523 11 10C11 9.44772 10.5523 9 10 9C9.44772 9 9 9.44772 9 10ZM10.7071 14.7071L14.7071 10.7071C15.0976 10.3166 15.0976 9.68342 14.7071 9.29289C14.3166 8.90237 13.6834 8.90237 13.2929 9.29289L9.29289 13.2929C8.90237 13.6834 8.90237 14.3166 9.29289 14.7071C9.68342 15.0976 10.3166 15.0976 10.7071 14.7071ZM14 15C13.4477 15 13 14.5523 13 14C13 13.4477 13.4477 13 14 13C14.5523 13 15 13.4477 15 14C15 14.5523 14.5523 15 14 15Z" fill="#2772F0" />
                    </svg>
                </div>
                <div>
                    <p className='text-[14px] text-[#475467] font-[500]'>Active Investments
                    </p>          <h5 className='text-[24px] text-[#101828] font-[600]'>25</h5>
                </div>
            </div>

            <div className='w-full p-[20px] flex flex-col gap-[24px] border border-[#EAECF0]  rounded-[12px]' style={{ boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)' }}>
                <div className='w-[56px] h-[56px] rounded-[100%] bg-[#37a6af33]  flex justify-center items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 3C9.79086 3 8 4.79086 8 7H6.99927C4.61171 7 2.75585 9.07808 3.02472 11.4505L3.70471 17.4504C3.93386 19.4724 5.64443 21 7.67927 21H16.3209C18.3557 21 20.0663 19.4723 20.2954 17.4504L20.9754 11.4505C21.2443 9.07808 19.3884 7 17.0009 7H16C16 4.79086 14.2091 3 12 3ZM14 9V10C14 10.5523 14.4477 11 15 11C15.5523 11 16 10.5523 16 10V9H17.0009C18.1946 9 19.1226 10.039 18.9881 11.2252L18.3081 17.2252C18.1936 18.2362 17.3383 19 16.3209 19H7.67927C6.66185 19 5.80657 18.2362 5.69199 17.2252L5.01199 11.2252C4.87756 10.039 5.80549 9 6.99927 9H8V10C8 10.5523 8.44772 11 9 11C9.55228 11 10 10.5523 10 10V9H14ZM14 7C14 5.89543 13.1046 5 12 5C10.8954 5 10 5.89543 10 7H14Z" fill="#159AA8" />
                    </svg>
                </div>
                <div>
                    <p className='text-[14px] text-[#475467] font-[500]'>Total Naira Investments
                    </p>          <h5 className='text-[24px] text-[#101828] font-[600]'>₦220,909,093.42</h5>
                </div>
            </div>


            <div className='w-full p-[20px] flex flex-col gap-[24px] border border-[#EAECF0] rounded-[12px]' style={{ boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)' }}>
                <div className='w-[56px] h-[56px] rounded-[100%] bg-[#f5b64742] flex justify-center items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 3C9.79086 3 8 4.79086 8 7H6.99927C4.61171 7 2.75585 9.07808 3.02472 11.4505L3.70471 17.4504C3.93386 19.4724 5.64443 21 7.67927 21H16.3209C18.3557 21 20.0663 19.4723 20.2954 17.4504L20.9754 11.4505C21.2443 9.07808 19.3884 7 17.0009 7H16C16 4.79086 14.2091 3 12 3ZM14 9V10C14 10.5523 14.4477 11 15 11C15.5523 11 16 10.5523 16 10V9H17.0009C18.1946 9 19.1226 10.039 18.9881 11.2252L18.3081 17.2252C18.1936 18.2362 17.3383 19 16.3209 19H7.67927C6.66185 19 5.80657 18.2362 5.69199 17.2252L5.01199 11.2252C4.87756 10.039 5.80549 9 6.99927 9H8V10C8 10.5523 8.44772 11 9 11C9.55228 11 10 10.5523 10 10V9H14ZM14 7C14 5.89543 13.1046 5 12 5C10.8954 5 10 5.89543 10 7H14Z" fill="#F5B544" />
                    </svg>
                </div>
                <div>
                    <p className='text-[14px] text-[#475467] font-[500]'>Total Expected Returns
                    </p>          <h5 className='text-[24px] text-[#101828] font-[600]'>₦300,382,900.80</h5>
                </div>
            </div>

        </section>)
}

export default Cards