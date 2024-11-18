import React, { useState } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Grid, IconButton, TablePagination, TableSortLabel } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import Header from './Header';
import { Form } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Home = ({ contacts, onEdit, onDelete }) => {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  // Sorting function
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('Firstname');

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const createData = (Firstname, Lastname, Email, Phonenumber, Company, JobTitle) => {
    return { Firstname, Lastname, Email, Phonenumber, Company, JobTitle };
  };

  const rows = [
    createData('Aarav', 'Sharma', 'aarav@gmail.com', 9988774455, 'Wipro', 'Intern'),
    createData('Priya', 'Verma', 'priya@gmail.com', 9874563217, 'TCS', 'Manager'),
    createData('Ajay', 'Gupta', 'ajay@gmail.com', 7896541239, 'Cognizant', 'Software Developer'),
    createData('Sanjana', 'Sri', 'sanjana@gmail.com', 6547893214, 'LG', 'Sr. Developer'),
    createData('Sai', 'Kavya', 'kavya@gmail.com', 8974563219, 'Target', 'Analyst'),
    createData('Aarav', 'Sharma', 'aarav@gmail.com', 9988774455, 'Wipro', 'Intern'),
    createData('Priya', 'Verma', 'priya@gmail.com', 9874563217, 'TCS', 'Manager'),
    createData('Ajay', 'Gupta', 'ajay@gmail.com', 7896541239, 'Cognizant', 'Software Developer'),
    createData('Sanjana', 'Sri', 'sanjana@gmail.com', 6547893214, 'LG', 'Sr. Developer'),
    createData('Sai', 'Kavya', 'kavya@gmail.com', 8974563219, 'Target', 'Analyst'),
    createData('Aarav', 'Sharma', 'aarav@gmail.com', 9988774455, 'Wipro', 'Intern'),
    createData('Priya', 'Verma', 'priya@gmail.com', 9874563217, 'TCS', 'Manager'),
    createData('Ajay', 'Gupta', 'ajay@gmail.com', 7896541239, 'Cognizant', 'Software Developer'),
    createData('Sanjana', 'Sri', 'sanjana@gmail.com', 6547893214, 'LG', 'Sr. Developer'),
    createData('sree', 'Kavya', 'kavya@gmail.com', 8974563219, 'Target', 'Analyst'),
    createData('Aarav', 'Sharma', 'aarav@gmail.com', 9988774455, 'Wipro', 'Intern'),
    createData('Priya', 'Verma', 'priya@gmail.com', 9874563217, 'TCS', 'Manager'),
    createData('Abhijeet', 'Gupta', 'abi@gmail.com', 7896541239, 'Cognizant', 'Software Developer'),
    createData('Sanjana', 'Sri', 'sanjana@gmail.com', 6547893214, 'LG', 'Sr. Developer'),
    createData('Sai', 'Kavya', 'kavya@gmail.com', 8974563219, 'Target', 'Analyst'),
    createData('Ajay', 'Gupta', 'ajay@gmail.com', 7896541239, 'Cognizant', 'Software Developer'),
    createData('Sanjana', 'Sri', 'sanjana@gmail.com', 6547893214, 'LG', 'Sr. Developer'),
    createData('Sai', 'Kavya', 'kavya@gmail.com', 8974563219, 'Target', 'Analyst'),
    createData('Aarav', 'Sharma', 'aarav@gmail.com', 9988774455, 'Wipro', 'Intern'),
    createData('shreya', 'Verma', 'shreya@gmail.com', 9874563217, 'TCS', 'Manager'),
    // Add more rows as needed

  ];

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [edit,setEdit]=useState(false);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
  

  return (
    <>
      <Header />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
            
              <StyledTableCell
                align="right"
                sortDirection={orderBy === 'Firstname' ? order : false}
              >Firstname
                <TableSortLabel
                  active={orderBy === 'Firstname'}
                  direction={orderBy === 'Firstname' ? order : 'asc'}
                 //onClick={() => handleRequestSort('Firstname')}
                >
                  Firstname
                  
                </TableSortLabel>
                
              </StyledTableCell>
              
              <StyledTableCell align="left">Lastname</StyledTableCell>
              <StyledTableCell align="left">Email</StyledTableCell>
              <StyledTableCell align="left">Phone number</StyledTableCell>
              <StyledTableCell align="left">Company</StyledTableCell>
              <StyledTableCell align="left">Job Title</StyledTableCell>
              <StyledTableCell align="left">Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <StyledTableRow key={row.Firstname}>
                  <StyledTableCell component="th" scope="row" align="center">
                    {row.Firstname}
                  </StyledTableCell>
                  <StyledTableCell align="left">{row.Lastname}</StyledTableCell>
                  <StyledTableCell align="left">{row.Email}</StyledTableCell>
                  <StyledTableCell align="left">{row.Phonenumber}</StyledTableCell>
                  <StyledTableCell align="left">{row.Company}</StyledTableCell>
                  <StyledTableCell align="left">{row.JobTitle}</StyledTableCell>
                  <StyledTableCell align="left">
                    <IconButton onClick={() => onEdit(row)}>
                        
                      <Edit />
                    </IconButton>
         
                    <IconButton onClick={() => onDelete(row.Firstname)}>
                      <Delete />
                    </IconButton>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            {emptyRows > 0 && (
              <StyledTableRow style={{ height: 53 * emptyRows }}>
                <StyledTableCell colSpan={6} />
              </StyledTableRow>
            )}
      
          </TableBody>
        </Table>
      </TableContainer>
    
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      
    </>
  );
};

export default Home; 

