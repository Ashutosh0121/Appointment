import React from 'react'
import Home from './Home'
import Book from './pages/Book'
import View from './pages/View'
import {useNavigate, NavLink, Route, Routes } from 'react-router-dom'
import Admin from './pages/Admin'
import Admin_page from './pages/Admin_page'

export default function App() {
    let navigate = useNavigate()
return (
    <>
        <nav>
            <div className="content">
                <div className="logo">

                    <img src="/image/Dr1.png" alt="" />
                    {/* <h1>Doctor Appointment</h1> */}
                </div>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/book">Book Appointment</NavLink></li>
                    <li><NavLink to="/view">View List</NavLink></li>
                </ul>

                <button className='button' onClick={()=> navigate("/admin")} >Admin log IN</button>
            </div>
        </nav>

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/book" element={<Book />} />
            <Route path="/view" element={<View />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/adminpage" element={<Admin_page />} />
            <Route path="*" element={<h1>404</h1>} />

        </Routes>

        <section>
            <div className="content">

                <div className="hero-section grid grid-two">
                    <div className="text">
                        {/* Add your text content here */}
                    </div>
                    <div className="img">
                        {/* Add your image content here */}
                    </div>
                </div>
            </div>
            
        </section>
    </>
);
}
