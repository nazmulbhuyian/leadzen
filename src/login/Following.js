import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Following = () => {

    const {userName} = useLoaderData();

    return (
        <div>
            <h1>Following {userName}</h1>
        </div>
    );
};

export default Following;