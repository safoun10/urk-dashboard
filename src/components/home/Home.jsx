import React from 'react';
import "./Home.css"
import Profile from '../profile/Profile';
import Income from '../income/Income';
import Retirement from '../retirement/Retirement';

const Home = () => {
    return (
        <div className='home'>
            <div className='row'>
                <div className='col-4'>
                    <Profile></Profile>
                </div>
                <div className='col-6'>
                    <Income></Income>
                </div>
                <div className='col-2'>
                    <Retirement></Retirement>
                </div>
            </div>
        </div>
    );
};

export default Home;