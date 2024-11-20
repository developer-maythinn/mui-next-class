"use client"
import AddtoCard from '@/components/Cart/AddtoCard';
import CustomBreadcrumbsAddtoCart from '@/components/CustomBreadcrumbsAddtoCart';
import { Box } from '@mui/material'
import React from 'react'

function page({ params }) {
   

    return (
        <Box>
            <CustomBreadcrumbsAddtoCart params={params.detail}></CustomBreadcrumbsAddtoCart>
            <AddtoCard params={params}></AddtoCard>
        </Box>
    )
}

export default page
