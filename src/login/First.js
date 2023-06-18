import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const First = () => {


    const [texts, setTexts] = useState('')

    console.log(texts)
    return (

        <div className='mt-16 ml-16'>
            <div className='border w-44 border-blue-400'>
                <input type="text" onBlur={e => setTexts(e.target.value)} />
            </div>
            <Link to={`/user/${texts}`}><button className='btn p-4 bg-blue-300 rounded-lg mt-3'>See User</button></Link>
        </div>
    );
};

export default First;