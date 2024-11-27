import React, { useState, useEffect } from 'react';

function NewUser({ selectedUser, addUser, updateUser }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    mobile: '',
    role: '',
    type: '',
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (selectedUser) {
      setFormData({
        name: selectedUser.name || '',
        email: selectedUser.email || '',
        password: selectedUser.password || '',
        mobile: selectedUser.mobile || '',
        role: selectedUser.role || '',
        type: selectedUser.type || '',
      });
    }
   
  }, [selectedUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (!formData.type) newErrors.type = 'User type is required';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      if (selectedUser) {
        updateUser({ ...formData, createdOn: selectedUser.createdOn });
        alert('User updated successfully!');
        setFormData({
          name: '',
          email: '',
          password: '',
          mobile: '',
          role: '',
          type: '',
        });
      } else  {
        addUser({ ...formData, createdOn: new Date().toLocaleDateString() });
        alert('User created successfully!');
      }

      setFormData({
        name: '',
        email: '',
        password: '',
        mobile: '',
        role: '',
        type: '',
      });
    }
  };

  return (
    <div className="max-w-md mx-auto mt-16 bg-white p-6 shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">
        {selectedUser ? 'Edit User' : 'Create New User'}
      </h2>
      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter name"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter email"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter password"
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
        </div>

        {/* Role */}
        <div className="mb-4">
          <label className="block text-gray-700">Role</label>
          <input
            type="text"
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter role"
          />
          {errors.role && <p className="text-red-500 text-sm">{errors.role}</p>}
        </div>

        {/* User Type */}
        <div className="mb-4">
          <label className="block text-gray-700">User Type</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Type</option>
            <option value="Regular User">Regular User</option>
            <option value="Admin">Admin</option>
            <option value="System Admin">System Admin</option>
          </select>
          {errors.type && <p className="text-red-500 text-sm">{errors.type}</p>}
        </div>

        <div className="mb-4">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md"
          >
            {selectedUser ? 'Update User' : 'Create User'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewUser;
