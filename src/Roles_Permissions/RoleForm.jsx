import React, { useState, useEffect } from 'react';
import Permissions from './Permissions';

function RoleForm({ addRole, editingRole = null, updateRole }) {
  const [roleFormData, setRoleFormData] = useState({
    role: '',
    status: 'Active',
    permissions: [],
  });

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

    if (!roleFormData.role) {
      alert('Role is required'); // Simple runtime check
      return;
    }

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
  };

  return (
    <div className="max-w-md mx-auto mt-20 bg-white p-6 shadow-md rounded-lg w-[70%]">
      <h2 className="text-2xl font-bold mb-4">User Role and Status Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Role Input */}
        <div className="mb-4">
          <label htmlFor="role" className="block text-sm font-medium text-gray-700">
            Role
          </label>
          <input
            type="text"
            id="role"
            name="role"
            value={roleFormData.role}
            onChange={handleChange}
            className="w-full border-gray-800 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        {/* Status Input */}
        <div className="mb-4">
          <label htmlFor="status" className="block text-sm font-medium text-gray-700">
            Status
          </label>
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

        {/* Permissions Component */}
        <Permissions
          permissions={roleFormData.permissions}
          onPermissionChange={handlePermissionChange}
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default RoleForm;

