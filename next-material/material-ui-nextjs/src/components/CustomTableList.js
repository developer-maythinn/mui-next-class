"use client"; // Next.js use client directive

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import Image from 'next/image'; // Import Next.js Image
import { Box } from '@mui/material';
import Button from '@mui/material/Button'; // Corrected import
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { lightGreen, green } from '@mui/material/colors';

const TAX_RATE = 0;

function ccyFormat(num) {
    return `${num.toFixed(2)}`;
}

function calculatePrice(qty, unit) {
    return qty * unit;
}

function createRow(id, desc, qty, unit, imageUrl) {
    const price = calculatePrice(qty, unit);
    return { id, desc, qty, unit, price, imageUrl };
}

function subtotal(items) {
    return items
        .map(({ price }) => price)
        .reduce((sum, i) => sum + i, 0);
}

export default function CustomTableList({ params, onTotalChange }) {

    const [cartItems, setCartItems] = useState([

        createRow(1, "Bread", 0, 2, "https://demo2.pavothemes.com/freshio/wp-content/uploads/2020/08/39.jpg"),
        createRow(2, "Milk", 0, 4, "https://demo2.pavothemes.com/freshio/wp-content/uploads/2020/08/27.jpg")
    ]);

    const maxCount = 100;
    const minCount = 0;

    const handleCountChange = (event, id) => {
        const newQuantity = Number(event.target.value);

        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, qty: newQuantity, price: calculatePrice(newQuantity, item.unit) } : item
            )
        );
    };

    // Calculate subtotal, taxes, and total
    const invoiceSubtotal = subtotal(cartItems);
    const invoiceTaxes = TAX_RATE * invoiceSubtotal;
    const invoiceTotal = invoiceTaxes + invoiceSubtotal;

    React.useEffect(() => {
        onTotalChange(invoiceTotal); // Call this function whenever total changes
    }, [invoiceTotal, onTotalChange]);

    return (
        <Box>
            <Box sx={{ width: '100%', p: 2 }}>
                <Grid container spacing={2}>

                    {cartItems.map((item) => (

                        <React.Fragment key={item.id}>
                            <Grid size={{ xs: 4, md: 2 }}>
                                <Box>
                                    <Image
                                        src={item.imageUrl}
                                        alt={item.desc}
                                        width={500}
                                        height={500}
                                        style={{ width: '100%', height: 'auto', objectFit: 'cover', paddingTop: '20px' }}
                                    />
                                </Box>
                            </Grid>

                            <Grid size={{ xs: 8, md: 10 }}>
                                <TableContainer component={Paper} sx={{ boxShadow: 'none', border: 'none' }}>
                                    <Table aria-label="spanning table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell sx={{ color: green[900], fontWeight: 700 }} align="left" colSpan={2}>
                                                    {item.desc}
                                                </TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell sx={{ color: green[800] }}>Price</TableCell>
                                                <TableCell sx={{ color: green[900], fontWeight: 700 }}>
                                                    {ccyFormat(item.unit)}
                                                </TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell sx={{ color: green[900] }}>Quantity</TableCell>
                                                <TableCell sx={{ color: green[900], fontWeight: 700 }}>
                                                    <TextField
                                                        type="number"
                                                        value={item.qty}
                                                        onChange={(e) => handleCountChange(e, item.id)}
                                                        inputProps={{
                                                            step: 1,
                                                            min: minCount,
                                                            max: maxCount,
                                                        }}
                                                        sx={{
                                                            '& .MuiOutlinedInput-root': {
                                                                height: '30px',
                                                            },
                                                            width: '60px',
                                                        }}
                                                    />
                                                </TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell sx={{ color: green[900] }}>Item Subtotal</TableCell>
                                                <TableCell sx={{ color: green[900], fontWeight: 700 }}>
                                                    {ccyFormat(item.price)}
                                                </TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Grid>
                        </React.Fragment>
                    ))}
                </Grid>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', mt: 2 }}>
                <Button
                    variant="contained"
                    sx={{
                        fontWeight: 700,
                        width: '80%',
                        backgroundColor: lightGreen[200],
                    }}
                >
                    Update cart
                </Button>
            </Box>

            <br />

            <Grid size={{ xs: 12, md: 12 }} sx={{ border: '3px lightgray dotted' }}>
                <br />
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                        mb: 2,
                    }}
                >
                    <TextField
                        type="text"
                        value=""
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                height: '30px',
                            },
                            width: '80%',
                        }}
                    />
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', mt: 2 }}>
                    <Button
                        variant="contained"
                        sx={{
                            fontWeight: 700,
                            width: '80%',
                            backgroundColor: lightGreen[200],
                        }}
                    >
                        Add Coupon
                    </Button>
                </Box>
                <br />
            </Grid>
        </Box>
    );
}
