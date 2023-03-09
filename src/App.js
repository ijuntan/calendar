import { 
  Grid,
  Toolbar,
  Card
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
import './index.css'
import MenuDrawer from "./MenuDrawer";
import Navigation from "./Navigation";

const drawerItem = {
  'Dashboard': <HomeIcon/>,
  'Kalendar': <KalendarIcon/>,
  'Tugas': <TugasIcon/>,
  'Perkara': <PerkaraIcon/>,
  'Dokumen': <DokumenIcon/>,
  'Aktivitas': <AktivitasIcon/>,
}

const drawerWidth = '250px'

function App() {
  return (
    <div>
      <Header/>
      
      <Grid 
        container 
        wrap = 'nowrap' 
        sx = {{
          overflow: 'hidden', 
          height: '100vh',
          bgcolor: '#DFEAE2',
        }} 
      >
        <Grid container item sx = {{width: 'auto'}}>
          <div>
            <MenuDrawer item = {drawerItem} width = {drawerWidth}/>
          </div>
        </Grid>

        <Grid container item
          sx = {{
            flexGrow : '1',
            px: '50px',
          }}
        >
          <Navigation logo = {drawerItem}/>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
