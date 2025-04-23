import React, { useState } from 'react';

function Myprofile() {
  const [details, setDetails] = useState(true);
  const [ChangePasswordVisible, setChangePasswordVisible] = useState(false);
  const [info, setInfo] = useState({
    Name: "System Administrator",
    Email: "admin@example.com",
    Mobile: "123-456-7890",
    oldPass: "",
    newPass: "",
    confirmPass: "",
  });

  const [savedInfo, setSavedInfo] = useState({
    Email: "admin@example.com",
    Mobile: "123-456-7890",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const detailHandler = () => {
    setDetails((prev) => !prev);
    setDetails(true);
    setChangePasswordVisible(false);
  };

  const passHandler = () => {
    setChangePasswordVisible((prev) => !prev);
    setChangePasswordVisible(true);
    setDetails(false);
  };

  const submitHandler = () => {
    if (details) {
      alert("Details updated successfully!");
      setSavedInfo({
        Email: info.Email,
        Mobile: info.Mobile,
      });
    } else if (ChangePasswordVisible) {
      if (info.newPass !== info.confirmPass) {
        alert("Passwords do not match!");
        return;
      }
      setInfo((prev) => ({
        ...prev,
        oldPass: info.confirmPass,
        newPass: "",
        confirmPass: "",
      }));
      alert("Password changed successfully!");
    }
  };

  return (
    <div className="bg-gray-100 p-4">
      <h6 className="bg-blue-200 text-black text-center py-2 rounded-t-lg text-xl font-bold shadow-lg mb-6">
        MY PROFILE
      </h6>
      <div className="flex flex-col md:flex-row justify-center items-center min-h-screen gap-6">
        {/* Profile Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/3">
          <div className="text-center mb-4">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTZL1ETcLiVO58LE5RSVGBxF7p2FIKPaXWVw&s"
              alt="Profile"
              className="rounded-full w-20 h-20 mx-auto border-4 border-gray-200 shadow-lg"
            />
            <h2 className="text-2xl font-semibold text-gray-700 mt-4">System Administrator</h2>
          </div>
          <div className="text-center space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-600">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 mt-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={savedInfo.Email}
                readOnly
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">Mobile</label>
              <input
                type="tel"
                className="w-full px-4 py-2 mt-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={savedInfo.Mobile}
                readOnly
              />
            </div>
          </div>
        </div>

   
        <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/3">
          <div className="flex justify-between mb-4">
            <button
              className="text-lg font-medium text-gray-600 hover:bg-gray-200 px-4 py-2 rounded-lg transition"
              onClick={detailHandler}
            >
              Details
            </button>
            <button
              className="text-lg font-medium text-gray-600 hover:bg-gray-200 px-4 py-2 rounded-lg transition"
              onClick={passHandler}
            >
              Change Password
            </button>
          </div>

          {details && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-600">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  name="Name"
                  value={info.Name}
                  onChange={handleInputChange}
                  placeholder="Enter name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  name="Email"
                  value={info.Email}
                  onChange={handleInputChange}
                  placeholder="Enter email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Mobile</label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  name="Mobile"
                  value={info.Mobile}
                  onChange={handleInputChange}
                  placeholder="Enter mobile"
                />
              </div>
            </div>
          )}

          {ChangePasswordVisible && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-600">Old Password</label>
                <input
                  type="password"
                  className="w-full px-4 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  name="oldPass"
                  value={info.oldPass}
                  onChange={handleInputChange}
                  placeholder="Enter old password"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">New Password</label>
                <input
                  type="password"
                  className="w-full px-4 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  name="newPass"
                  value={info.newPass}
                  onChange={handleInputChange}
                  placeholder="Enter new password"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Confirm New Password</label>
                <input
                  type="password"
                  className="w-full px-4 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  name="confirmPass"
                  value={info.confirmPass}
                  onChange={handleInputChange}
                  placeholder="Confirm new password"
                />
              </div>
            </div>
          )}

          <button
            className="w-full py-2 px-4 mt-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none transition"
            onClick={submitHandler}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Myprofile;

