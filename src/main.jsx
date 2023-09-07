import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import {RouterProvider} from "react-router-dom";
import router from './Router/Routes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
