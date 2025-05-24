// import React, { useState } from 'react'

// const DataShow = () => {
//   const data = [
//     { name: 'raj', class: 9 },
//     { name: 'vishal', class: 8 },
//     { name: 'ejaz', class: 9 },
//     { name: 'ayush', class: 8 },
//     { name: 'pratik', class: 10 },
//     { name: 'shabu', class: 24 },
//     { name: 'sejal', class: 7 },
//   ]

//   const [filterData, setFilterData] = useState(data)
//   const [searchTerm, setSearchTerm] = useState('')

//   // Filter data when input changes
//   function onInputFilter(e) {
//     const value = e.target.value
//     setSearchTerm(value)

//     if (value === '') {
//       setFilterData(data)
//     } else {
//       const filtered = data.filter((item) => item.class == value)

//       setFilterData(filtered)
//     }
//   }

//   return (
//     <div className="">
//       <div className="bg-slate-600 w-full h-[15vh] flex justify-center items-center">
//         <input
//           type="text"
//           value={searchTerm} // code is running without this line
//           onChange={onInputFilter}
//           placeholder="Search here"
//           className="w-[30vw] h-14 pl-4 font-bold text-black border-2 rounded-md"
//         />
//       </div>

//       <div className="p-4">
//         {filterData.map((item, idx) => (
//           <div key={idx} className="text-lg mb-2">
//             <span className="mr-4">{idx + 1}</span>
//             {item.name} <span className="ml-4">class {item.class}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default DataShow
