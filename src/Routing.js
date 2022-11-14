import React from 'react';
import ReactDOM from 'react-dom';
import { 
  createBrowserRouter, RouterProvider, Route
} from 'react-router-dom';
import App from './App';

const routes = createBrowserRouter([
    { path: "/", element: <App /> },
    { path: "/home", element: <p>Home works!</p> },
    { path: "/about", element: <p>About works!</p> },
]);

export default routes;

