
import { createBrowserRouter } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'

import Login from './pages/Login.jsx'
import HeroSection from './pages/student/HeroSection'
import { RouterProvider } from 'react-router'
import Mainlayout from './layout/Mainlayout'
import { Children } from 'react'
import Courses from './pages/student/Courses'
function App() {
 
  const appRouter = createBrowserRouter([
   { path:"/",
    element:<Mainlayout/>,
    children:[
      {
        path:"/",
        element:(
          <>
          <HeroSection/>
          <Courses/>

          </>
        ),
      },{
       path:"login",
       element:<Login/>
      }
    ]
  },
  ]);

  return (
    <main>
      
     <RouterProvider router={appRouter}/> 
    </main>
  )
}

export default App
