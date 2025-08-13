'use client'
import React from 'react'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import './style.css'

const PaginationComponenet = () => {
    const handlePagination = (event: React.ChangeEvent<unknown>, page: number) => {
        console.log(page)
    }
    return (
        <Stack spacing={2}>
            <Pagination count={10} variant="outlined" className='my-3 px-3 button-color' onChange={handlePagination} />
        </Stack>
    )
}

export default PaginationComponenet