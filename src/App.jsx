import React from 'react'
import Home from './Pages/Home1/Home'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
