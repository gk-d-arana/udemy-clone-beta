import React from 'react'
import { Pagination } from '@mui/material'

const PaginationComp = ({ count, setPage }) => {
    const handleChange = (e ,v)=>{
        console.log(v)
        setPage(v)
    }
    return (
        <div className='w-100 d-flex justify-content-center'>
            <Pagination count={count} onChange={handleChange}/>
        </div>
    )
}

export default PaginationComp
