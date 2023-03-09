import React from 'react'
import Tugas from './components/Tugas'
import Dashboard from './components/Dashboard'
import { Routes, Route } from 'react-router-dom'

export default function Navigation(props) {
    return(
        <Routes>
            <Route path = '/' exact element = { <Tugas logo = {props.logo}/> } />
            <Route path = '/tugas' exact element = { <Tugas logo = {props.logo}/> } />
            <Route path = '/dashboard' element = { <Dashboard/> } />
        </Routes>
    )
}