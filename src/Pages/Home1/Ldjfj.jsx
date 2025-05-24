import React, { useState } from 'react';

const DataShow = () => {
  const data = [
    { name: 'raj', class: 9 },
    { name: 'vishal', class: 8 },
    { name: 'ejaz', class: 9 },
    { name: 'ayush', class: 8 },
    { name: 'pratik', class: 10 },
    { name: 'sejal', class: 7 },
  ];
  
  const [filterData, setFilterData] = useState(data);
  const [searchClass, setSearchClass] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchClass(value);
    
    if (value === '') {
      setFilterData(data);
    } else {
      const filtered = data.filter(item => item.class.toString() === value);
      setFilterData(filtered);
    }
  };

  return (
    <div>
      <div className="bg-slate-600 w-full h-[15vh] flex justify-center items-center">
        <input
          type="text"
          value={searchClass}
          onChange={handleInputChange}
          placeholder="Enter class to filter"
          className="w-150 h-14 pl-4 font-bold text-white border-2 rounded-md"
        />
      </div>

      {filterData.map((item, idx) => (
        <div key={idx} className="p-2">
          <span className="mr-4">{idx + 1}</span>
          {item.name} <span className="ml-4">class {item.class}</span>
        </div>
      ))}
    </div>
  );
};

export default DataShow;