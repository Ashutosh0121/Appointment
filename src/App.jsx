import React from 'react'
import Home from './Home'
import Book from './pages/Book'
import View from './pages/View'
import {useNavigate, NavLink, Route, Routes } from 'react-router-dom'
import Admin from './pages/Admin'
import Admin_page from './pages/Admin_page'
import Nav from './pages/Nav'



export default function App() {
    let navigate = useNavigate()
return (
    <>
       <Nav/>

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
