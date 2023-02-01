import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { useContext } from 'react'
import { useSelector } from 'react-redux'
import { DataContext } from '../../context/DataProvider'
import DisplayItem from './DisplayItem'
const Cart = () => {
    const { cartItems } = useSelector(state => state.cart)
    // console.log(cartItems)
    return (
        <>
            {
                cartItems ?
                    <Box style={{ padding: '40px 100px', height: '100vh', display: 'flex' }}>
                        <Box style={{ background: 'white', boxShadow: '0 1px 1px 0 rgb(0 0 0 / 20%)', height: 'auto' }}>
                            <Box>
                                <Typography>My Cart ({cartItems.length ? cartItems.length : ''})</Typography>
                            </Box>
                            <DisplayItem products={cartItems}></DisplayItem>
                        </Box>
                        <Box style={{ background: 'white', marginLeft: '100px', boxShadow: '0 1px 1px 0 rgb(0 0 0 / 20%)' }}>
                            hello
                        </Box>
                    </Box>
                    :
                    <div></div>

            }
        </>
    )
}

export default Cart