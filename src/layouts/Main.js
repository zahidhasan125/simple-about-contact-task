import React from 'react';
import { Outlet } from 'react-router-dom';
import LeftBar from '../components/LeftBar/LeftBar';

const Main = () => {
    return (
        <div className='grid grid-cols-3 mt-5'>
            <LeftBar />
            <Outlet className="col-span-2" />
        </div>
    );
};

export default Main;