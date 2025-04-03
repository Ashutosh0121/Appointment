import React from 'react'
import Home from './Home'
import Book from './pages/Book'
import View from './pages/View'
import { NavLink, Route, Routes } from 'react-router-dom'

export default function App() {
  return (
   <>
   <nav>
   <div className="content">
    {/* <img src="" alt="" /> */}
    <ul>
        <li> <NavLink to="/" >Home</NavLink></li>
        <li> <NavLink to="/book" >Book Appointment</NavLink></li>
        <li> <NavLink to="/view" >View list</NavLink></li>
    </ul>

    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<Book />} />
        <Route path="/view" element={<View />} />
      </Routes>


   </div>
   </nav>
   </>
  )
}
