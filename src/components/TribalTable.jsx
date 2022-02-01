import React, { useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Toolbar from '@mui/material/Toolbar';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Modal from './organisms/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { update } from '../services/UserSlice'

const TribalTable = () => {

    const businessname = useSelector((state) => state.user.business);
    const dispatch = useDispatch(); 

    const handleInput = (e) => {
          e.preventDefault();
          dispatch(update({businessname}))
    }

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const createData = (name,  protein) => {
        let objeto = {
            llave_name : name,
            llave_protein : protein
        }
        return objeto
    }

    const rows = [
        createData(businessname,  4.0),
        createData('Master Card', 4.3),
        createData('Louis Vuitton', 6.0),
        createData('Bank of America', 4.3),
        createData('Gillette',  3.9),
        createData("McDonald's",  3.9),
        createData("Apple",  3.9),
        createData("Walt Dinsey Company",  3.9),
    ]

    return (
        <div className='table'>
            <Toolbar
                sx={{
                    pl: { sm: 2 },
                    pr: { xs: 1, sm: 1 }
                }}
                >
                    Business
                    <Button variant="contained"> Create Business</Button>
            </Toolbar>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 1050 }} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell>Business</TableCell>
                            <TableCell align="right">Actions</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {rows.map((row) => (
                            <TableRow
                            key={row.llave_name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.llave_name}
                                </TableCell>
                                <TableCell align="right">
                                    <IconButton onClick={handleOpen}>
                                        <EditOutlinedIcon/>
                                    </IconButton>
                                    <IconButton>
                                        <DeleteOutlinedIcon/>
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Modal open={open} handleClose={handleClose} handleInput={handleInput}/>
        </div>
    )
}
export default TribalTable