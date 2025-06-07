import React, { useState } from 'react'

const showData1 = () => {
  const data = [
    { name: 'aryan', class: 8 },
    { name: 'neha', class: 9 },
    { name: 'nigam', class: 10 },
    { name: 'harshit', class: 11 },
    { name: 'mannu', class: 12 },
  ]

  const [filterData, setFilterData] = useState(data)

  function onChangeFilter(cls) {}

  return (
    <div className="w-full h-screen bg-slate-700">
      <div></div>
    </div>
  )
}

export default showData1
