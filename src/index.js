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
import CheckoutPage from "./Pages/CheckoutPage";
import AdminPage from "./Pages/AdminPage";


const router = createBrowserRouter([
    { path: "/", element: <App /> },
    { path: "/auth", element: <AuthPage /> },
    { path: "/table", element: <CryptoTable /> },
    { path: "/shop-page", element: <ShopPage /> },
    { path: "/checkout", element: <CheckoutPage />},
    { path: "/contact-page", element: <ContactPage /> },
    { path: "/admin", element: <AdminPage /> },
]);


const root = createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <CartProvider>
            <RouterProvider router={router} />
        </CartProvider>
    </React.StrictMode>,
);
