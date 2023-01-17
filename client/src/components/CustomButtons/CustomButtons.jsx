import React from 'react'
import { Box, Button, Typography, styled } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Login from '../Login/Login';
import { useState } from 'react';
import { useContext } from 'react';
import { DataContext, LoginContext } from '../../context/DataProvider';
import { useEffect } from 'react';
import Profile from '../Header/Profile';
const HeaderBox = styled(Box)`
    display:flex;
    width:32%;
    &>p,&>div{
        margin:0 0 0 7%;
    }
    justify-content:center
`
const ShoppingBox = styled(Box)`
    display:flex
`
const CustomButtons = () => {
    const [toggleLogin, setLogin] = useState(false)
    const { account, setAccount } = useContext(DataContext)
    const openDialog = () => {
        if (!toggleLogin) {
            setLogin(true)
        }
    }
    return (
        <HeaderBox>
            {account ? <Profile account={account} setAccount={setAccount} /> : <Button varient='contained' style={{ color: "#1976d2", background: 'white', marginTop: 'auto', marginBottom: 'auto', padding: '2px 40px', borderRadius: '0' }} onClick={() => openDialog()}>Login</Button>}
            <Typography style={{ marginTop: 'auto', marginBottom: 'auto' }}>Become a Seller</Typography>
            <Typography style={{ marginTop: 'auto', marginBottom: 'auto' }}>More</Typography>
            <ShoppingBox style={{ marginTop: 'auto', marginBottom: 'auto' }}>
                <ShoppingCartIcon />
                <Typography>Cart</Typography>
            </ShoppingBox>
            <Login open={toggleLogin} setOpen={setLogin} />
        </HeaderBox>
    )
}

export default CustomButtons