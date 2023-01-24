import React from 'react';

const Details = ({ item }) => {
    return (
        <div>
            <div className='bg-white border rounded-lg py-8'>
                <div className="flex align-center justify-between px-4">
                   
                    <div>
                        <h3><strong>Contact</strong></h3>
                        <h4>{item.name}</h4>
                    </div>
                    <div>
                        <h3><strong>city</strong></h3>
                        <h3>{item.address.city}</h3>
                    </div>
                    <div>
                        <h3><strong>state</strong></h3>
                        <h3>{item.address.street}</h3>
                    </div>
                    <div>
                        <h4>{item.website}</h4>

                    </div>
                </div>

                <div className='mt-4 mx-8'>

<p className="md:space-x-1 space-y-1 md:space-y-5 mb-4">
    <button className="btn-sm inline-block px-6 py-2.5 bg-red-500 rounded-2xl text-white font-medium text-xs leading-tight uppercase shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-600 active:shadow-lg transition duration-150 ease-in-out" type="button" data-bs-toggle="collapse" data-bs-target={`#${item.username}`} aria-expanded="false" aria-controls="collapseExample">
        View Details
    </button>
</p>
<div className="collapse"  id={`${item.username}`}>
    <div className="block p-6 rounded-lg shadow-lg bg-white">
        <div>
            <h2><strong>Description</strong></h2>
            <h4>{item.company.catchPhrase}</h4>
            <div className='grid grid-cols-2 gap-8 mt-4'>
                <div>
                    <h2><strong>Contact Person</strong></h2>
                    <h4>{item.name}</h4>
                </div>
                <div>
                    <h2><strong>Address</strong></h2>
                    <h4>{item.address.suite}</h4>
                </div>
                <div>
                    <h2><strong>User Name</strong></h2>
                    <h4>{item.username}</h4>
                </div>
                <div>
                    <h2><strong>City</strong></h2>
                    <h4>{item.address.city}</h4>
                </div>
                <div>
                    <h2><strong>email</strong></h2>
                    <h4>{item.email}</h4>
                </div>
                <div>
                    <h2><strong>State</strong></h2>
                    <h4>{item.address.street}</h4>
                </div>
                <div>
                    <h2><strong>Phone</strong></h2>
                    <h4>{item.phone}</h4>
                </div>
                <div>
                    <h2><strong>Zip-Code</strong></h2>
                    <h4>{item.address.zipcode}</h4>
                </div>
            </div>
        </div>
    </div>
</div>


</div>

            </div>
        </div>
    );
};

export default Details;