import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import OurCourses from './OurCourses'
import Gallery from './Gallery'
let route=createBrowserRouter([{
    path:'/',
    element:<Layout/>,
    children:[
        {
            path:'/home',
            element:<Home/>
        },
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'/about',
            element:<About/>
        },
        {
            path:'/contacts',
            element:<Contact/>
        },
        {
            path:'/gallery',
            element:<Gallery/>
        },
        {
            path:'/courses',
            element:<OurCourses/>
        }
    ]
   }]) 

const AppRouter = () => {
  return (
    <div>
      <RouterProvider router={route}/>
    </div>
  )
}

export default AppRouter
