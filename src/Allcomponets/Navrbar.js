import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Footer from './Footer';
import Contact from './Contact';
import About from './About';
import Menu from './Menu';
import '../App.css'
import Sildebar from './Sidebar';
function Navbar() {
    return (
        <div className='parent_control_block'>
            <div className='Navbar'>
                <Router>
                    <ul>
                        <li>
                            <Link to='/' >Home |</Link>
                        </li>
                        <li>
                            <Link to='/contact' >Contact |</Link>
                        </li>
                        <li>
                            <Link to='/About' >About |</Link>
                        </li>
                    </ul>
                    <div className='center_contain'>
                        <div className='menu'>
                            <Menu />
                        </div>
                        <div className='sildebar'>
                            <Sildebar />
                        </div>
                    </div>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/contact' element={<Contact />} />
                        <Route path='/about' element={<About />} />
                    </Routes>
                </Router>

            </div>
            <div className='footer'>
                <Footer />
            </div>
        </div>
    )
}

export default Navbar;