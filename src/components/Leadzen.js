import React, { useEffect, useState } from 'react';
import Details from './Details';
import Pagination from './Pagination';

const Leadzen = () => {

    const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setData(data))
  }, [])


  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(3);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);

  const nPages = Math.ceil(data.length / recordsPerPage)
  console.log("leadzen", nPages, currentPage);

    return (
        <div className='bg-sky-100 w-4/5 mx-auto my-8'>

      {currentRecords.map(item => <div>
        <div className='bg-sky-100 p-4'><Details key={item.id} item={item}></Details></div>
      </div>)}

      <Pagination
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

    </div>
    );
};

export default Leadzen;