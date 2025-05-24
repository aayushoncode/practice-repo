import React, { useState } from 'react'
import { data } from './data'


const Card = () => {
    const [filterdata,setfilterdata]=useState(data);
    function onChangeFilter(cl) {
      if (cl == -1) {
        setfilterdata(data);
        return;
      }
      setfilterdata(data.filter((item) => item.class == cl));
    }
  return (
    <div className="text-black">
      <div className="flex flex-col gap-4">


        <input
          type="text"
          placeholder="Search here"
          onChange={(cl) => onChangeFilter(cl.target.value)}
          className="w-full h-14 pl-4 font-bold text-white border-2 rounded-md bg-slate-600"
        />
      </div>

      {filterdata.map((item, idx) => (
        <div key={idx}>
          <span className="mr-4">{idx + 1}</span>
          {item.name} <span className="ml-4"> class {item.class}</span>
        </div>
      ))}
    </div>
  );
}

export default Card