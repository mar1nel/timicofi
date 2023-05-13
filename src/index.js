import {createBrowserRouter, RouterProvider, } from "react-router-dom";
import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import CryptoTable from "./Pages/CryptoTable";
import './index.css';


const router = createBrowserRouter([
    { path: "/", element: <App />, },
    { path: "/crypto-table", element: <CryptoTable />, }

    ]);

ReactDOM.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
    document.getElementById('root')
);
