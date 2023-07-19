import React from 'react';
import "./Home.css"
import Profile from '../profile/Profile';

const Home = () => {
    return (
        <div className='home'>
            <div className='row'>
                <div className='col-3'>
                    <Profile></Profile>
                </div>
                <div className='col-6'>income</div>
                <div className='col-3'>strategy</div>
            </div>
        </div>
    );
};

export default Home;