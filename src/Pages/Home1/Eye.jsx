import React, { use, useState } from 'react'
import { FaRegEye } from 'react-icons/fa'
import { FaRegEyeSlash } from 'react-icons/fa'

const Eye = () => {
  const [showEye, setShowEye] = useState(false)
  const [inputChange, setInputChange] = useState()

  function onInputChange(e) {
    const value = e.target.value
    setInputChange(value)

    console.log(value);
    
  }

  return (
    <div className="h-screen w-full bg-slate-800 flex items-center justify-center">
      <div className="relative">
        {showEye ? (
          <FaRegEye
            onClick={() => setShowEye(!showEye)}
            className="text-2xl  cursor-pointer text-white  absolute top-7 right-5"
          />
        ) : (
          <FaRegEyeSlash
            onClick={() => setShowEye(!showEye)}
            className="text-2xl  cursor-pointer text-white  absolute top-7 right-5"
          />
        )}

        <input
          onChange={onInputChange}
            // value={inputChange}
          className="w-110  h-20 border-2 rounded-md text-xl pl-4  text-white font-bold "
          placeholder="enter your 8 digit password"
          type={showEye ? 'password' : 'text'}
        />
      </div>
    </div>
  )
}

export default Eye
