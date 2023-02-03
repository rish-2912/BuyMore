
import { Box, Button, Typography, styled, Grid } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProductDetails } from '../../redux/actions/productActions'
import ActionItem from './ActionItem'
import ProductDetail from './ProductDetail'
const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
const Container = styled(Grid)(({ theme }) => ({
    background: 'white',
    display: 'flex',
    height: '685px',
    [theme.breakpoints.down('md')]: {
        margin: '0',
        height: '100%'
    }
}))
const Right = styled(Grid)`
    margin-top:50px;
    padding:0 0 0 15px;
`
const DetailBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
        // overflow: 'hidden',
        background: '#f2f2f2'
    }
}))
const Details = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    const { loading, product } = useSelector(state => state.getProductDetails)
    useEffect(() => {
        if (product && id != product.id)
            dispatch(getProductDetails(id))
    }, [dispatch, id, product, loading])
    return (
        <DetailBox>
            <Container container>
                <Grid item lg={4} md={4} sm={8} xs={12}>
                    <ActionItem product={product} />
                </Grid>
                <Right item lg={8} md={8} sm={8} xs={12}>
                    <Typography>{product?.title?.longTitle}</Typography>
                    <Typography style={{ marginTop: 5, color: '#878787', fontSize: 14 }}>
                        8 Ratings and 1 Reviews
                    </Typography>
                    <Typography>
                        <Box component='span' style={{ fontSize: 28 }}>₹{product?.price?.cost}</Box>&nbsp;&nbsp;&nbsp;
                        <Box component='span' style={{ color: '#878787' }}><strike>₹{product?.price?.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                        <Box component='span' style={{ color: '#388E3C' }}>{product?.price?.discount} off</Box>
                    </Typography>
                    <ProductDetail product={product} />
                </Right>
            </Container>
        </DetailBox>
    )
}

export default Details