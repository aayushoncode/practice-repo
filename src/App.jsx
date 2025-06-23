import React from 'react'
import Card from './components/Card'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import Home from './Pages/Home1/Home'
// import { Route, Routes } from 'react-router-dom'
const App = () => {
  const routes = [
    {
      path: '/',
      element: <Layout />,
      Children: [
        { index: true, element: <Home /> },
        { path: 'contact', element: <Contact /> },
        { path: 'about', element: <About /> },
        { path: '*', element: <NotFound /> },
      ],
    },
  ]
  const router = createBrowserRouter(routes)

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App

{
  /* <Card/>
{/* <Home/> */
}
{
  /* <Routes>
    <Route path="/home" element={<Home />} />
  </Routes> */
}
