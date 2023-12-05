import React, { useState } from 'react';

const Tabs = ({ tabIndex, setTabIndex }) => {
  const lists = ['All Investments', 'Open Investments', 'Fully PaidOut Investments'];

  return (
    <div className='overflow-hidden w-[100vw] md:w-[100%]'>
      <div className='flex flex-row rounded-[8x] w-[100%] overflow-x-auto md:overflow-hidden'>
        {lists.map((list, index) => (
          <div
            key={index}
            className={`w-[max-content] text-[14px] text-[#344054] font-[600] px-[16px] py-[8px] border-l
             ${index === 0 && 'border rounded-l-[8px]'}
             ${index === 1 && 'border-t border-b'}
             ${index === 2 && 'border rounded-r-[8px]'}
             ${index === tabIndex && 'bg-[#159AA8] text-white'}

             `}
            onClick={() => setTabIndex(index)}
          >
            <p className='w-[max-content]'>{list}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;





// TabPanel.js
 const TabPanel = ({ children, value, index }) => {
    return value === index && (
      <div className="">
        {children}
      </div>
    );
  };
  
  // TabButton.js
  const TabButton = ({ label, index, selectTab, isSelected, icon: Icon }) => {
    const baseStyles = " pb-[22px] pr-2 xl:pr-3 capitalize text-[14px] ";
    const activeStyles = "text-[#128591] border-b-[3px] border-[#128591] font-[600]";
    const inactiveStyles = "text";
  
    return (
      <button
        className={`${baseStyles} ${isSelected ? activeStyles : inactiveStyles}`}
        onClick={() => selectTab(index)}
      >
        {Icon && <Icon className="inline-block mr-2 -mt-1 " />}
        
        <p className="!w-[max-content]">  {label}
          </p>
      </button>
    );
  };
  
  // TabsContainer.js
  
  export const TabsContainer = ({ tabs, children, className }) => {
    const [activeTab, setActiveTab] = useState(0);
  
    return (
      <div>
        <div className={`border-b-[3px] border-[#EAECF0] mb-4 flex overflow-x-auto  ${className}`}>
          {tabs.map((tab, index) => (
            <TabButton
              key={index}
              label={tab.label}
              index={index}
              selectTab={setActiveTab}
              isSelected={activeTab === index}
              icon={tab.icon}
            />
          ))}
        </div>
        {children.map((child, index) => (
          <TabPanel key={index} value={activeTab} index={index}>
            {child}
          </TabPanel>
        ))}
      </div>
    );
  };
  

  

