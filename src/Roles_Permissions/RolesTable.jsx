import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

function StatusButton({ status }) {
  return (
    <Stack direction="row" spacing={1} justifyContent="center">
      <Button
        variant="contained"
        color={status === 'Active' ? 'success' : 'error'}
        sx={{
          width: '100px',
          textTransform: 'none',
          backgroundColor: status === 'Active' ? 'green' : 'red', 
          '&:hover': {
            backgroundColor: status === 'Active' ? 'darkgreen' : 'darkred', 
          },
        }}
      >
       {status}
      </Button>
    </Stack>
  );
}

function RolesTable({roleData,deleteRoleHandler, editRoleHandler }) {


  

  return (
    <div >
     <div className='flex justify-end pr-20'>
     <Link to="/rolesform">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mt-7 ml-auto sm:ml-4 md:ml-8 lg:ml-16 xl:ml-[67rem]"

        >
          Add New Role
        </button>
      </Link>
     </div>

<TableContainer component={Paper} sx={{ mt: 3, width: '97%', ml: 3 }}>
  <Table>
    <TableHead>
      <TableRow>
        <TableCell align="center" sx={{ width: '25%' }}>Role</TableCell>
        <TableCell align="center" sx={{ width: '20%' }}>Status</TableCell>
        <TableCell align="center" sx={{ width: '25%' }}>Created On</TableCell>
        <TableCell align="center" sx={{ width: '25%' }}>Actions</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {roleData.map((row, index) => (
        <TableRow key={index}>
          <TableCell align="center">{row.role}</TableCell>
          <TableCell align="center">
            <StatusButton status={row.status} />
          </TableCell>
          <TableCell align="center">{row.createdOn}</TableCell>
          <TableCell
            align="center"
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height:'70px'
            }}
          >
            <Link to={'/rolesform'}>
              <ModeEditIcon
                sx={{ cursor: 'pointer', marginRight: 2 }}
                onClick={() => editRoleHandler(row)}
              />
            </Link>

            <DeleteIcon
              sx={{ cursor: 'pointer' }}
              onClick={() => deleteRoleHandler(row.role)}
            />
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</TableContainer>

    
    </div>
    
  );
}

export default RolesTable;
