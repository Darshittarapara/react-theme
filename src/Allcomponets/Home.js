import React from 'react';
import '../App.css';
import Review from './Revies';
import logo from '../akash.png'
function Home() {
    const eventcall = () => {
        alert('hello world')
    }
    return (
        <div className='our common'>
            <div className='company_logo'>
                <h2>Welcome to Alpesh Tehcnolab</h2>
                <h4>Here You get best solution </h4>
            </div>

            <div className='serive'>
                <h2>Our Service</h2>
                <div className='service_contain'>
                    <div>
                        <img src='https://akashtechnolabs.com/upload/images/service-provide/web-development.png' alt='' />
                        <h3>Web development</h3>
                        <h4>We develop next gen website for you. Our programmers protect your website with new age securities.</h4>
                    </div>
                    <div>
                        <img src='	https://akashtechnolabs.com/upload/images/service-provide/mobile-development.png' alt='' />
                        <h3>Mobile development</h3>
                        <h4>
                            Applications make which is out of the box thinking. We develops Applications in Android, IOS as well as cross platform Mobile Technologies.
                        </h4>
                    </div>
                    <div>
                        <img src='https://akashtechnolabs.com/upload/images/service-provide/e-commerce-service.png'
                            alt='' onClick={eventcall} />
                        <h3> E-COMMERCE DEVELOPMENT</h3>
                        <h4>
                            As a leading web development company, we provide a strong and secure e-commerce website to our clients.
                        </h4>
                    </div>
                </div>
            </div>


            <div className='client'>
                <h2>Brands</h2>
                <div className='client_contain'>
                    <div>
                        <img src='https://www.bmcoder.com/brands/ihg.png' alt='' />
                    </div>
                    <div>
                        <img src='https://www.bmcoder.com/brands/sportstory.png' alt='' />
                    </div>
                    <div>
                        <img src=' https://www.bmcoder.com/brands/vs.png' alt='' />
                    </div>
                    <div>
                        <img src='https://www.bmcoder.com/brands/hh.png' alt='' />
                    </div>
                    <div>
                        <img src={logo} alt='' />
                    </div>
                </div>

            </div>
            <div className='reviewcomponet'>
                <Review />
            </div>
        </div>
    )
}


export default Home;