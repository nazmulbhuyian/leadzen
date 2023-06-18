import React from 'react';

const Pagination = ({ nPages, currentPage, setCurrentPage }) => {
    console.log("pagi", nPages, currentPage, setCurrentPage);

    const pageNumbers = [...Array(nPages + 1).keys()].slice(1)

    const nextPage = () => {
        if (currentPage !== nPages)
            setCurrentPage(currentPage + 1)
    }
    const prevPage = () => {
        if (currentPage !== 1)
            setCurrentPage(currentPage - 1)
    }

    return (
        <div>
            <div class="flex justify-center">
                <nav aria-label="Page navigation example">
                    <ul class="flex list-style-none">
                        <li class="page-item"><button
                            class="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 focus:shadow-none focus:bg-red-500 focus:text-white"
                             aria-label="Previous" onClick={prevPage}>
                            <span aria-hidden="true">&laquo;</span>
                        </button></li>
                        {
                        pageNumbers.map(pgNumber =>
                            <li key={pgNumber}
                                class={`page-item ${currentPage === pgNumber ? 'active' : ''}`}>
                                <button
                                class="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all durati text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:bg-red-500 focus:text-white rounded-lg"
                                    onClick={() => setCurrentPage(pgNumber)}
                                >{pgNumber}</button>
                            </li>
                        )
                    }
                        <li class="page-item"><button
                            class="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none focus:bg-red-500 focus:text-white"
                             aria-label="Next" onClick={nextPage}>
                            <span aria-hidden="true">&raquo;</span>
                        </button></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Pagination;