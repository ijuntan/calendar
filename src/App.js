import { 
  Drawer, 
  Box, 
  Toolbar, 
  Paper, 
  Typography, 
  List, ListItem, ListItemButton, ListItemIcon, ListItemText,
  Grid, 
  TextField,
  Table, TableHead, TableBody, TableRow, TableCell, TablePagination
} from "@mui/material";

import { 
  Home as HomeIcon, 
  CalendarMonth as KalendarIcon,
  RateReview as TugasIcon,
  Work as PerkaraIcon,
  Folder as DokumenIcon,
  MenuOpen as AktivitasIcon,
} 
  from "@mui/icons-material";
import React from "react";
import Header from "./Header";
import "./App.css"

const drawerItem = {
  'Papan Informasi': <HomeIcon/>,
  'Kalendar': <KalendarIcon/>,
  'Tugas': <TugasIcon/>,
  'Perkara': <PerkaraIcon/>,
  'Dokumen': <DokumenIcon/>,
  'Aktivitas': <AktivitasIcon/>,
}

const tableHeader = [
  'Ditugaskan',
  'Jatuh Tempo',
  'Perkara',
  'Waktu'
]

const tableItem = [
  {
    'Ditugaskan': 'Chris',
    'Jatuh Tempo': '10/9/2000',
    'Perkara': 'Tabrak Mobil',
    'Waktu': '10/8/2000'
  },
  {
    'Ditugaskan': 'Bryan',
    'Jatuh Tempo': '10/9/2000',
    'Perkara': 'Tabrak Chris',
    'Waktu': '10/8/2000'
  },
  {
    'Ditugaskan': 'Chris',
    'Jatuh Tempo': '10/9/2000',
    'Perkara': 'Tabrak Mobil',
    'Waktu': '10/8/2000'
  },
  {
    'Ditugaskan': 'Chris',
    'Jatuh Tempo': '10/9/2000',
    'Perkara': 'Tabrak Mobil',
    'Waktu': '10/8/2000'
  },
  {
    'Ditugaskan': 'Chris',
    'Jatuh Tempo': '10/9/2000',
    'Perkara': 'Tabrak Mobil',
    'Waktu': '10/8/2000'
  },
  {
    'Ditugaskan': 'Chris',
    'Jatuh Tempo': '10/9/2000',
    'Perkara': 'Tabrak Mobil',
    'Waktu': '10/8/2000'
  },
]

function App() {
  return (
    <div >
      <Header/>

      <Grid container wrap = "nowrap" sx = {{overflow: 'hidden'}} justifyContent = 'space-around'>
        <Grid item sx = {{borderStyle: 'dashed',borderColor: 'yellow', width: '300px'}}>
          <Drawer variant = "permanent" anchor="left" 
            sx = {{
              width:'300px',
              '& .MuiDrawer-paper': {
                width: '300px',
              bgcolor: '#064E40'
              }}}
          >
            <Toolbar/>
            <Toolbar/>
            <Box >
                <List>
                  {Object.keys(drawerItem).map((key, index) => (
                    <ListItem key={index} disablePadding>
                      <ListItemButton>
                        <ListItemIcon sx ={{color:'white'}}>
                          {drawerItem[key]}
                        </ListItemIcon>
                        <ListItemText sx = {{color:'white'}} primary={key} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
            </Box>
          </Drawer>
        </Grid>

        <Grid item 
          sx = {{
            flexGrow: '1', 
            padding:'10vh', 
            bgcolor:'#8DD8CC',
            height:'100vh'
          }}
        >
          <Toolbar/>
          <Toolbar/>
          <Grid container item
            direction = 'column'
            sx = {{borderStyle: 'dotted',borderColor: 'gray'}}
          >
            <Grid item sx = {{borderStyle: 'dashed',borderColor: 'red'}}>
              <Typography variant = "h2">
                Sample Judul
              </Typography>
            </Grid>

            <Grid item sx = {{borderStyle: 'dashed',borderColor: 'blue'}}>
              <TextField placeholder = "Cari masalah"
                    size="small"
              >
              </TextField>
            </Grid>

            <Grid item sx = {{borderStyle: 'dashed',borderColor: 'yellow'}}>
              <Table>
                <TableHead>
                  <TableRow>
                    {tableHeader.map((item, index) => (
                      <TableCell>
                        {item}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {tableItem.map((item, index) => (
                    <TableRow>
                      <TableCell>
                        {item['Ditugaskan']}
                      </TableCell>
                      <TableCell>
                        {item["Jatuh Tempo"]}
                      </TableCell>
                      <TableCell>
                        {item['Perkara']}
                      </TableCell>
                      <TableCell>
                        {item['Waktu']}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
                <TablePagination>

                </TablePagination>
              </Table>
                        
            </Grid>

          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
