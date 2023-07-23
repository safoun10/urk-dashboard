import React from 'react';
import "./Home.css"
import Profile from '../profile/Profile';
import Income from '../income/Income';
import Retirement from '../retirement/Retirement';

const Home = () => {
    return (
        <div className='home mx-auto'>
            <div className='row'>
                <div className='col-11 mx-auto col-md-5 col-lg-4'>
                    <Profile></Profile>
                </div>
                <div className='col-11 mx-auto col-md-7 col-lg-6'>
                    <Income></Income>
                </div>
                <div className='col-11 mx-auto col-md-8 col-lg-2'>
                    <Retirement></Retirement>
                </div>
            </div>
        </div>
    );
};

export default Home;