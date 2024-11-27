import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import User from './User/User';
import Myprofile from './Profile/Myprofile';
import NewUser from './User/NewUser';
import HomePg from './Dashboard/HomePg';
import RoleForm from './Roles_Permissions/RoleForm';
import RolesTable from './Roles_Permissions/RolesTable';
import Data from './Roles_Permissions/RolesTable';
import Permissions from './Roles_Permissions/Permissions';
function App() {

  const defaultData = [
    {
      name: 'Hari',
      email: 'huuhuh@gmail.com',
      mobile: '9874678945',
      role: 'Developer',
      type: 'Regular User',
      createdOn: '21-11-2024',
      actions: 'Edit | Delete',
    },
    {
      name: 'Krishna Chand Tiwari',
      email: 'admint@example.com',
      mobile: '9598370639',
      role: 'System Administrator',
      type: 'System Administrator',
      createdOn: '14-11-2024',
      actions: 'Edit | Delete',
    },
    {
      name: 'Test',
      email: 'test@gmail.com',
      mobile: '9876543210',
      role: 'Office Boy',
      type: 'Regular User',
      createdOn: '30-09-2024',
      actions: 'Edit | Delete',
    },
          {
            name: 'Suresh',
            email: 'ito.kalaiyamun@gmail.com',
            mobile: '9855048819',
            role: 'Office Boy',
            type: 'Regular User',
            createdOn: '18-09-2024',
            actions: 'Edit | Delete',
          },
          {
            name: 'Demo',
            email: 'demko@gmail.com',
            mobile: '1234567897',
            role: 'User',
            type: 'Regular User',
            createdOn: '13-09-2024',
            actions: 'Edit | Delete',
          },
          {
            name: 'Customer',
            email: 'customer@domain.com',
            mobile: '9998887770',
            role: 'Customer',
            type: 'Regular User',
            createdOn: '10-09-2024',
            actions: 'Edit | Delete',
          },
          {
            name: 'Site Admin',
            email: 'admin@domain.com',
            mobile: '9998887770',
            role: 'Site Admin',
            type: 'System Administrator',
            createdOn: '10-09-2024',
            actions: 'Edit | Delete',
          },
          {
            name: 'Alice Brown',
            email: 'alice@example.com',
            mobile: '7896541230',
            role: 'Developer',
            type: 'Regular User',
            createdOn: '01-08-2024',
            actions: 'Edit | Delete',
          },
          {
            name: 'Bob Martin',
            email: 'bobmartin@example.com',
            mobile: '9871234560',
            role: 'Designer',
            type: 'Regular User',
            createdOn: '05-07-2024',
            actions: 'Edit | Delete',
          },
          {
            name: 'John Doe',
            email: 'johndoe@example.com',
            mobile: '9638527410',
            role: 'Manager',
            type: 'System Administrator',
            createdOn: '12-06-2024',
            actions: 'Edit | Delete',
          },
  ];

  const [userData, setUserData] = useState(() => {
    const storedData = localStorage.getItem('userData');
    return storedData ? JSON.parse(storedData) : defaultData; 
  });

  useEffect(() => {
    if (userData !== defaultData) {
      localStorage.setItem('userData', JSON.stringify(userData)); 
    }
  }, [userData]); 

  // Function to add a new user
  function addUser(newUser) {
    const updatedUserData = [
      ...userData,
      {
        ...newUser,
        type: newUser.type , 
        actions: 'Edit | Delete',
      },
    ];
    setUserData(updatedUserData); 
  }

  // Function to handle user deletion
  function deleteHandler(indexToDelete) {
    const updatedUserData = userData.filter((user, index) => index !== indexToDelete); 
    setUserData(updatedUserData); 
  }

  const [selectedUser, setSelectedUser] = useState(null);

  const updateUser = (updatedUser) => {
    setUserData(userData.map((user) => (user.email === updatedUser.email ? updatedUser : user)));
  };

  const Data = [
    { role: 'User', status: 'Active', createdOn: '14-06-2024' },
    { role: 'Agent', status: 'Active', createdOn: '22-05-2024' },
    { role: 'super-admin', status: 'Active', createdOn: '20-05-2024' },
    { role: 'test', status: 'Inactive', createdOn: '03-05-2024' },
    { role: 'Admin', status: 'Active', createdOn: '01-05-2024' },
    { role: 'editor', status: 'Active', createdOn: '28-04-2024' },
    { role: 'developer', status: 'Active', createdOn: '26-09-2024' },
  ];

 
  const [roleData, setRoleData] = useState(() => {
    const storedroleData = localStorage.getItem('roleData');
    try {

      return storedroleData && storedroleData !== 'undefined'
        ? JSON.parse(storedroleData)
        : Data;
    } catch (e) {
      console.error('Error parsing roleData:', e);
      return Data; 
    }
  });

  
  useEffect(() => {
    if (roleData && Array.isArray(roleData)) {
      localStorage.setItem('roleData', JSON.stringify(roleData));
    }
  }, [roleData]);

  // Add a new role
  function addRole(newRole) {
    const updatedRoleData = [
      ...roleData,
      {
        ...newRole,
        createdOn: new Date().toLocaleDateString(),
      },
    ];
    setRoleData(updatedRoleData);
  }
  function deleteRoleHandler(roleToDelete) {
    const updatedRoleData = roleData.filter(
      (role) => role.role !== roleToDelete
    );
    setRoleData(updatedRoleData);
  }

  const [editingRole, setEditingRole] = useState(null);

  // Edit role handler
  function editRoleHandler(row) {
    setEditingRole(row);
  }

  // Update role handler
  function updateRole(updatedRole) {
    const updatedRoleData = roleData.map((role) =>
      role.role === updatedRole.role ? updatedRole : role
    );
    setRoleData(updatedRoleData);
    setEditingRole(null); 
  }

  return (
    <div>
      <Navbar />
      <Routes>
      <Route path='/' element={<HomePg/>} />
        <Route path='/user' element={<User userData={userData} deleteHandler={deleteHandler} setSelectedUser={setSelectedUser}/>} />
        <Route path='/profile' element={<Myprofile />} />
        <Route path='/newuser' element={<NewUser addUser={addUser} selectedUser={selectedUser} updateUser={updateUser} />} />
        <Route path='/roles' element={<RolesTable roleData={roleData} deleteRoleHandler={deleteRoleHandler}  editRoleHandler={editRoleHandler}/>} />
        <Route path='/rolesform' element={<RoleForm addRole={addRole}  editingRole={editingRole}
      updateRole={updateRole}  />} />
      </Routes>
    </div>
  );
}

export default App;

