import React from 'react';
import client_1 from '../client_1.jpg'
import '../App.css'
function Review() {
    return (
        <div className='review_parent'>
            <h2>Review</h2>
            <div className='review_contain'>
                <div className='review_child'>
                    <img src={client_1} alt='' width={100} height={50} />
                    <h4>Akash Padhiyar</h4>
                    <div className='rating'>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star "></span>
                    </div>
                    <div className='paragraph'>
                        <p>
                            I have been working with Alpesh Technolabs from past 10 years. They have been looking after our companies website. I am very satisfied with their services. The way they resolve the changes with the website and their timely delivery is just commendable.
                        </p>
                    </div>
                </div>


                <div className='review_child'>
                    <img src='https://www.bmcoder.com/images/marcos_paulino.jpeg' alt='' width={100} height={50} />
                    <h4>marcos_paulino</h4>
                    <div className='rating'>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                    </div>
                    <div className='paragraph'>
                        <p>
                            I found a very strong mobile team at Alpesh Technolabs. Their inputs in every phase of project were awesome. I strongly recommend Akash Technolabs for their work in mobile app development
                        </p>
                    </div>
                </div>




                <div className='review_child'>
                    <img src='https://www.bmcoder.com/images/brijesh.png' alt='' width={100} height={50} />
                    <h4>Brijesh Shah</h4>
                    <div className='rating'>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                    </div>
                    <div className='paragraph'>
                        <p>
                            "What an Awesome service received from Alpesh Technolabs, great turn around time coupled with creativity"
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Review;