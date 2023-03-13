import React from 'react';
import { Link } from 'react-router-dom';

const LeftBar = () => {
    return (
        <div className='min-h-screen border-r pt-20'>
            <ul className='flex flex-col gap-5 items-center justify-center'>
                <Link className='hover:font-bold text-blue-600 cursor-pointer bg-gradient-to-r from-cyan-200 via-cyan-400 to-cyan-600 p-2 w-1/3 text-center' to='/about'><li>About</li></Link>
                <Link className='hover:font-bold text-blue-600 cursor-pointer bg-gradient-to-r from-cyan-200 via-cyan-400 to-cyan-600 p-2 w-1/3 text-center' to='/contact'><li>Contact</li></Link>
            </ul>
        </div>
    );
};

export default LeftBar;