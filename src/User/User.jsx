
import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Link } from 'react-router-dom';
import NewUser from './NewUser';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';

function User({ userData, deleteHandler, setSelectedUser}) {
   
    


    return (
        <div >
            <div>

            <Link to="/newuser">
            <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mt-5 ml-[75rem]">
            New User
        </button>
        
            </Link>
            <input
        id="search"
        type="text"
        className="px-4 py-2 border rounded-lg w-64 ml-2"
        placeholder="Enter username for search "
      />
            </div>
          
             
      
        <TableContainer component={Paper} className="shadow-md rounded-lg mx-auto w-full max-w-[90%]">
            <Table className="min-w-full mt-7">
                {/* Table Header */}
                <TableHead>
                    <TableRow className="bg-gray-100">
                        <TableCell className="px-6 py-3 text-sm font-medium text-gray-700">Name</TableCell>
                        <TableCell className="px-6 py-3 text-sm font-medium text-gray-700">Email</TableCell>
                        <TableCell className="px-6 py-3 text-sm font-medium text-gray-700">Mobile</TableCell>
                        <TableCell className="px-6 py-3 text-sm font-medium text-gray-700">Role</TableCell>
                        <TableCell className="px-6 py-3 text-sm font-medium text-gray-700">Type</TableCell>
                        <TableCell className="px-6 py-3 text-sm font-medium text-gray-700">Created On</TableCell>
                        <TableCell className="px-6 py-3 text-sm font-medium text-gray-700">Actions</TableCell>
                    </TableRow>
                </TableHead>
                {/* Table Body */}
                <TableBody>
                    {userData.map((user, index) => (
                        <TableRow key={index}    onClick={() => setSelectedUser(user)} className="hover:bg-gray-50">
                            <TableCell className="px-6 py-4 text-sm text-gray-600">{user.name}</TableCell>
                            <TableCell className="px-6 py-4 text-sm text-gray-600">{user.email}</TableCell>
                            <TableCell className="px-6 py-4 text-sm text-gray-600">{user.mobile}</TableCell>
                            <TableCell className="px-6 py-4 text-sm text-gray-600">{user.role}</TableCell>
                            <TableCell className="px-6 py-4 text-sm text-gray-600">{user.type}</TableCell>
                            <TableCell className="px-6 py-4 text-sm text-gray-600">{user.createdOn}</TableCell>

                            <TableCell className="px-6 py-4 text-sm text-blue-500">
                                <Link to={"/newuser"}>
                                <ModeEditIcon
style={{ cursor: 'pointer', marginRight: '10px' }}
/>
                                </Link>
                  
              <DeleteIcon
                   style={{ cursor: 'pointer' }}
                   onClick={() => deleteHandler(index)} 
           
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

export default User;




