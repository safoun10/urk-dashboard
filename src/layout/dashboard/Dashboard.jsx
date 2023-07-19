import React from 'react';
import SideNav from '../../components/sideNav/SideNav';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='d-flex'>
            <SideNav></SideNav>
            <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;