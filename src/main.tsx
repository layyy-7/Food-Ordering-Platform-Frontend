import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import { BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from './AppRoutes'
import AuthProvider from './auth/AuthProvider'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Toaster } from 'sonner'

const queryClient=new QueryClient
({
    defaultOptions:
    {
        queries:
        {
            refetchOnWindowFocus:false
        }
    }
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
        <QueryClientProvider client={queryClient}>
            <AuthProvider>
                <AppRoutes></AppRoutes>
                <Toaster visibleToasts={1} position='top-right' richColors></Toaster>
            </AuthProvider>
        </QueryClientProvider>
    </Router>
  </React.StrictMode>,
)