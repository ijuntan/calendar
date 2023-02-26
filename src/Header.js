import { AccountBalanceRounded, AccountCircle} from '@mui/icons-material'
import { Grid, AppBar, CssBaseline, IconButton, TextField, Toolbar, Typography } from '@mui/material'
import React from 'react'


const Header = () => {
  return (
    <div>
        <AppBar sx = {{zIndex: (theme) => theme.zIndex.drawer + 1, bgcolor: '#0DAD8D'}}>
            <CssBaseline/>
            <Toolbar>
            </Toolbar>

            <Toolbar>
                {/* <Typography sx = {{flexGrow: 1}}/> */}
                <Grid container sx = {{marginBottom:'10px'}} gap = {1}>
                  <IconButton color = "inherit">
                    <AccountCircle sx = {{transform: 'scale(1.7)'}}/>
                  </IconButton>

                  <TextField placeholder = "Asiap Bang"
                    size="small"
                  >

                  </TextField>
                </Grid>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Header