import React, { useEffect, useRef } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js'
import {  TabsContainer } from './Tabs';
Chart.register(ArcElement);


const data = {
  labels: ['Equity', 'Transportation', 'Agritculture', 'Real Estate', 'Fixed Deposit', 'Commodities'],
  datasets: [
    {
      data: [20, 5.25, 35, 10, 12, 18],
      backgroundColor: ['#7A5AF8', '#FEF0C7', '#C11574', '#175CD3', '#47CD89', '#E04F16'],
      borderWidth: 0,
    },
  ],
};

const options = {
  maintainAspectRatio: false,
  cutout: '80%',
  plugins: {
    legend: {
      display: true,
    },
  },
};



const PieChartWithCenterLabel = () => {
  const chartRef = useRef(null);
  const legendRef = useRef(null);

  useEffect(() => {
    if (chartRef.current && legendRef.current) {
      const chartInstance = chartRef.current.chartInstance;
      const legendContainer = legendRef.current;

      legendContainer.innerHTML = chartInstance.generateLegend();
    }
  }, []);
  const totalValue = data.datasets[0].data.reduce((acc, value) => acc + value, 0);

  return (
    <div className='flex flex-col md:flex-row gap-[44px] items-center'>
      <div className="relative ">
        <Doughnut data={data} options={options} width={280}
          height={280} />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-black font-bold text-lg">
          <p className='text-[20px] font-[600]'>Total Investments</p>

          {/* {totalValue} */}
          <p className='text-[#475467] text-[14px] font-[500]'>$56,000(₦34,000,000)</p>

        </div>
      </div>

      <div ref={legendRef} className='max-[520px]'>
        <TabsContainer tabs={[
          {label: 'Legend'}
          ]}>
        <table className="lg:w-[533px] bg-white divide-y divide-gray-300 flex flex-row justify-between p-0">
          <thead>
            <tr className='flex flex-col md:w-[270px] text-[14px] font-[500] text-[#475467]'>
              <th className="py-2 pr-4 text-start inline-flex items-center gap-[6px]"><div className='w-[10px] h-[10px] rounded-[100%] bg-[#7A5AF8]'></div>Equity</th>
              <th className="py-2 pr-4 text-start inline-flex items-center gap-[6px]"><div className='w-[10px] h-[10px] rounded-[100%] bg-[#FEF0C7]'></div>Transportation</th>
              <th className="py-2 pr-4 text-start inline-flex items-center gap-[6px]"><div className='w-[10px] h-[10px] rounded-[100%] bg-[#C11574]'></div> Agritculture</th>
              <th className="py-2 pr-4 text-start inline-flex items-center gap-[6px]"><div className='w-[10px] h-[10px] rounded-[100%] bg-[#175CD3]'></div>Real Estate</th>
              <th className="py-2 pr-4 text-start inline-flex items-center gap-[6px]"><div className='w-[10px] h-[10px] rounded-[100%] bg-[#47CD89]'></div>Fixed Deposit</th>
              <th className="py-2 pr-4 text-start inline-flex items-center gap-[6px]"><div className='w-[10px] h-[10px] rounded-[100%] bg-[#E04F16]'></div>Commodities</th>
            </tr>
          </thead>
          <tbody className='flex flex-row !border-t-0'>
            {/* {rows.map((row) => ( */}
            <tr key={''} className="flex flex-col text-[#475467] text-[14px] font-[600] ">
              <td className="py-2 px-4">20%</td>
              <td className="py-2 px-4 ">5.25%</td>
              <td className="py-2 px-4 text-">35%</td>
              <td className="py-2 px-4 ">10%</td>
              <td className="py-2 px-4 ">12%</td>
              <td className="py-2 px-4 ">18%</td>
            </tr>
            <tr key={''} className=" flex flex-col  text-[#475467] text-[14px] font-[600]">
              <td className="py-2 px-4">₦1,890,098</td>
              <td className="py-2 px-4 text-right">₦1,890,098</td>
              <td className="py-2 px-4 text-right">₦1,890,098</td>
              <td className="py-2 px-4 text-right">₦1,890,098</td>
              <td className="py-2 px-4 text-right">₦1,890,098</td>
              <td className="py-2 px-4 text-right">₦1,890,098</td>
            </tr>
            {/* ))} */}
          </tbody>
        </table>

<p></p>
        </TabsContainer>
      </div>

    </div>
  );
};

export default PieChartWithCenterLabel;
