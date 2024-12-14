# EmployWise Frontend Assignment - User Management Application

## Introduction

This project is a user management application built using React.js, Tailwind CSS, and the Reqres API. The application provides essential user management functionalities, including authentication, user listing, editing, deleting, and filtering. It also features responsive design and is deployed on Netlify for seamless accessibility.

---

## Folder Structure

```
frontend-assignment/
├── public/
│   └── index.html       # Main HTML file
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── EditUserModal.js
│   │   ├── PaginationControls.js
│   │   ├── SearchBar.js
│   │   └── UserCard.js
│   ├── contexts/        # Context API for global state management
│   │   └── UserContext.js
│   ├── pages/           # Application pages
│   │   ├── Login.js
│   │   └── UserList.js
│   ├── App.js           # Main application file
│   ├── index.js         # Application entry point
│   └── styles/          # Custom styles if any
├── package.json         # Project dependencies
├── tailwind.config.js   # Tailwind CSS configuration
└── README.md            # Project documentation
```

---

## Key Features

### 1. **Authentication**

- Can you 
- Stores the authentication token in localStorage for persistence.
- Redirects users to the login page if the token is missing or expired.
- Validates user input with error feedback using `react-toastify`.

### 2. **User Management**

#### User List

- Fetches and displays a paginated list of users using `GET /api/users?page=1`.
- Users are displayed with their first name, last name, and avatar in a card-based layout.
- Implements client-side pagination to navigate through user data.

#### Edit User

- Allows updating user details (first name, last name, email) via a pre-filled edit modal.
- Updates data on the server using the `PUT /api/users/{id}` endpoint.
- Uses context API to update the global state after a successful edit.

#### Delete User

- Deletes a user from the list using the `DELETE /api/users/{id}` endpoint.
- Removes the user from the global state after a successful deletion.
- Displays success or error notifications using `react-toastify`.

### 3. **Search and Filter**

- Implements client-side search functionality.
- Filters the user list dynamically based on first name or last name input.

### 4. **Pagination**

- Provides pagination controls for navigating through pages.
- Dynamically fetches user data for the current page.

### 5. **Global Context Management**
- Used Context API for managing users context gobally.

### 6. **Responsive Design**

- Built with Tailwind CSS for responsive and user-friendly design.
- Optimized for both desktop and mobile devices.

### 7. **Error Handling**

- Displays appropriate error messages for API failures using `react-toastify`.
- Redirects to the login page on session expiration.

### 8. **React Router**

- Imlementd age navigation and routing using React Router.

### 9. **Deployment**

- Hosted on Netlify for public access.
- URL: [Deployed Application](https://employ-wise-505.netlify.app/)

---

## Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **State Management**: Context API
- **HTTP Client**: Axios
- **Routing**: React Router
- **Notifications**: React Toastify
- **Deployment**: Netlify

---

## Local Setup Instructions

### Prerequisites

- Node.js and npm installed on your system.

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/TechBot505/EmployWise-Assignment
   cd frontend-assignment
   ```

2. Install dependencies:

   ```bash
   npm install
   ```
   **NOTE:** If `npm install` fails, run ``` npm config set legacy-peer-deps true ```, and then `npm install` again.

3. Start the development server:

   ```bash
   npm run start
   ```

4. Access the application at:

   ```
   http://localhost:3000
   ```

---

## API Reference

- **Base URL**: `https://reqres.in/`
- **Login**: `POST /api/login`
- **Fetch Users**: `GET /api/users?page={page}`
- **Edit User**: `PUT /api/users/{id}`
- **Delete User**: `DELETE /api/users/{id}`

---

