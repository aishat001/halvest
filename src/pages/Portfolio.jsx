import React, { useState } from 'react'
import PieChartWithCenterLabel from '../components/Chart'
import Cards from '../components/Cards'
import Investments from '../components/portfolio/Investments'

const Portfolio = () => {

 

  return (
    <div>
      <h1 className='text-[24px] lg:text-[30px] font-[600]'>My Porfolio</h1>

      <Cards/>

      <section className=' p-[10px] md:p-[32px]'>
        <header className='text-[18px] text-[#101828] font-[600] mt-[24px]'>My Porfolio</header>
        <hr className='w-full my-[20px]' />
        <PieChartWithCenterLabel />
      </section>

      <Investments/>

       
    </div>
  )
}

export default Portfolio