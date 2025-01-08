import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router'
import Layout from './components/Layout.jsx'
import Home from './components/Home.jsx'
import  Chat from "./components/Chat.jsx";
import App from './App.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="AnalyzerForm" element={<Chat/>} />
      <Route path="App" element={<App />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);