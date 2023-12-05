import React from 'react'

const Chip = ({text}) => {
  return (
    <div className={`text-[14px] font-[500] rounded-[99px] px-[10px] py-[2px] w-[max-content] border
    ${text.toLowerCase() === 'open' && 'bg-[#ECFDF3] text-[#067647] border-[#ABEFC6]'}
    ${text.toLowerCase() === 'agriculture' && 'bg-[#FDF2FA] text-[#C11574] broder-[#FCCEEE]'}
    ${text.toLowerCase() === 'paid out' && 'bg-[#FFFAEB] text-[#B54708] border-[#FEDF89]'}
    ${text.toLowerCase() === 'real estate' && 'bg-[#EFF8FF] text-[#175CD3] broder-[#B2DDFF]'}
    ${text.toLowerCase() === 'equity' && 'bg-[#EEF4FF] text-[#3538CD] border-[#C7D7FE]'}
    ${text.toLowerCase() === 'transportation' && 'bg-[#FFFAEB] text-[#B54708] broder-[#FEDF89]'}
    ${text.toLowerCase() === 'commodities' && 'bg-[#FEF6EE] text-[#B93815] border-[#F9DBAF]'}
    ${text.toLowerCase() === 'fixed deposit' && 'bg-[#F4F3FF] text-[#5925DC] border-[#D9D6FE]'}
     `} 
    >
      {text}</div>
  )
}

export default Chip