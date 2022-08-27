import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React from 'react';
import logo from '../logo.jpg';

import Contact from './Contact';
import '../App.css';
import About from './About';
function Footer() {
    const jsondata = [
        {
            'Name': 'DARSHIT',
            'AGE': 22,
            'surname': 'tarapra',
            'job': 'web development'
        },
        {
            'img': 'logo'
        }

    ]
    const [data] = jsondata
    console.log(data)
    //     <Router>
    // <ul>
    //     <li>
    //         <Link to='/' >Home |</Link>
    //     </li>
    //     <li>
    //         <Link to='/contact' >Contact |</Link>
    //     </li>
    //     <li>
    //         <Link to='/About' >About |</Link>
    //     </li>
    // </ul>
    // </Router> 
    return (
        <div className='Footer_parent'>
            <div className='logo'>
                <img src={logo} alt='' width={300} height={100} />
            </div>
            <div className='link'>
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
                    <Routes>

                        <Route path='/contact' element={<Contact />} />
                        <Route path='/about' element={<About />} />
                    </Routes>
                </Router>
            </div>
            <div className='social-icon'>

                <span className="fa fa-facebook "></span>
                <a href='https://github.com/Darshittarapara?tab=repositories'>
                    <span className="fa fa-github "></span>
                </a>

                <span className="fa fa-instagram "></span>
                <a href='https://www.linkedin.com/in/darshit-tarapara-30960a19b/'>
                    <span className="fa fa-linkedin "></span>
                </a>

            </div>

        </div>

    )
}

export default Footer;