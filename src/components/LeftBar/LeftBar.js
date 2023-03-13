import React from 'react';
import { Link } from 'react-router-dom';

const LeftBar = () => {
    return (
        <div className='min-h-screen border-r pt-20 bg-slate-200'>
            <ul className='flex flex-col gap-5 items-center justify-center'>
                <Link className='font-bold text-black hover:text-white hover:translate-y-px cursor-pointer bg-gradient-to-r from-cyan-200 via-cyan-400 to-cyan-600 p-2 w-1/3 text-center border border-gray-400 rounded-md' to='/about'><li>About</li></Link>
                <Link className='font-bold text-black hover:text-white hover:translate-y-px cursor-pointer bg-gradient-to-r from-cyan-200 via-cyan-400 to-cyan-600 p-2 w-1/3 text-center border border-gray-400 rounded-md' to='/contact'><li>Contact</li></Link>
            </ul>
        </div>
    );
};

export default LeftBar;