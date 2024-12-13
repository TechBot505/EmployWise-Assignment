import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext';

const Login = lazy(() => import('./pages/Login'));
const UserList = lazy(() => import('./pages/UserList'));

function App() {
  return (
    <UserProvider>
      <Router>
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/users" element={<UserList />} />
          </Routes>
        </Suspense>
      </Router>
    </UserProvider>
  );
}

export default App;
