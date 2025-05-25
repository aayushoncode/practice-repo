import React, { useState } from 'react'
import data from './accordian'
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";


const Accordian = () => {
  const [openIndex, setOpenIndex] = useState()

  const handleToggle = (idx) => {
    setOpenIndex(openIndex == idx ? null : idx)

    console.log(idx)
  }

  return (
    <div className="h-screen w-full bg-slate-700  flex items-center justify-center">
      <div className=" bg-white/70   card-container px-5 py-5 gap-y-8 rounded-lg  flex-col flex ">
        {data.map((item, idx) => (
          <div className=" rounded-lg border-1 " key={idx}>
            <button
              onClick={() => handleToggle(idx)}
              className="p-3 border-b-1 justify-between flex cursor-pointer hover:bg-white/40 font-bold text-start pl-4 text-2xl  w-110"
            >
              {item.title}

              {openIndex == idx ? <MdOutlineKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown /> 
            }
              
            </button>
            {openIndex == idx && (
              <div className="pl-4 py-3">{item.content} : </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Accordian
