import {createBrowserRouter, RouterProvider, } from "react-router-dom";
import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import CryptoTable from "./Pages/CryptoTable";
import ContactPage from "./Pages/ContactPage";
import AuthPage from "./Pages/AuthPage";

import './index.css';
import ShopPage from "./Pages/ShopPage";


const router = createBrowserRouter([
    { path: "/", element: <App /> },
    { path: "/auth", element: <AuthPage /> },
    { path: "/table", element: <CryptoTable /> },
    { path: "/shop-page", element: <ShopPage /> },
    { path: "/contact-page", element: <ContactPage /> },
]);


ReactDOM.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
    document.getElementById('root')
);
