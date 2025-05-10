import App from './App';
import React from 'react';

import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import {CartProvider} from "./Context/CartContext";
import {createRoot} from 'react-dom/client';
import CheckoutPage from "./Pages/CheckoutPage";
import ContactPage from "./Pages/ContactPage";
import CryptoTable from "./Pages/CryptoTable";
import AuthPage from "./Pages/AuthPage";
import ShopPage from "./Pages/ShopPage";
import './index.css';

const router = createBrowserRouter([
    {path: "/", element: <App/>},
    {path: "/auth", element: <AuthPage/>},
    {path: "/table", element: <CryptoTable/>},
    {path: "/shop-page", element: <ShopPage/>},
    {path: "/checkout", element: <CheckoutPage/>},
    {path: "/contact-page", element: <ContactPage/>},
]);

const root = createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <CartProvider>
            <RouterProvider router={router}/>
        </CartProvider>
    </React.StrictMode>,
);
