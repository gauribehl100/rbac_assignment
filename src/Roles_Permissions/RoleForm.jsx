import React, { useState, useEffect } from 'react';
import Permissions from './Permissions';

function RoleForm({ addRole, editingRole, updateRole }) {
  const [roleFormData, setRoleFormData] = useState({
    role: '',
    status: 'Active',
    permissions: [],  
  });

  const [errors, setErrors] = useState({});

  
  useEffect(() => {
    if (editingRole) {
      setRoleFormData({
        ...editingRole,
      });
    }
  }, [editingRole]);

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRoleFormData({ ...roleFormData, [name]: value });
  };

  
  const handlePermissionChange = (permissions) => {
    setRoleFormData({ ...roleFormData, permissions });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!roleFormData.role) newErrors.role = 'Role is required';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      if (editingRole) {
        updateRole(roleFormData);
      } else {
        addRole({ ...roleFormData, createdOn: new Date().toLocaleDateString() });
      }
      setRoleFormData({
        role: '',
        status: 'Active',
        permissions: [],
      }); // Reset form
    }
  };

  return (
    <div>
      <div className="max-w-md mx-auto mt-20 bg-white p-6 shadow-md rounded-lg w-[70%]">
        <h2 className="text-2xl font-bold mb-4">User Role and Status Form</h2>
        <form onSubmit={handleSubmit}>
          {/* Role Input */}
          <div className="mb-4">
            <label htmlFor="role" className="block text-sm font-medium text-gray-700">
              Role
            </label>
            <br></br>
            <input
              type="text"
              id="role"
              name="role"
              value={roleFormData.role}
              onChange={handleChange}
              className="w-full border-gray-800 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
            {errors.role && <p className="text-red-500 text-sm mt-1">{errors.role}</p>}
          </div>

<br></br>
          {/* Status Input */}
          <div className="mb-4">
            <label htmlFor="status" className="block text-sm font-medium text-gray-700">
              Status
            </label>
            <br></br>
            <div className="flex space-x-4 mt-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="status"
                  value="Active"
                  checked={roleFormData.status === 'Active'}
                  onChange={handleChange}
                  className="text-indigo-600 focus:ring-indigo-500"
                />
                <span className="ml-2">Active</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="status"
                  value="Inactive"
                  checked={roleFormData.status === 'Inactive'}
                  onChange={handleChange}
                  className="text-indigo-600 focus:ring-indigo-500"
                />
                <span className="ml-2">Inactive</span>
              </label>
            </div>
          </div>
<br></br>
          {/* Permissions Component */}
          <Permissions permissions={roleFormData.permissions} onPermissionChange={handlePermissionChange} />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default RoleForm;

