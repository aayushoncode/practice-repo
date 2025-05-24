import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
const Card_fetch = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    async function getData() {
      try {
        const { data } = await axios.get('https://dummyjson.com/posts')
        setData(data.posts)
      } catch (err) {}
    }

    getData()
  }, [])

  console.log(data)

  return (
    <div>
      <div className="min-h-screen text-white card-container">
        {data.map((item, idx) => (
          <div className="card w-[27vw] h-fit bg-red-200">
            <h1 key={idx}>{item.body}</h1>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Card_fetch
