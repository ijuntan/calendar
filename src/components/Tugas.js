import React, { useState } from 'react'
import { 
    styled,
    Card,
    Typography, 
    Grid, 
    TextField,
    Toolbar,
    Table, TableHead, TableBody, TableRow, TableCell, TablePagination, IconButton, Button
} from "@mui/material";

import {
    KeyboardArrowDown,
    Search as SearchIcon
} from '@mui/icons-material'

const tableHeader = [
'Aksi',
'Jatuh Tempo',
'Selesai',
'Deskripsi',
'Ditugaskan Oleh',
'Ditugaskan Untuk',
'Perkara',
'Waktu'
]

const tableItem = [
{
    'Aksi': 'Edit',
    'Jatuh Tempo': '02/20/2002',
    'Selesai': '30/20/2010',
    'Deskripsi': 'Melihat TKP',
    'Ditugaskan Oleh': 'James',
    'Ditugaskan Untuk': 'Bryan',
    'Perkara': 'Tabrak Mobil Sampai Mati, Dasar Deddy Corbuzier',
    'Waktu': 'Tambah'
},
{
    'Aksi': 'Edit',
    'Jatuh Tempo': '02/20/2002',
    'Selesai': '30/20/2010',
    'Deskripsi': 'Melihat TKP',
    'Ditugaskan Oleh': 'James',
    'Ditugaskan Untuk': 'Bryan',
    'Perkara': 'Tabrak Mobil',
    'Waktu': 'Tambah'
},
{
    'Aksi': 'Edit',
    'Jatuh Tempo': '02/20/2002',
    'Selesai': '30/20/2010',
    'Deskripsi': 'Melihat TKP',
    'Ditugaskan Oleh': 'James',
    'Ditugaskan Untuk': 'Bryan',
    'Perkara': 'Tabrak Mobil',
    'Waktu': 'Tambah'
},
{
    'Aksi': 'Edit',
    'Jatuh Tempo': '02/20/2002',
    'Selesai': '30/20/2010',
    'Deskripsi': 'Melihat TKP',
    'Ditugaskan Oleh': 'James',
    'Ditugaskan Untuk': 'Bryan',
    'Perkara': 'Tabrak Mobil',
    'Waktu': 'Tambah'
},
{
    'Aksi': 'Edit',
    'Jatuh Tempo': '02/20/2002',
    'Selesai': '30/20/2010',
    'Deskripsi': 'Melihat TKP',
    'Ditugaskan Oleh': 'James',
    'Ditugaskan Untuk': 'Bryan',
    'Perkara': 'Tabrak Mobil',
    'Waktu': 'Tambah'
},
{
    'Aksi': 'Edit',
    'Jatuh Tempo': '02/20/2002',
    'Selesai': '30/20/2010',
    'Deskripsi': 'Melihat TKP',
    'Ditugaskan Oleh': 'James',
    'Ditugaskan Untuk': 'Bryan',
    'Perkara': 'Tabrak Mobil',
    'Waktu': 'Tambah'
},
]

const Tugas = (props) => {
    const [selesai, handleSelesai] = useState(false)
    const [belumSelesai, handleBelumSelesai] = useState(false)
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
    
    const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
    };

    const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - tableItem.length) : 0;

    return (
        <Grid 
            container
            direction = 'column'
            gap = {2}
            sx = {{transition: '2s'}}
        >
            <Toolbar/>
            <Toolbar/>
            <Grid container item>
                <IconButton 
                    disabled
                    sx = {{
                        transform: 'scale(2.5)',
                        paddingTop: '11px',
                        marginLeft: '5px',
                        marginRight: '15px',
                        '&.Mui-disabled': {
                            color: '#207567'
                        }
                    }}
                > 
                    {props.logo['Tugas']} 
                </IconButton>

                <Typography 
                    variant = "h2" 
                    sx = {{fontFamily:'RobotoSlab'}}
                >
                    Tugas
                </Typography>
            </Grid>

            <Grid container item>
                <TextField 
                    placeholder = "Cari masalah"
                    size = "small"
                    sx = {{
                        bgcolor: 'white',
                        borderRadius: '5px',
                        '& .MuiOutlinedInput-root': {
                            '&:hover fieldset': {
                            borderColor: '#207567',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#207567',
                            },
                        },
                    }}
                    InputProps = {{
                        endAdornment: 
                        <SearchIcon 
                            sx = {{
                                marginRight: '-5px',
                                color: 'gray'
                            }}
                        />
                    }}
                    fullWidth
                >
                </TextField>
            </Grid>

            <Grid container item gap = {2}>
                <Button variant = "contained" sx = {{bgcolor: selesai ? '#1976d2' : '#207567'}} onClick = {() => handleSelesai(!selesai)}>
                    Selesai
                </Button>

                <Button variant = "contained" sx = {{bgcolor: belumSelesai ? '#1976d2' : '#207567'}} onClick = {() => handleBelumSelesai(!belumSelesai)}>
                    Belum Selesai
                </Button>

                <Typography sx = {{flexGrow: '1'}}/>

                <Button variant = "contained" sx = {{bgcolor: '#207567'}} endIcon = {<KeyboardArrowDown/>}>
                    Filter
                </Button>
            </Grid>

            <Grid container item>
                <Card raised sx = {{width: '100%'}}>
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
                        {tableItem.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item) => (
                            <TableRow>
                                {tableHeader.map(head => (
                                    <TableCell>
                                        {item[head]}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}

                    {emptyRows > 0 && (
                        <TableRow
                            style={{
                                height: 53 * emptyRows,
                            }}
                        >
                            <TableCell colSpan={tableHeader.length} />
                        </TableRow>
                    )}
                    </TableBody>

                    <TablePagination
                        rowsPerPageOptions={[5, 10, 25]}
                        count = {tableItem.length}
                        rowsPerPage = {rowsPerPage}
                        page = {page}
                        onPageChange = {handleChangePage}
                        onRowsPerPageChange = {handleChangeRowsPerPage}
                    >

                    </TablePagination>
                    </Table>
                </Card>
            </Grid>

            <Grid container item>
                <Typography sx = {{flexGrow:'1'}}/>
                <Button variant = "contained" sx = {{bgcolor: '#207567'}}>
                    Tambah
                </Button>
            </Grid>
        </Grid>
    )
}

export default Tugas