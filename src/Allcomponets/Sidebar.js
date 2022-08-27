import '../App.css'
import React from 'react';

function Sildebar() {
    return (
        <div className='sideparent common'>
            <h2>
                All projects
            </h2>
            <div className='project_contain'>
                <div className='common_pro'>
                    <h2 >Design</h2>
                    <div>
                        <ul>
                            <li>
                                <span>E-commerce </span>
                                <a href='https://red-store-tau.vercel.app/' >Link</a>

                            </li>
                            <li>
                                <span>Travel-site</span>
                                <a href='https://travel-website-jade.vercel.app/' >Link</a>
                            </li>
                            <li>
                                <span>Food SIte</span>
                                <a href=' https://burgur-house.vercel.app/' >Link</a>
                            </li>
                        </ul>

                    </div>


                </div>

                <div className='common_pro'>
                    <h2>Js project</h2>
                    <div>
                        <ul>
                            <li>
                                <span>calculator</span>
                                <a href='https://mini-calculator-project.vercel.app/' >Link</a>
                            </li>
                            <li>
                                <span>Notes</span>
                                <a href='https://notes-sigma-livid.vercel.app/' >Link</a>
                            </li>
                            <li>
                                <span>color-filcker</span>
                                <a href='https://color-filcker.vercel.app/'>Link</a>
                            </li>
                        </ul>

                    </div>


                </div>
            </div>

        </div>
    )
}

export default Sildebar;