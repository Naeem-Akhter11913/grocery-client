import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button, IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import DeleteIcon from "@mui/icons-material/Delete";
import { produts } from '../products';

const GridTable = () => {
    const [customRow, setCustomRow] = useState([...produts]);

    const handleAction = (id: number) => {
        console.log("Action clicked for row:", id);
    };

    const handleRemove = (id: number) => {
        console.log("Remove clicked for row:", id);
        setCustomRow(prev => prev.filter(row => row.id !== id));
    };

    const customColumn = [
        { field: 'id', headerName: 'ID', width: 200 },
        {
            field: 'product', headerName: 'Product', width: 200, renderCell: (params: any) => (
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <img
                        src={params.row.product}
                        alt={params.row.name}
                        style={{ width: 60, height: 60, objectFit: 'contain', borderRadius: 4 }}
                    />
                </div>)
        },
        { field: 'Price', headerName: 'Price', width: 200 },
        { field: 'stock-status', headerName: 'Stock Status', width: 200 },
        { field: 'vendor', headerName: 'Vendor', width: 200 },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params: any) => (
                <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    onClick={(event) => {
                        handleAction(params.row.id)
                    }}
                >
                    {/* Add to Card */}
                    <AddShoppingCartIcon />
                </Button>
            ),
        },
        {
            field: 'remove',
            headerName: 'Remove',
            width: 200,
            renderCell: (params: any) => (
                <Button
                    color="error"
                    size="small"
                    variant='contained'
                    onClick={() => handleRemove(params.row.id)}
                >
                    <DeleteIcon />
                </Button>
            ),
        },
    ];

    return (
        <DataGrid
            columns={customColumn}
            rows={customRow}
            checkboxSelection
            disableRowSelectionOnClick
        />
    )
}

export default GridTable