import React from 'react';
import '../App.css'
import pic from '../profilepic.jpg'
function About() {
    return (
        <div className='link_component common'>
            <div className='all_contain'>
                <h2>About Me</h2>
                <div className='block_contain'>
                    <img src={pic} alt='' width={200} height={200} />
                    <div className='intro'>
                        <p>My name is Darshit Tarapara .i am Web development.currently i complete my BE from L.D College of engineering,Ahmadabad .i have a knowleage about Html,css ,javascript and also basic knowleage of database and python.Now i learn React js Which is use for UI. i always keen to learn new language.my hobbies is reading the book for improve my knowleage ,chess and cricket.my strength is management ,leadership etc.
                        </p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;