import { Typography, Box, Button, styled, Divider } from '@mui/material';
import React from 'react'
import Carousel from "react-multi-carousel";
import Countdown from 'react-countdown'
import "react-multi-carousel/lib/styles.css";
const Comp = styled(Box)`
    margin-top:10px;
    background:white;

`
const Deal = styled(Box)`
    padding:10px 15px;
    display:flex;
    // border:1px solid black;
`
const Remaining = styled(Box)`
    display:flex;
    margin:auto 0;
    margin-left:30px;
    align-items:center;
`
const ViewButton = styled(Button)`
    margin-left:auto;
    background-color:#2874f0;
    border-radius:2px;
    font-size:13px;
`
const Image = styled('img')({
    width: 'auto',
    height: '150px'
})
const Item = styled(Box)`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`
const Text = styled(Typography)`
    font-family:emoji;
    font-size:14px;
    margin-top:5px;
`
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};
const Slide = ({ products, title, state }) => {
    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';
    const renderer = ({ hours, minutes, seconds }) => {
        return <Box variant='span'>{hours}:{minutes}:{seconds} left</Box>
    }
    return (
        <Comp>
            <Deal>
                <Typography style={{ margin: 'auto 0', fontFamily: 'emoji', paddingBottom: '3px', fontWeight: 'bold', fontSize: '20px' }}>{title}</Typography>
                {state === 1 && <Remaining>
                    <img src={timerURL} style={{ margin: 'auto 0', width: '19px' }}></img>
                    <Countdown date={Date.now() + 5.04e+7} renderer={renderer} />
                </Remaining>}
                <ViewButton variant='contained'>View All</ViewButton>
            </Deal>
            <Divider />
            <Carousel
                responsive={responsive}
                swipeable={false}
                draggable={false}
                infinite={true}
                autoPlay={true}
                centerMode={true}
                dotListClass='custom-dot-list-style'
                itemClass='carousel-item-padding-40-px'
                containerClass='carousel-container'
            >
                {products.map(product => (
                    <Item textAlign='center' style={{ padding: '10px 5px' }}>
                        <Image src={product.url}></Image>
                        <Text style={{ fontWeight: '600', color: '#212121' }}>{product.title.shortTitle}</Text>
                        <Text style={{ color: 'green' }}>{product.discount}</Text>
                        <Text style={{ color: '#212121', opacity: '0.6' }}>{product.tagline}</Text>
                    </Item>
                ))}
            </Carousel>
        </Comp>
    )
}

export default Slide