'use clinet'
import React from 'react';
import { DataGrid, GridFilterModel } from '@mui/x-data-grid';
import { tableRows } from './rows';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import './yourCartTable.css'
import Link from 'next/link';
import { Rating } from '@mui/material';

const YourCartTable = () => {

  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    {
      field: 'product', headerName: 'Product', width: 550, renderCell: (params: any) => {
        return (
          <div className='d-flex gap-3'>
            <img
              src={params.row.product.imgUrl}
              alt={params.row.name}
              style={{ width: 120, height: 120, objectFit: 'contain', borderRadius: 4 }}
            />

            <div className='d-flex flex-column '>
              <a className="text-decoration-none p-0" href={'#'} style={{ marginTop: '-30px' }} >{params.row.product.title}</a>
              <Rating readOnly sx={{ marginTop: '-40px' }} max={5} value={params.row.product.rating} precision={0.1} size="small" />
            </div>
          </div>
        )
      }
    },
    {
      field: 'unit price', headerName: 'Unit Price', width: 150, renderCell: (params: any) => {
        return <p>{`$ ${params.row['unit price']}`}</p>
      }
    },
    {
      field: 'quantity', headerName: 'Quantity', width: 200, renderCell: (params: any) => {
        return (
          <div className='d-flex gap-5'>
            <p className='text-start'>{params.row.quantity}</p>
            <div className='d-flex flex-column flex-end custon-button-style gap-4'>
              <button className='btn'><AddIcon /></button>
              <button className='btn'><RemoveIcon /></button>
            </div>
          </div>
        )
      }
    },
    {
      field: 'subtotal', headerName: 'Subtotal', width: 200, renderCell: (params: any) => {
        return <p>{`$ ${params.row.subtotal}`}</p>
      }
    },
    {
      field: 'remove', headerName: 'Remove', width: 200, renderCell: (params: any) => {
        return (
          <button className='btn btn-outline-danger' >Remove</button>
        )
      }
    },
  ];

  const [filterModel, setFilterModel] = React.useState<GridFilterModel>({
    items: [
      {
        field: 'rating',
        operator: '>',
        value: '2.5',
      },
    ],
  });

  return (
    <DataGrid
      columns={[...columns]}
      rows={[...tableRows]}
      showToolbar
      checkboxSelection
      disableRowSelectionOnClick
      getRowHeight={() => 120}
      filterModel={filterModel}
      onFilterModelChange={(newFilterModel) => setFilterModel(newFilterModel)}
    />
  )
}

export default YourCartTable