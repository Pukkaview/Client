import React, { useState } from 'react';

const CustomDropdown = ({ options, selectedOption, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    onSelect(option);
    toggleDropdown();
  };

  return (
    <div className="relative inline-block text-[#000]">
      <div className="flex items-center w-[150px] justify-between p-2 rounded cursor-pointer bg-[#FFEEFF] text-[#180018] font-bold border-0 outline-none rounded-md px-4" onClick={toggleDropdown}>
        {selectedOption}
        <svg
          className="w-6 h-6 fill-current text-gray-500"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M6.293 8.293a1 1 0 0 1 1.414 0L10 10.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414z"
          />
        </svg>
      </div>
      {isOpen && (
        <ul className="w-[150px] absolute top-full left-0 mt-2 bg-white border rounded z-10 bg-[#FFEEFF] text-[#180018] font-bold border-0 outline-none rounded-md px-4">
          {options.map((option) => (
            <li key={option} onClick={() => handleOptionSelect(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomDropdown;
