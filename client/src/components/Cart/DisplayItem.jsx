import { Typography, styled } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
const Image = styled('img')(({ theme }) => ({
    width: '125px',
    height: '125px'
}))
const Container = styled(Box)(({ theme }) => ({
    display: 'flex',
    marginTop: '20px'
}))
const Text = styled(Typography)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '30px'
}))
const DisplayItem = ({ products }) => {
    console.log(products)
    return (
        <>
            {
                products.map(
                    product => (
                        <Container>
                            <Image src={product.data.url} />
                            <Text>
                                <Typography>{product.data.title.shortTitle}</Typography>
                                <Box>
                                    <Box component='span' style={{ fontSize: 15 }}>₹{product.data.price.cost}</Box>&nbsp;&nbsp;
                                    <Box component='span' style={{ fontSize: 12, color: '#878787' }}><strike>₹{product.data.price?.mrp}</strike></Box>&nbsp;&nbsp;
                                    <Box component='span' style={{ fontSize: 12, color: '#388E3C' }}>{product.data.price.discount} off</Box>
                                </Box>
                            </Text>
                        </Container>
                    )
                )
            }
        </>
    )
}

export default DisplayItem