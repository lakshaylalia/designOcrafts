import './App.css'
import {RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Works from './components/Works/Works'

function App() {
  const router = createBrowserRouter([
    {
      path : '/',
      element : <Layout />,
      children :[
        {
          path : "",
          element : <Home />
        },
        {
          path : "about",
          element : <About />
        },
        {
          path : "works",
          element : <Works />
        },
      ]
    }
    ,])

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
