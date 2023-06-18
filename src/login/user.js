import React from 'react';
import {  Link, useLoaderData } from 'react-router-dom';

const User = () => {

    const {userName} = useLoaderData()

    const handleFollow = (userName) =>{
        const name = {
            userName: userName
        }
        fetch(`http://localhost:5000/users/${userName}/follow`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(name)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }

    const handleDelete = (userName) =>{
        fetch(`http://localhost:5000/users/${userName}/follow`, {
            method: 'DELETE',
            headers: {
                
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }

    return (
        <div className='mt-16 ml-16'>
            <h1>UserName: <strong>{userName}</strong></h1>
            <Link to={`/user/${userName}/followers`}><button className='btn mt-3 p-4 bg-blue-300 rounded-lg'>See Followers</button></Link>
            <br />
            <Link to={`/user/${userName}/following`}><button className='btn mt-3 p-4 bg-blue-300 rounded-lg'>See Following</button></Link>
            <br />
            <button className='btn mt-3 p-4 bg-blue-300 rounded-lg' onClick={() => handleFollow(userName)}>Follow</button>
            <br />
            <button className='btn mt-3 p-4 bg-blue-300 rounded-lg' onClick={() => handleDelete(userName)}>Delete</button>
        </div>
    );
};

export default User;