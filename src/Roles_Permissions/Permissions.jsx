import React from 'react';
import PropTypes from 'prop-types';

function Permissions({ permissions = [], onPermissionChange }) {
  const allPermissions = ['Read', 'Write', 'Edit']; 

  const handlePermissionToggle = (permission) => {
    if (permissions.includes(permission)) {
      onPermissionChange(permissions.filter((p) => p !== permission));
    } else {
      onPermissionChange([...permissions, permission]);
    }
  };

  return (
    <div className="mb-4">
      <h3 className="text-sm font-medium text-gray-700 mb-2">Permissions</h3>
      {allPermissions.map((permission) => (
        <label key={permission} className="flex items-center space-x-2 mb-2">
          <input
            type="checkbox"
            checked={permissions.includes(permission)}
            onChange={() => handlePermissionToggle(permission)}
            className="text-indigo-600 focus:ring-indigo-500"
          />
          <span>{permission}</span>
        </label>
      ))}
    </div>
  );
}

Permissions.propTypes = {
  permissions: PropTypes.array.isRequired,
  onPermissionChange: PropTypes.func.isRequired,
};

export default Permissions;

