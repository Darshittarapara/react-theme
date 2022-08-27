import React from 'react';
import '../App.css';
import { useState } from 'react';
function Contact() {
    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Numbers, setNumber] = useState('');
    const [message, setmessage] = useState('');
    return (
        <div className='link_component common'>
            <div className='all_contain'>
                <h2>Contact Us</h2>
                <div className='block_contain'>
                    <div className='mydetails'>
                        <div>
                            <i className="fa fa-phone">
                                <span>+91 228879897
                                </span></i>
                        </div>
                        <div>

                            <i className="fa fa-envelope">
                                <span>abc@gmail.com</span></i>
                        </div>
                        <div>
                            <i className="fa fa-map-marker">
                                <span>  Subhah chock ,opps-swaminarayan mandir,maninagar,Ahmadabad,342342 </span>
                            </i>
                        </div>
                    </div>
                    <div className='form_block'>
                        <form action=''>
                            <table>
                                <tbody>
                                    <tr>
                                        <td className='table'>
                                            <input type="text" placeholder='Enter Your name' value={Name} onChange={(event) => {
                                                setName(
                                                    event.target.value
                                                )
                                            }} />

                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='table'>
                                            <input type="text" placeholder='Enter Your email' value={Email} onChange={(event) => {
                                                setEmail(
                                                    event.target.value
                                                )
                                            }} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='table'>
                                            <input type="text" placeholder='Enter Your phonenumber' value={Numbers} onChange={(event) => {
                                                setNumber(
                                                    event.target.value
                                                )
                                            }} />
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className='table'>

                                            <textarea cols={30} rows={4} placeholder='Message' value={message} onChange={(event) => {
                                                setmessage(
                                                    event.target.value
                                                )
                                            }}></textarea>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='table'>
                                            <input type="submit" value="Send message" onClick={(event) => {
                                                event.preventDefault()
                                                if (Name !== '' && Email !== '' && Numbers !== '' && message !== '') {
                                                    alert('We will contact you as soon as possible')
                                                }
                                                else {
                                                    alert('please fill all details');
                                                }
                                            }} />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;