import React, { useContext } from 'react'
import { AppBar, Toolbar, styled, Box, InputBase, Alert, AlertTitle } from '@mui/material'
import img from '../../assets/logo2.png'
import Search from '../Search/Search'
import CustomButtons from '../CustomButtons/CustomButtons'
import { DataContext } from '../../context/DataProvider'
import { useState } from 'react'
import { useEffect } from 'react'
const StyledHeader = styled(AppBar)`
    height:auto;
    display:flex;
    z-index:9;
    
`
const Component = styled(Box)`
    // margin-left:6.7%;
`
// const Image = styled('img')({
//     width: 10
// })
function Header() {
    const { account, setAccout } = useContext(DataContext)
    const [ok, setOk] = useState(false)
    useEffect(() => { setTimeout(() => { if (account) { setOk(true); setTimeout(() => { setOk(false) }, 4000) } }) }, [account])
    return (
        <div className='header'>
            {ok ? <Alert severity="success" style={{ position: 'fixed', zIndex: '10', width: '20%', right: '5px', top: '5px' }}>
                <AlertTitle>Success</AlertTitle>
                User signedin successfully
            </Alert> : <></>}
            <StyledHeader>
                <Toolbar style={{ display: 'flex', justifyContent: 'center', minHeight: '55px' }}>
                    <Box style={{ display: 'flex', width: '50%' }}>
                        <Component>
                            <img src={img} style={{ height: '45px' }} />
                        </Component>
                        <Search />
                    </Box>
                    <CustomButtons style={{ width: '50%' }} />
                </Toolbar>
            </StyledHeader>
        </div>
    )
}

export default Header