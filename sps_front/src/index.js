import { BrowserRouter, Route, Routes, Outlet, Navigate } from 'react-router-dom';
import { UserProvider } from './component/context/user/UserContext';
import { RepoProvider } from './component/context/repos/RepoContext';
import Register from './component/auth/register/Register';
import Private from './component/auth/private/Private';
import Login from './component/auth/login/Login';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <RepoProvider>
      <UserProvider>
        <BrowserRouter>
            <Routes>
              {/* <Route path="/" element={<Private />} > */}
                <Route path="/app" element={<App />} />
              {/* </Route> */}
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </BrowserRouter>
      </UserProvider>
    </RepoProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
