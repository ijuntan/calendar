import { AccessAlarm, AccountCircle, PlayArrow, Pause} from '@mui/icons-material'
import { Fade, Paper, Grid, AppBar, CssBaseline, IconButton, TextField, Toolbar, Typography, Icon } from '@mui/material'
import React, { useState, useRef, useEffect } from 'react'
import './index.css'

const name = 'Juntan'

const Header = () => {
  const [time, setTime] = useState(0)
  const [run, setRun] = useState(true)
  const [show, setShow] = useState(false)

  const timer = useRef()

  useEffect(() => {
    if(run) {
      timer.current = setInterval(() => {
        setTime(pre => pre + 1)
      }, 1000)
    }
    return () => clearInterval(timer.current)
  }, [run])

  const format = (time) => {
    let hours = Math.floor(time / 60 / 60 % 24)
    let minutes = Math.floor(time / 60 % 60)
    let seconds = Math.floor(time % 60)
  
    hours = hours < 10 ? '0' + hours : hours
    minutes = minutes < 10 ? '0' + minutes : minutes
    seconds = seconds < 10 ? '0' + seconds : seconds
  
    return hours + ':' + minutes + ':' + seconds
  }

  const handleShow = () => {
    setTime(0)
    show ? setRun(false) : setRun (true)
    setShow(!show)
  }

  return (
    <div>
        <AppBar sx = {{zIndex: (theme) => theme.zIndex.drawer + 1, bgcolor: '#0DAD8D'}}>
            <CssBaseline/>
            <Toolbar>
              <Typography variant = 'h4' fontFamily='RobotoSlab'>
                Legal Plus
              </Typography>
            </Toolbar>

            <Toolbar>
                {/* <Typography sx = {{flexGrow: 1}}/> */}
                <Grid container sx = {{marginBottom:'10px'}} gap = {1}>
                  <IconButton color = "inherit">
                    <AccountCircle sx = {{transform: 'scale(1.7)'}}/>
                  </IconButton>

                  <TextField 
                    placeholder = "Cari"
                    size = "small"
                  />

                  <IconButton onClick = {handleShow}>
                    <AccessAlarm sx = {{transform: 'scale(1.2)'}}/>
                  </IconButton>

                  <Fade in = {show}>
                    <Paper sx = {{display:'flex', alignItems: 'center', px: '10px'}}>
                      <Typography>
                        {format(time)}
                      </Typography>
                      <IconButton onClick = {() => setRun(!run)}>
                        { run ? <Pause/> : <PlayArrow/> }
                      </IconButton>
                    </Paper>
                  </Fade>
                </Grid>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Header