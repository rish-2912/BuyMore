import React from 'react'
import { InputBase, Box, styled } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
const SearchContainer = styled(Box)`
    background:#fff;
    width:70.8%;
    margin-left:2%;
    display:flex;
`
const InputSearchBase = styled(InputBase)`
    width:100%;
    font-weight:normal;

`
const SearchIconWrapper = styled(Box)`
    color:black;
    
`
const Search = () => {
    return (
        <SearchContainer style={{ height: '32px', marginTop: 'auto', marginBottom: 'auto' }} >
            <InputSearchBase placeholder='Search for Products,brands and more' style={{ marginLeft: '2%' }} />
            <SearchIconWrapper>
                <SearchIcon style={{ paddingTop: '4.5px' }} />
            </SearchIconWrapper>
        </SearchContainer >
    )
}

export default Search