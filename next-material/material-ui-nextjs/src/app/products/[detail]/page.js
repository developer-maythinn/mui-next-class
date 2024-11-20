"use client"
import CustomBreadcrumbs from '@/components/CustomBreadcrumbs';
import ProductDetail from '@/components/Detail/ProductDetail';
import { Box } from '@mui/material'
import React from 'react'

function page({ params }) {
    console.log("CustomBreadcrumbs " + params.detail);

    return (
        <Box>
            <CustomBreadcrumbs params={params.detail}></CustomBreadcrumbs>
            <ProductDetail params={params}></ProductDetail>
        </Box>
    )
}

export default page
