import { Box } from '@mui/material'
import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../redux/actions/productActions'
import Products from '../Products/Products'
import Banner from './Banner'
import Slide from './Slide'


const Home = () => {
    const { products } = useSelector(state => state.getProducts)
    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])
    return (
        <Fragment>
            <Products />
            <div style={{ margin: '0.5% 0.5% 0 0.5%', background: '#F2F2F2' }}>
                <Banner />
                <Box style={{ display: 'flex', width: '100%' }}>
                    <Box style={{ width: '85%' }}>
                        <Slide products={products} title='Deal of the Day' state={1} />
                    </Box>
                    <Box style={{ width: '204.012px', background: 'white', height: '283.55px', margin: '10px 0 0 10px', padding: '10px' }}>
                        <img src={adURL} style={{ width: '100%', height: '100%' }}></img>
                    </Box>
                </Box>
                <Slide products={products} title='Trending offers' />
                <Slide products={products} title='Top Selection' />
                <Slide products={products} title="Season's top picks" />
            </div>
        </Fragment>
    )
}

export default Home