"use client"
import React from 'react'
import { useState } from 'react';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import CustomTableList from '../CustomTableList';
import CustomTableTotal from '../CustomTableTotal';
import { Button } from '@mui/material';


function AddtoCard({ params }) {

    const [total, setTotal] = useState(0);

    const handleTotalChange = (newTotal) => {
        setTotal(newTotal); // Update the total whenever it changes in CustomTableList
    };

    const handleLoveClick = () => {
        alert('Loved!');
    };

    const handleShuffleClick = () => {
        alert('Shuffled!');
    };

    console.log("AddtoCard title:::::" + params.detail);

    return (


        <Box sx={{ width: '100%', p: 4 }}>
            <Grid container spacing={4}>

                <Grid size={{ xs: 12, md: 8 }}>
                    <CustomTableList params={{ params }} onTotalChange={handleTotalChange}></CustomTableList>
                </Grid>

                <Grid size={{ xs: 12, md: 4 }} >
                    <CustomTableTotal total={total}></CustomTableTotal>
                </Grid>

            </Grid>
        </Box >
    )
}

export default AddtoCard
