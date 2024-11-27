# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

This project is a User Management System built using React. The application allows you to manage users by adding, editing, and deleting them. It provides a clean and intuitive interface where users can be listed, clicked to view and edit their details, and new users can be added or updated.Also the roles of the users can also be listed and the permissions of every role acn aalso be updated or deleted.
Technologies used-React.js,Material UI,Tailwind

To get started with this project

Prerequisites are:
Node.js (version 14 or later)
npm (Node package manager)
1.The profile of the admin can be visited which has the features of updating the email,mobile and password of the admin.
2. User Page (User.jsx):
The User.js component displays a table with all the existing users.
Clicking on any row allows you to view and edit the user details.
You can also delete a user from this page.
3. Create/Update User Page (NewUser.jsx):
The NewUser.jsx component contains a form for creating new users and editing existing users.
If you are editing an existing user, their information will be pre-filled into the form, and you can make changes then when the refresh takes place then the Create New User form appears on the UI after Updating or submitting the changes
On submission, either a new user is added or an existing user is updated, depending on whether selectedUser is passed to the component.
4. Roles Page(RolesTable.jsx)
where the Status of each role is visible.
The role and the status can be updated or deleted.
Similarly The permissions of every role can be added/edited/deleted.
If you are editing an existing role, their information will be pre-filled into the form(RoleForm.jsx)
