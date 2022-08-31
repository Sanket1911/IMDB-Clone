import React from 'react'
// import { useState } from 'react' 

function Pagination({pageNumber, goAhead, goBack}) {

    return (
        <div className='w-full flex justify-center 
        my-4'>

            <button
                onClick={goBack}
                className='border
        border-red-600 p-2 bg-gray-200 text-pink-400 font-bold border-r-0 rounded-l-lg'>
                Previous
            </button>

            <button className='border
        border-red-600 p-2 bg-gray-200 text-blue-400 font-bold'>
                {pageNumber}
            </button>

            <button
                onClick={goAhead}
                className='border
        border-red-600 p-2 bg-gray-200 text-pink-400 font-bold border-l-0 rounded-r-lg'>Next</button>

        </div>
    )
}

export default Pagination