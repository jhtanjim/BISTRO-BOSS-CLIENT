import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './ROuter/Routes.jsx';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import AuthProvider from './Providers/AuthProvider.jsx';
// tenstack query
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>

      <HelmetProvider>

        <QueryClientProvider client={queryClient}>
          <div className=' mx-auto '>
            <RouterProvider router={router} />
          </div>
        </QueryClientProvider>



      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>
)
