import {createBrowserRouter, RouterProvider, } from "react-router-dom";
import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './App';
import {CartProvider} from "./Context/CartContext";
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


const root = createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <CartProvider>
            <RouterProvider router={router} />
        </CartProvider>
    </React.StrictMode>,
);
