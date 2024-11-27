
import React from 'react';

function Permissions({ permissions, onPermissionChange }) {
  const handlePermissionToggle = (permission) => {
    const updatedPermissions = permissions.includes(permission)
      ? permissions.filter((perm) => perm !== permission)
      : [...permissions, permission];
    onPermissionChange(updatedPermissions);
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">Permissions</label>
      <div className="mt-3">
        <label>
          <input
            type="checkbox"
            checked={permissions.includes('View')}
            onChange={() => handlePermissionToggle('View')}
          />
          View
        </label>
        <label className="ml-6">
          <input
            type="checkbox"
            checked={permissions.includes('Edit')}
            onChange={() => handlePermissionToggle('Edit')}
         
          />
          Edit
        </label>
        <label className="ml-6">
          <input
            type="checkbox"
            checked={permissions.includes('Delete')}
            onChange={() => handlePermissionToggle('Delete')}
          />
          Delete
        </label>
      </div>
    </div>
  );
}

export default Permissions;
