import React from 'react';
import { Outlet } from 'react-router-dom';
import LeftBar from '../components/LeftBar/LeftBar';

const Main = () => {
    return (
        <div className='grid grid-cols-3'>
            <LeftBar />
            <div className="col-span-2 min-h-screen bg-slate-100 pt-20">
            <Outlet />
            </div>
        </div>
    );
};

export default Main;