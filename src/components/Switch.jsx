import React, { useState } from 'react';

const ToggleSwitch = () => {
  const [isChecked, setIsChecked] = useState(true);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex items-center gap-[8px]  border border-[#D0D5DD] py-[8px] px-[16px] ml-auto bg-[#F9FAFB] rounded-[8px] ">
      <span className={`text-[#344054] font-[600]`}>USD</span>
      <label
        className={`relative inline-flex items-center w-[36px] h-[20px] cursor-pointer bg-[#159AA8] rounded-full w-12 transition-colors duration-300`}
      >
        <input
          type="checkbox"
          className="sr-only"
          checked={isChecked}
          onChange={handleToggle}
        />
        <span
          className={`absolute transform translate-x-0 transition-transform duration-300
           ${isChecked ? 'translate-x-full' : 'translate-x-0'}
             inline-block h-[18px] w-[18px] bg-white rounded-full`}
        ></span>
      </label>
      <span className={`text-[#344054] font-[600] `}>Naira</span>
    </div>
  );
};

export default ToggleSwitch;
