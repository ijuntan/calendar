import React, { useState } from 'react'
import {
    Drawer,
    Toolbar,
    Box,
    List, ListItem, ListItemButton, ListItemIcon,
    Fade,
    styled,
} from '@mui/material'

import { useNavigate } from 'react-router-dom';

const ListText = styled('div')(() => ({
    fontFamily: 'RobotoSlab',
    marginLeft: '-20px',
    color: 'white'
}));

const MenuDrawer = (props) => {
    const[open, setopen] = useState('true')
    const history = useNavigate()

    function handleRoute(route) {
        history(`/${route.toLowerCase()}`)
    }

    return (
        <Drawer variant = "permanent" anchor="left" width = {props.width}
            sx = {{
                width: open? props.width: '90px',
                '& .MuiDrawer-paper': {
                    width: open? props.width: '90px',
                    bgcolor: '#064e40',
                    transition: open ? '0.5s' : '1s',
                    overflowX: 'hidden'
                },
            }}
        >
            <Toolbar/>
            <Toolbar/>
            <Box>
                <List sx = {{}}>
                    {Object.keys(props.item).map((key, index) => (
                    <ListItem key={index} sx = {{padding: '1'}}>
                        <ListItemButton onClick = {() => handleRoute(key)}>
                            <ListItemIcon sx ={{color:'white'}} >
                                {props.item[key]}
                            </ListItemIcon>
                            <Fade in={open} {...(open ? { timeout: 1000 } : {})}>
                                <ListText> 
                                    {key} 
                                </ListText>
                            </Fade>
                        </ListItemButton>
                    </ListItem>
                    ))}
                </List>
            </Box>
            <Box
                flexGrow = '1'
                sx = {{
                    "&:hover":{
                        cursor: 'pointer'
                    }
                }}
                
                onClick = {() => setopen(!open)}
            />
        </Drawer>
    )
}

export default MenuDrawer