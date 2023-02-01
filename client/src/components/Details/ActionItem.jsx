import { ShoppingCart as Cart } from '@mui/icons-material'
import { FlashOn as Flash } from '@mui/icons-material'
import { Box, Button, Alert, AlertTitle, styled } from '@mui/material'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/actions/cartActions'
import { useState } from 'react'
import { DataContext } from '../../context/DataProvider'
const Left = styled(Box)(({ theme }) => ({
    minWidth: '40%',
    padding: '40px 0 0 80px',
    [theme.breakpoints.down('lg')]: {
        padding: '20px 0 0 40px'
    },
    [theme.breakpoints.down('sm')]: {
        padding: '0px',
    }
}))
const StyledButton = styled(Button)(({ theme }) => ({
    width: '45%',
    height: '50px',
    borderRadius: '2px',
    [theme.breakpoints.down('lg')]: {
        width: '46%'
    },
    [theme.breakpoints.down('sm')]: {
        width: '45%'
    }
}))


const Image = styled('img')(({ theme }) => ({
    padding: '15px',
    [theme.breakpoints.down('sm')]: {
        padding: '0px',
        width: '100%'
    }

}))
const Notification = styled(Alert)(({ theme }) => ({
    position: 'fixed',
    zIndex: '10',
    width: '20%',
    right: '5px',
    top: '5px',
    [theme.breakpoints.down('md')]: {
        height: '36px',
        width: '199px'
    }
}))
const ActionItem = ({ product }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [quantity, setQuantity] = useState(1)
    const [cart, setCart] = useState(false)
    const addItemToCart = () => {
        if (!account) {
            setCart(true)
            setTimeout(() => { setCart(false) }, 3000)
        }
        else {
            // console.log(product.id)
            dispatch(addToCart(product?.id, quantity))
            navigate('/cart')
        }
    }
    const { account } = useContext(DataContext)
    return (
        <>
            {cart ? <Notification severity="error">
                <AlertTitle>Login to access cart</AlertTitle>
            </Notification> : <></>}
            <Left>
                <Box style={{ padding: '15px 20px', border: '1px solid #f0f0f0', width: '90%' }}>
                    <Image src={product?.detailUrl}></Image>
                </Box>
                <StyledButton variant='contained' style={{ marginRight: 10, background: '#ff9f00', marginLeft: 10 }} onClick={() => addItemToCart()}><Cart />Add to Cart</StyledButton>
                <StyledButton variant='contained' style={{ background: '#fb541b' }}><Flash />Buy Now</StyledButton>
            </Left >
        </>
    )
}

export default ActionItem