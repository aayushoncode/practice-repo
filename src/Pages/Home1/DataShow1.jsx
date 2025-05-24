import React, { useState } from 'react'

const DataShow1 = () => {
  const data = [
    { name: 'raj', class: 9 },
    { name: 'vishal', class: 8 },
    { name: 'ejaz', class: 9 },
    { name: 'ayush', class: 8 },
    { name: 'pratik', class: 10 },
    { name: 'shabu', class: 24 },
    { name: 'sejal', class: 7 },
  ]

  const [filterData, setFilterData] = useState(data)

  const[searchInput , setSearchInput] = useState('')

  function onInputChange(e) {
    const value = e.target.value
    setSearchInput(value)

    if (value == '') {
      setFilterData(data)
    } else {
     const filtered = data.filter((item)=>item.class == value)
       setFilterData(filtered)  
    }

  
  }

  console.log(filterData);
  

  return (
    <div>
      <div className="h-[15vh] w-full bg-slate-800 flex justify-center items-center">
        <input

        value={searchInput}
          onChange={onInputChange}
          className="text-white border-2 rounded-md w-80 h-12 pl-4"
          type="text"
          placeholder="search here"
        />
      </div>

      <div>
        {filterData.map((item, idx) => (
          <div key={idx}> 
            <span>  {idx + 1 } </span>                   name :  {item.name }
            
                    <span> class : {item.class} </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DataShow1
