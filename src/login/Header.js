import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='mt-8 ml-8'>
            <Link to='/'><button className='btn bg-blue-300 mr-3 p-4 rounded-lg'>Home</button></Link>
            <Link to='/register'><button className='btn bg-blue-300 mr-3 p-4 rounded-lg'>Register</button></Link>
            <Link to='/login'><button className='btn bg-blue-300 mr-3 p-4 rounded-lg'>Login</button></Link>
        </div>
    );
};

export default Header;