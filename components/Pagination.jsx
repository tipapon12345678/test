import React from 'react'

import qs from 'qs';

import { useRouter } from 'next/router';

const Pagination = ({page, pageCount, redirectUrl = '/'})=> {

    const router = useRouter();

    const isNextDisabled = () => {
        return page >= pageCount;
    };

    const isPrevDisabled = () => {
        return page <= 1;
    };

    const handlePaginate = async (direction) => {
        if (direction === 1 && isNextDisabled()) {
            return;
        }

        if (direction === -1 && isPrevDisabled()) {
            return;
        }
        const queryString = qs.stringify({
            ...router.query,
            page: page + direction,
        });

        router.push(`${redirectUrl}?${queryString}`);
    };
    return (
        
        <>
       
        <div className='flex justify-center text-sm font-bold' >
        <button
            onClick={() => handlePaginate(-1)}
            className={`${' py-2 px-4 text-black w-24 rounded'} ${
                isPrevDisabled() ? 'bg-cyan-600' : 'text-black bg-gradient-to-r from-cyan-300 via-cyan-200 to-cyan-100 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:amber-purple-800/80'
            }`}>
            หน้าที่เเล้ว
        </button>
        <span className="mt-2">&nbsp;หน้า&nbsp;{page}</span>
        <button
            onClick={() => handlePaginate(1)}
            className={`${' text-black text-s w-24 rounded ml-4'} ${
                isNextDisabled() ? 'bg-cyan-600' : 'text-black bg-gradient-to-r from-cyan-300 via-cyan-200 to-cyan-100 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:amber-purple-800/80'
            }`}>
            หน้าถัดไป
        </button>
    </div>  
 
    </>
    );
};

export default Pagination