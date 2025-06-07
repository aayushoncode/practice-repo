import React from 'react'

const CountarySelector = () => {
  const data = [
    {
      india: {
        chattisgarh: [
          'Bhilai',
          'Bhilai',
          'Bhilai',
          'Bhilai',
          'Bhilai',
          'Bhilai',
          'Bhilai',
        ],
      },
    },
    {
      america: {
        california: [
          'los Angeles',
          'los Angeles',
          'los Angeles',
          'los Angeles',
          'los Angeles',
          'los Angeles',
        ],
      },
    },
  ]

  return (
    <div className="h-screen w-full bg-slate-800  flex items-center justify-center ">
      {data.map((item, idx) => (
        <select
          name="country"
          id="country"
          className="w-40 h-15 border-2 text-white"
        >
          {/* <option    value="india" className="text-black">
            {item.india}
          </option> */}
        </select>
      ))}
    </div>
  )
}

export default CountarySelector
