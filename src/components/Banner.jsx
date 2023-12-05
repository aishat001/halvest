import React from 'react'
import close from '../assets/close.svg'

const Banner = () => {
  return (
    <div className='px-[16px] py-[20px] bg-[#F9FAFB] relative rounded-[8px] mt-[20px]'>

        <h3 className='text-[14px] text-[#101828] font-[600]'>Upgrade Plan</h3>
        <p className='text-[14px] text-[#475467]'>Enjoy full access to the halal investment experience when you become a member</p>
        <img src='/bannerImage.png' alt='' className='my-[16px]'/>
        <img src={close} alt='' className='absolute right-0 top-0 p-[10px]'/>

            <div className='flex gap-[12px]'>
                <button className='font-[600] text-[#475467]'>Dismiss</button>
                <button className='font-[600] text-[#128591]'>Upgrade Now</button>
            </div>
    </div>
  )
}

export default Banner