import React from 'react'
import Accordian from './Accordian.jsx'
import CountarySelector from './CountarySelector'
import Eye from './Eye.jsx'
import Api from './Api'
import DataShow from './DataShow'
import DataShow1 from './DataShow1'

const Home = () => {
  return (
    <div>
      <Api />
      <Eye />
      <DataShow />
      <DataShow1 />
      <CountarySelector />
      <Accordian />
    </div>
  )
}

export default Home
